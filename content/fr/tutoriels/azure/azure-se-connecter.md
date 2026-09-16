---
title: Azure - Se connecter
description: Comment se connecter à Microsoft Azure
translationKey: tutorials/azure-get-connected
draft: false
tags:
  - Azure
  - RBAC
  - CLI
categories:
  - Tutoriels
  - Azure
---

## Navigateur Web

Une fois que vous avez reçu et accepté l'invitation a notre client Azure (163Oxygen), vous devrez visiter le portail Azure pour commencer.

L'URL est : [https://portal.azure.com/163oxygen.onmicrosoft.com](https://portal.azure.com/163oxygen.onmicrosoft.com)

1. Vous serez présenté avec la page d'accueil du portail Azure
2. Naviguez vers « Abonnements » pour voir tous les abonnements Azure (le « conteneur » principal que nous déléguons à chacune de nos expériences) auxquels vous avez accès
3. Cliquez sur un abonnement pour afficher ses ressources et gérer les services qu'il contient
4. Par défaut, vous aurez le rôle `Contributor` assigné, ce qui vous permet de créer et gérer des ressources, mais pas de modifier les permissions d'accès

### Notes

- Azure offre plusieurs vues **globales** et capacités de recherche à travers tous vos abonnements
  - Utilisez la barre de recherche globale en haut pour trouver des ressources à travers toutes les régions et abonnements
  - La vue « Toutes les ressources » affiche les ressources de toutes les régions auxquelles vous avez accès
- Azure a deux régions au Canada : **Canada Central** et **Canada East**
  - Bien que vous puissiez utiliser n'importe quelle région, essayez de garder vos ressources dans les régions canadiennes lorsque possible pour la résidence des données et la performance
  - Canada Central (Toronto) est généralement la région canadienne principale
- Si vous devez créer des rôles personnalisés ou modifier des permissions, vous devrez travailler avec l'équipe LaunchPad.
  
## Ligne de commande (CLI)

### Installer Azure CLI

L'interface de ligne de commande Azure (CLI) est un outil multiplateforme pour se connecter à Azure et exécuter des commandes administratives sur les ressources Azure. Il permet l'exécution de commandes via un terminal en utilisant des invites de ligne de commande interactives ou un script.

Pour une utilisation interactive, vous lancez d'abord un shell tel que cmd.exe sur Windows, ou Bash sur Linux ou macOS, puis vous émettez une commande à l'invite du shell. Pour automatiser des tâches répétitives, vous assemblez les commandes CLI dans un script shell utilisant la syntaxe de script de votre shell choisi, puis vous exécutez le script.

Azure CLI (`az`) est disponible pour Windows, macOS et Linux.

#### Linux

```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

#### macOS

```bash
brew update && brew install azure-cli
```

#### Windows

Téléchargez et exécutez l'installateur MSI depuis : [https://aka.ms/installazurecliwindows](https://aka.ms/installazurecliwindows), ou contactez votre équipe TI départementale pour demander son installation.

### Configurer Azure CLI

1. Pour vous connecter à notre tenant en utilisant un code d'appareil (utile lors de l'exécution de commandes sur un système distant)  
    `az login --tenant 8c1a4d93-d828-4d0e-9303-fd3bd611c822 --use-device-code`
2. Ceci fournira un code et une URL à visiter pour vous authentifier
3. Connectez-vous avec vos identifiants pour le tenant 163Oxygen
4. Une fois authentifié, le CLI affichera une liste des abonnements auxquels vous avez accès; sélectionnez celui dans lequel vous souhaitez travailler

#### Autres commandes

Pour définir un abonnement par défaut :  
`az account set --subscription "<SubscriptionName or SubscriptionID>"`  

Pour voir votre abonnement actuel :  
`az account show`  

Pour lister tous les abonnements disponibles :  
`az account list --output table`

Pour définir l'emplacement par défaut (région) :  
`az configure --defaults location=canadacentral`

Définir le format de sortie par défaut :  
`az configure --defaults output=json`  
D'autres formats de sortie utiles incluent : `table`, `yaml`, `tsv`, `jsonc`

### Installer AzCopy

AzCopy est un utilitaire de ligne de commande que vous pouvez utiliser pour copier des données vers et depuis des conteneurs et partages de fichiers dans les comptes de stockage Azure, via des commandes faciles à utiliser qui sont optimisées pour une haute performance et un débit élevé.

### Linux

```bash
# Télécharger AzCopy
wget https://aka.ms/downloadazcopy-v10-linux

# Extraire l'archive
tar -xvf downloadazcopy-v10-linux

# Déplacer AzCopy vers votre répertoire bin
sudo cp ./azcopy_linux_amd64_*/azcopy /usr/local/bin/

# Le rendre exécutable
sudo chmod +x /usr/local/bin/azcopy
```

#### macOS

```bash
# Télécharger AzCopy
wget https://aka.ms/downloadazcopy-v10-mac

# Extraire l'archive
tar -xvf downloadazcopy-v10-mac

# Déplacer AzCopy vers votre répertoire bin
sudo cp ./azcopy_darwin_amd64_*/azcopy /usr/local/bin/

# Le rendre exécutable
sudo chmod +x /usr/local/bin/azcopy
```

#### Windows

- Téléchargez le fichier ZIP depuis : [https://aka.ms/downloadazcopy-v10-windows](https://aka.ms/downloadazcopy-v10-windows)
- Extrayez le ZIP et ajoutez l'exécutable AzCopy à votre PATH.
