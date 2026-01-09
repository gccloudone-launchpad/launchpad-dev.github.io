---
title: Ajouter Certificats a WSL
description: ""
translationKey: tutorials_add-certificates-WSL
draft: false
tags:
  - Linux
  - WSL
  - Certificats
categories:
  - Tutoriels
---

## Ajouter des certificats au magasin de confiance sur WSL

Lorsque vous travaillez au bureau, certains sites ont une inspection du trafic effectuée via un pontage TLS transparent (effectivement un MitM). Sous Windows, ce n'est pas un problème, car les certificats utilisés pour rechiffrer le trafic sont automatiquement ajoutés à notre magasin de certificats racine de confiance via des politiques.

Dans WSL, cela ne fonctionne pas, et `curl` ainsi que d'autres outils échouent en raison d'un certificat non fiable dans la chaîne.

Nous pourrions simplement utiliser l'option `-k` pour `curl`, qui désactive la validation des certificats, mais la meilleure approche serait de corriger le problème sous-jacent en ajoutant le certificat non fiable (qui est probablement auto-signé) à votre magasin.

### 1.  Déterminer quel certificat échoue à la validation

This can be a little complicated, and requires a bit of spelunking into the verbose output of things like `curl`, `openssl`, or the use of a handy tool called [`crip`](https://github.com/Hakky54/certificate-ripper).

This is the verbose output of trying to access `https://logdy.dev/install.sh` with `curl`:

```text
$ curl -vv https://logdy.dev/install.sh | sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* Host logdy.dev:443 was resolved.
* IPv6: 2606:4700:3030::6815:6001, 2606:4700:3030::6815:1001, 2606:4700:3030::6815:5001, 2606:4700:3030::6815:2001, 2606:4700:3030::6815:3001, 2606:4700:3030::6815:7001, 2606:4700:3030::6815:4001
* IPv4: 104.21.16.1, 104.21.80.1, 104.21.48.1, 104.21.64.1, 104.21.32.1, 104.21.112.1, 104.21.96.1
*   Trying 104.21.16.1:443...
* Connected to logdy.dev (104.21.16.1) port 443
* ALPN: curl offers h2,http/1.1
} [5 bytes data]
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
} [512 bytes data]
*  CAfile: /etc/ssl/certs/ca-certificates.crt
*  CApath: /etc/ssl/certs
{ [5 bytes data]
* TLSv1.3 (IN), TLS handshake, Server hello (2):
{ [122 bytes data]
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
{ [15 bytes data]
* TLSv1.3 (IN), TLS handshake, Certificate (11):
{ [5023 bytes data]
* TLSv1.3 (OUT), TLS alert, unknown CA (560):
} [2 bytes data]
* SSL certificate problem: self-signed certificate in certificate chain
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Closing connection
curl: (60) SSL certificate problem: self-signed certificate in certificate chain
More details here: https://curl.se/docs/sslcerts.html

curl failed to verify the legitimacy of the server and therefore could not
establish a secure connection to it. To learn more about this situation and
how to fix it, please visit the web page mentioned above.
```

You can see the error message near the bottom (`curl: (60) SSL certificate problem: self-signed certificate in certificate chain`), however it doesn't tell you which certificate in the chain is self-signed.

If we use `crip` to show the certificate chain, we can see more details about the subject and issuer of each one (certificate contents snipped for brevity):

```text
$ crip print  -u=https://logdy.dev -f=pem

Certificate ripper statistics:
- Certificate count

  * 4: https://logdy.dev
         [cn=logdydev]
         [cn=pspc-ssc-fg-ssl-proxy_o=pspc-ssc_l=ottawa_st=ontario_c=ca]
         [cn=goc-gdc-issuing-a1a_o=gc_c=ca]
         [cn=goc-gdc-root-a_o=gc_c=ca]

Certificates for url = https://logdy.dev

subject=CN=logdy.dev
issuer=CN=PSPC-SSC FG SSL Proxy,O=PSPC-SSC,L=Ottawa,ST=Ontario,C=CA
-----BEGIN CERTIFICATE-----
..<snip>...
-----END CERTIFICATE-----

<========== Next certificate for https://logdy.dev ==========>

subject=CN=PSPC-SSC FG SSL Proxy,O=PSPC-SSC,L=Ottawa,ST=Ontario,C=CA
issuer=CN=GOC-GDC-ISSUING-A1A,O=GC,C=CA
-----BEGIN CERTIFICATE-----
..<snip>...
-----END CERTIFICATE-----

<========== Next certificate for https://logdy.dev ==========>

subject=CN=GOC-GDC-ISSUING-A1A,O=GC,C=CA
issuer=CN=GOC-GDC-ROOT-A,O=GC,C=CA
-----BEGIN CERTIFICATE-----
..<snip>...
-----END CERTIFICATE-----

<========== Next certificate for https://logdy.dev ==========>

subject=CN=GOC-GDC-ROOT-A,O=GC,C=CA
issuer=CN=GOC-GDC-ROOT-A,O=GC,C=CA
-----BEGIN CERTIFICATE-----
..<snip>...
-----END CERTIFICATE-----
```

Looking at the output, you can see it's clearly the last one that's self-signed (same subject and issuer), and causing our issues.

### 2.  Télécharger ce certificat

Using `crip`, we can easily download all the certificates in the chain:

```text
$ crip export pem  -u=https://logdy.dev

Certificate ripper statistics:
- Certificate count

  * 4: https://logdy.dev
         [cn=logdydev]
         [cn=pspc-ssc-fg-ssl-proxy_o=pspc-ssc_l=ottawa_st=ontario_c=ca]
         [cn=goc-gdc-issuing-a1a_o=gc_c=ca]
         [cn=goc-gdc-root-a_o=gc_c=ca]

Extracted 4 certificates.
It has been exported to /home/azureuser
```

This particular situation producse 4 files, called:

- `cn=goc-gdc-issuing-a1a_o=gc_c=ca.crt`
- `cn=goc-gdc-root-a_o=gc_c=ca.crt`
- `cn=logdydev.crt`
- `cn=pspc-ssc-fg-ssl-proxy_o=pspc-ssc_l=ottawa_st=ontario_c=ca.crt`

### 3.  Ajouter le certificat au bon dossier

On Ubuntu and Debian, Certificate Authority (CA) certificates must be placed in `/usr/local/share/ca-certificates`, in order for the next step to use them.

This is a protected folder, so you'll need to use `sudo`:

```text
sudo mv 'cn=goc-gdc-issuing-a1a_o=gc_c=ca.crt' /usr/local/share/ca-certificates/
```

On AlmaLinux, Rocky Linux, and other RHEL clones, you place them in `/etc/pki/ca-trust/source/anchors`.

### 4.  Mettre à jour le magasin de certificats de confiance de votre système d'exploitation

On Ubuntu, using the `update-ca-certificates` tool is all that's required to add these custom certificates. Again, this is a privileged command, so you'll need to use *sudo* to run it.

```text
$ sudo update-ca-certificates
Updating certificates in /etc/ssl/certs...
rehash: warning: skipping ca-certificates.crt,it does not contain exactly one certificate or CRL
1 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d...
Processing triggers for ca-certificates-java (20240118) ...
Adding debian:cn=goc-gdc-issuing-a1a_o=gc_c=ca.pem
done.
done.
```

On AlmaLinux, Rocky Linux, and RHEL clones, use the `update-ca-trust` command
