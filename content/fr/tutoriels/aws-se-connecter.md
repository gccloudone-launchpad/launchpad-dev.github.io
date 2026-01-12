---
title: AWS - Se connecter
description: Comment se connecter à AWS
translationKey: tutorials_aws-get-connected
draft: false
tags:
  - AWS
  - IAM
  - CLI
categories:
  - Tutoriels
---

## Navigateur Web

Une fois que vous avez reçu et accepté l'invitation au tenant Azure GCCO LaunchPad (163Oxygen), vous devrez visiter la page de connexion AWS pour commencer.

L'URL est : [https://gcscience.awsapps.com/start#](https://gcscience.awsapps.com/start#)

1. Vous verrez une liste de tous les comptes AWS (le « conteneur » principal que nous déléguons à chacune de nos expériences) auxquels vous avez accès
2. Si vous cliquez dessus, vous verrez le(s) rôle(s) disponible(s) pour ce compte; don un appelé `PowerSysadmin`
3. Cliquez sur le rôle que vous souhaitez utiliser, et une nouvelle fenêtre/onglet s'ouvrira pour ce rôle dans ce compte.

### Notes

- AWS n'offre malheureusement pas beaucoup de vues **globales**, vous devrez donc porter une attention particulière au menu déroulant de région en haut à droite
  - Typiquement, vous ne pouvez voir que les instances/ressources dans la région actuellement sélectionnée
  - AWS n'a présentement qu'une seule région au Canada « Canada (Centre) », ou `ca-central-1`, donc la solution la plus simple est d'essayer de tout garder là
- La page **Portail d'accès AWS** ne tolère pas l'ouverture de plusieurs comptes en même temps
  - Faire cela rendra inopérants tous les autres onglets AWS que vous aviez ouverts auparavant
  - Une fois dans la console de gestion, ouvrez autant de fenêtres/onglets que vous le souhaitez, tant que vous ne recommencez pas à partir de la page *Portail d'accès AWS*
- Si vous devez créer des rôles, vous êtes libre de le faire, mais vous devrez attacher une Boundary Policy.
  - Vous pouvez voir tous les détails à ce sujet [ici]({{< relref path="aws-roles-applications.md" >}})
  
## Ligne de commande (CLI)

1. Dans le terminal, tapez `aws configure sso`
2. On vous demandera ensuite d'entrer les informations suivantes :
    - SSO session name: `gcco-launchpad`
    - SSO start URL: `https://gcscience.awsapps.com/start#/`
    - SSO region: `ca-central-1`
    - SSO registration scopes: `sso:account:access`
3. Visitez l'URL et entrez le code fourni
4. Suivez les étapes pour vous authentifier et autoriser l'utilisation de `botocore-client-ssc-sp`
5. Une fois authentifié, sélectionnez le compte et le rôle que vous souhaitez utiliser
    1. Si plus d'un compte est visible, utilisez les flèches pour naviguer vers le haut/bas, et appuyez sur Entrée quand vous avez le bon
    2. Si plus d'un rôle est visible, utilisez les flèches pour naviguer vers le haut/bas, et appuyez sur Entrée quand vous avez le bon
6. Entrez la *CLI default client region*, comme `ca-central-1`
7. Entrez le *CLI default output format*, comme `json`
8. Pour le *CLI profile name*, vous pouvez laisser la valeur par défaut (qui est `<Rôle>-<NumeroDeCompte>` par défaut), ou en spécifier un de votre choix

### Profil par défaut

Vous pouvez forcer le CLI à utiliser un profil donné (paire Rôle/Compte) en définissant une variable d'environnement, ou manuellement sur la ligne de commande à chaque exécution.

Le nom du profil est celui que vous avez choisi à l'étape 8 ci-dessus.

- **Variable d'environnement**  
  Linux: `export AWS_DEFAULT_PROFILE=<NomDeProfile>`  
  Windows CMD: `set AWS_DEFAULT_PROFILE=<NomDeProfile>`  
  PowerShell: `$env:AWS_DEFAULT_PROFILE = '<NomDeProfile>'`  
- **À l'exécution**  
  Ajoutez `--profile <NomDeProfile>` à chaque commande que vous exécutez
