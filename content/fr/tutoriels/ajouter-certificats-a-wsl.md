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

## Contexte

Lorsque vous travaillez au bureau, certains sites ont une inspection du trafic effectuée via un pontage TLS transparent (effectivement un MitM). Sous Windows, ce n'est pas un problème, car les certificats utilisés pour rechiffrer le trafic sont automatiquement ajoutés à notre magasin de certificats racine de confiance via des politiques.

Dans WSL, cela ne fonctionne pas, et `curl` ainsi que d'autres outils échouent en raison d'un certificat non fiable dans la chaîne.

Nous pourrions simplement utiliser l'option `-k` pour `curl`, qui désactive la validation des certificats, mais la meilleure approche serait de corriger le problème sous-jacent en ajoutant le certificat non fiable (qui est probablement auto-signé) à votre magasin.

## Processus Pour Ajouter Certificat

### 1.  Déterminer quel certificat échoue à la validation

Cela peut être un peu compliqué et nécessite d'explorer la sortie détaillée de commandes comme `curl`, `openssl`, ou d'utiliser un outil pratique appelé [`crip`](https://github.com/Hakky54/certificate-ripper).

Voici la sortie détaillée lors de la tentative d'accès à `https://logdy.dev/install.sh` avec `curl` :

```text
$ curl -vv https://logdy.dev/install.sh | sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* Host logdy.dev:443 was resolved.
* IPv6: 2606:4700:3030::6815:6001, 2606:4700:3030::6815:1001, 2606:4700:3030::6815:5001, 
2606:4700:3030::6815:2001, 2606:4700:3030::6815:3001, 2606:4700:3030::6815:7001, 2606:4700:3030::6815:4001
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

Vous pouvez voir le message d'erreur près du bas (`curl: (60) SSL certificate problem: self-signed certificate in certificate chain`), mais il ne vous indique pas quel certificat dans la chaîne est auto-signé.

Si nous utilisons `crip` pour afficher la chaîne de certificats, nous pouvons voir plus de détails sur le sujet et l'émetteur de chacun (contenu des certificats abrégé pour plus de clarté) :

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

En examinant la sortie, vous pouvez voir que c'est clairement le dernier qui est auto-signé (même sujet et émetteur), et qui cause nos problèmes.

### 2.  Télécharger ce certificat

Avec `crip`, nous pouvons facilement télécharger tous les certificats de la chaîne :

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

Cette situation particulière produit 4 fichiers, appelés :

- `cn=goc-gdc-issuing-a1a_o=gc_c=ca.crt`
- `cn=goc-gdc-root-a_o=gc_c=ca.crt`
- `cn=logdydev.crt`
- `cn=pspc-ssc-fg-ssl-proxy_o=pspc-ssc_l=ottawa_st=ontario_c=ca.crt`

### 3.  Ajouter le certificat au bon dossier

Sur Ubuntu et Debian, les certificats d'autorité de certification (CA) doivent être placés dans `/usr/local/share/ca-certificates`, afin que la prochaine étape puisse les utiliser.

C'est un dossier protégé, vous devrez donc utiliser `sudo` :

```text
sudo mv 'cn=goc-gdc-issuing-a1a_o=gc_c=ca.crt' /usr/local/share/ca-certificates/
```

Sur AlmaLinux, Rocky Linux et autres clones RHEL, vous les placez dans `/etc/pki/ca-trust/source/anchors`.

### 4.  Mettre à jour le magasin de certificats de confiance de votre système d'exploitation

Sur Ubuntu, l'utilisation de l'outil `update-ca-certificates` est tout ce qui est nécessaire pour ajouter ces certificats personnalisés. Encore une fois, c'est une commande privilégiée, vous devrez donc utiliser `sudo` pour l'exécuter.

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

Sur AlmaLinux, Rocky Linux et les clones RHEL, utilisez la commande `update-ca-trust`
