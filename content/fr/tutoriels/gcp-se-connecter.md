---
title: GCP - Se connecter
description: Comment se connecter à Google Cloud Platform
translationKey: tutorials/gcp-get-connected
draft: false
tags:
  - GCP
  - IAM
  - CLI
categories:
  - GCP
  - Tutoriels
---

## Navigateur Web

Une fois que vous avez reçu et accepté l'invitation à l'organisation GCP du GCCO LaunchPad (carbon.science.cloud-nuage.canada.ca), vous devrez visiter la console Google Cloud pour commencer.

L'URL est : [https://console.cloud.google.com](https://console.cloud.google.com)

1. Vous serez présenté avec la page d'accueil de la console Google Cloud
2. Utilisez le sélecteur de projet en haut de la page pour voir tous les projets GCP (le « conteneur » principal que nous déléguons à chacune de nos expériences) auxquels vous avez accès
3. Cliquez sur un projet pour y basculer et afficher ses ressources
4. Par défaut, vous aurez le rôle `Editor` assigné, ce qui vous permet de créer et gérer la plupart des ressources, mais pas de modifier les permissions IAM

### Notes

- GCP offre d'excellentes vues **globales** et capacités de recherche à travers tous vos projets
  - Utilisez la barre de recherche en haut pour trouver des ressources à travers toutes les régions et projets
  - La vue « Ressources » affiche les ressources de toutes les régions auxquelles vous avez accès
- GCP a une région au Canada : **northamerica-northeast1** (Montréal)
  - Bien que vous puissiez utiliser n'importe quelle région, essayez de garder vos ressources dans la région canadienne lorsque possible pour la résidence des données et la performance
  - Vous pouvez également utiliser **northamerica-northeast2** (Toronto) qui a été ajoutée plus récemment
- Vous pouvez avoir plusieurs onglets/fenêtres de la console Google Cloud ouverts simultanément sans problème
- Si vous devez créer des rôles personnalisés ou modifier des permissions, vous devrez travailler avec l'équipe LaunchPad

## Ligne de commande (CLI)

### Installer Google Cloud CLI

Le Google Cloud CLI (`gcloud`) est un ensemble d'outils pour créer et gérer des ressources Google Cloud.

#### Linux

```bash
# Ajouter l'URI de distribution Cloud SDK comme source de paquets
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" \
 | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

# Importer la clé publique Google Cloud
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg \
 | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

# Mettre à jour et installer le Cloud SDK
sudo apt-get update && sudo apt-get install google-cloud-cli
```

#### macOS

```bash
# En utilisant Homebrew
brew install --cask google-cloud-sdk
```

#### Windows

Téléchargez et exécutez l'installateur depuis : [https://cloud.google.com/sdk/docs/install](https://cloud.google.com/sdk/docs/install), ou contactez votre équipe TI départementale pour demander son installation.

### Configurer Google Cloud CLI

1. Dans le terminal, tapez `gcloud init`
2. Suivez les invites pour vous authentifier :
   - Choisissez « Log in with a new account »
   - Ceci ouvrira votre navigateur pour l'authentification
3. Connectez-vous avec vos identifiants pour l'organisation carbon.science.cloud-nuage.canada.ca
4. Sélectionnez le projet avec lequel vous souhaitez travailler dans la liste
5. Choisissez une région et une zone par défaut lorsque demandé :
   - Région : `northamerica-northeast1` (Montréal)
   - Zone : `northamerica-northeast1-a` (ou b, ou c)

#### Autres commandes

Pour lister tous les projets disponibles :  
`gcloud projects list`

Pour basculer vers un projet différent :  
`gcloud config set project PROJECT_ID`

Pour voir votre configuration actuelle :  
`gcloud config list`

Pour définir une région par défaut :  
`gcloud config set compute/region northamerica-northeast1`

Pour définir une zone par défaut :  
`gcloud config set compute/zone northamerica-northeast1-a`

#### Utiliser gsutil pour Cloud Storage

L'outil `gsutil` est inclus avec le Cloud SDK et est utilisé pour travailler avec Cloud Storage.

**Lister les compartiments :**  
`gsutil ls`

**Copier des fichiers vers Cloud Storage :**  
`gsutil cp monfichier.txt gs://mon-compartiment/`

**Copier des fichiers depuis Cloud Storage :**  
`gsutil cp gs://mon-compartiment/monfichier.txt .`

**Synchroniser des répertoires :**  
`gsutil rsync -r repertoire-local gs://mon-compartiment/repertoire-distant`

### Authentification pour les applications

Pour l'authentification des applications, utilisez Application Default Credentials (ADC) :  
`gcloud auth application-default login`

Ceci permet à vos applications locales de s'authentifier en utilisant vos identifiants utilisateur pour le développement et les tests.
