---
title: Azure - Comprendre les services essentiels
description: Un guide pour débutants sur les services Azure essentiels
translationKey: tutorials/azure-core-services
showToc: true
draft: false
tags:
   - Azure
   - Machines virtuelles
   - Stockage
   - App Services
   - Bases de données
   - IA
categories:
   - Tutoriels
   - Azure
---

Ce guide vous présente les principaux services Azure que vous utiliserez couramment dans vos projets. Chaque section explique ce que fait le service, quand l'utiliser et comment commencer.

## Machines virtuelles (VMs)

### Qu'est-ce qu'une VM?

Les Machines virtuelles sont comme avoir un ordinateur dans le cloud. Vous pouvez choisir le système d'exploitation (Windows ou Linux), la taille (CPU et mémoire), et installer n'importe quel logiciel dont vous avez besoin.

### Quand utiliser les machines virtuelles

- Vous avez besoin d'un contrôle complet sur le système d'exploitation et les logiciels installés
- Vous exécutez des applications qui ne peuvent pas facilement être conteneurisées
- Vous avez besoin de configurations spécifiques ou de logiciels hérités
- Vous voulez migrer des serveurs sur site existants vers le cloud

### Pour commencer

1. Dans le portail Azure, recherchez « Machines virtuelles » et cliquez sur « Créer »
2. Choisissez votre abonnement et groupe de ressources
3. Donnez un nom à votre VM et sélectionnez une région (par ex., Canada Central)
4. Choisissez une image (système d'exploitation) - Ubuntu, Windows Server, etc.
5. Sélectionnez une taille en fonction de vos besoins CPU/mémoire - commencez petit et augmentez si nécessaire
6. Configurez l'authentification (clé SSH pour Linux, mot de passe pour Windows)
7. Vérifiez les paramètres réseau - par défaut, Azure crée un réseau virtuel pour vous
8. Cliquez sur « Vérifier + créer »

### Notes importantes

- Les VMs sont facturées à l'heure lorsqu'elles sont en cours d'exécution - arrêtez-les lorsqu'elles ne sont pas utilisées pour économiser
- Gardez votre VM à jour avec les correctifs de sécurité
- Sauvegardez régulièrement les VMs importantes en utilisant Azure Backup
- Utilisez des disques managés pour une meilleure fiabilité et gestion

## Comptes de stockage

### Qu'est-ce qu'un compte de stockage?

Les comptes de stockage fournissent un stockage cloud pour vos données. Pensez-y comme un endroit hautement évolutif et sécurisé pour stocker des fichiers, sauvegardes, journaux et données d'application.

### Types de stockage

- **Stockage Blob** : Pour les données non structurées comme les images, vidéos, sauvegardes et fichiers journaux
- **Stockage Fichier** : Comme un partage de fichiers réseau - peut être monté sur les machines virtuelles
- **Stockage File d'attente** : Pour la messagerie entre les composants d'application
- **Stockage Table** : Pour stocker des données structurées non relationnelles

### Quand utiliser les comptes de stockage

- Vous devez stocker des fichiers, images ou documents
- Vous voulez sauvegarder des données ou archiver d'anciens fichiers
- Votre application doit stocker et récupérer de grandes quantités de données
- Vous avez besoin d'un emplacement central pour les journaux ou informations de diagnostic

### Pour commencer

1. Recherchez « Comptes de stockage » et cliquez sur « Créer »
2. Choisissez votre abonnement et groupe de ressources
3. Donnez à votre compte de stockage un nom unique (doit être globalement unique, en minuscules, sans caractères spéciaux)
4. Sélectionnez une région (Canada Central recommandé)
5. Choisissez le niveau de performance :
   - **Standard** : Bon pour la plupart des scénarios, économique
   - **Premium** : Pour les scénarios haute performance (bases de données, VMs)
6. Choisissez la redondance :
   - **LRS** (Stockage localement redondant) : Le plus économique, données stockées dans un datacenter
   - **GRS** (Stockage géoredondant) : Données répliquées vers une autre région pour la reprise après sinistre
7. Cliquez sur « Vérifier + créer »

### Notes importantes

- Les noms de comptes de stockage doivent être globalement uniques dans tout Azure
- Différents niveaux de stockage (Hot, Cool, Archive) offrent différents prix - utilisez Cool ou Archive pour les données rarement consultées
- Utilisez les Shared Access Signatures (SAS) pour accorder un accès temporaire au stockage sans partager les clés
- Activez la suppression réversible pour récupérer les données supprimées accidentellement

## App Services

### Qu'est-ce qu'App Services?

App Services est une plateforme pour héberger des applications web, API REST et backends mobiles sans gérer l'infrastructure sous-jacente. Vous déployez simplement votre code, et Azure gère les serveurs, la mise à l'échelle et les mises à jour.

### Quand utiliser App Services

- Vous construisez une application web ou API
- Vous voulez vous concentrer sur le code, pas la gestion des serveurs
- Vous avez besoin de mise à l'échelle automatique basée sur le trafic
- Vous voulez un déploiement continu intégré depuis Git

### Plateformes supportées

- .NET, .NET Core
- Node.js
- Python
- PHP
- Java
- Ruby

### Pour commencer

1. Recherchez « App Services » et cliquez sur « Créer » → « Web App »
2. Choisissez votre abonnement et groupe de ressources
3. Donnez un nom unique à votre application (cela devient partie de votre URL : `yourapp.azurewebsites.net`)
4. Choisissez « Code » ou « Docker Container »
5. Sélectionnez votre pile d'exécution (par ex., Python 3.11, Node 20 LTS)
6. Sélectionnez un système d'exploitation (Linux ou Windows)
7. Choisissez une région (Canada Central recommandé)
8. Sélectionnez un App Service Plan (définit CPU/mémoire) :
   - **Free/Basic** : Bon pour le développement et les tests
   - **Standard** : Pour les charges de travail de production avec domaines personnalisés et SSL
   - **Premium** : Pour les applications de production à fort trafic avec mise à l'échelle
9. Cliquez sur « Vérifier + créer »

### Options de déploiement

- Déployez directement depuis VS Code
- Connectez-vous à GitHub pour un déploiement automatique sur git push
- Utilisez Azure CLI : `az webapp deploy`
- Téléchargez un fichier ZIP de votre application

### Notes importantes

- App Services inclut des certificats SSL intégrés pour les domaines `*.azurewebsites.net`
- Utilisez des emplacements de déploiement pour les environnements de staging avant de promouvoir en production
- Activez Application Insights pour la surveillance et les diagnostics
- Augmentez la taille (machine plus grande) ou le nombre d'instances (plus d'instances) selon vos besoins

## Bases de données - Azure Database for PostgreSQL

### Qu'est-ce qu'Azure Database for PostgreSQL?

Un service de base de données PostgreSQL entièrement géré. Azure gère les sauvegardes, mises à jour, correctifs et haute disponibilité pendant que vous vous concentrez sur votre application.

### Quand utiliser PostgreSQL

- Vous avez besoin d'une base de données relationnelle avec support SQL
- Vous construisez des applications nécessitant des requêtes complexes et des transactions
- Vous avez besoin de support pour les données JSON aux côtés de données relationnelles
- Vous voulez une base de données open-source avec un fort support communautaire

### Options de déploiement

- **Serveur flexible** : Recommandé pour la plupart des charges de travail, offre plus de contrôle et de fonctionnalités
- **Serveur unique** : En cours de dépréciation - utilisez Serveur flexible pour les nouveaux projets

### Pour commencer

1. Recherchez « Azure Database pour PostgreSQL » et cliquez sur « Créer »
2. Sélectionnez « Serveur flexible »
3. Choisissez votre abonnement et groupe de ressources
4. Donnez un nom unique à votre serveur
5. Sélectionnez une région (Canada Central recommandé)
6. Choisissez la version PostgreSQL (utilisez la dernière version stable sauf si vous avez des exigences spécifiques)
7. Configurez compute + stockage :
   - **Modulable** : Pour le développement et les applications à faible trafic
   - **Usage général** : Pour la plupart des charges de travail de production
   - **Mémoire optimisée** : Pour les opérations de base de données haute performance
8. Configurez le nom d'utilisateur administrateur et le mot de passe (conservez-les en sécurité!)
9. Configurez le réseau :
   - Autoriser les services Azure à accéder au serveur
   - Ajoutez votre adresse IP actuelle si vous voulez vous connecter depuis votre ordinateur
10. Cliquez sur « Vérifier + créer »

### Se connecter à votre base de données

Après la création, vous aurez besoin de :

- **Nom du serveur** : `yourserver.postgres.database.azure.com`
- **Nom d'utilisateur admin** : `youradmin`
- **Mot de passe** : Ce que vous avez défini lors de la création
- **Port** : `5432` (port PostgreSQL par défaut)

Exemple de chaîne de connexion :  
`postgresql://youradmin:yourpassword@yourserver.postgres.database.azure.com:5432/postgres?sslmode=require`

### Notes importantes

- Les sauvegardes sont automatiques - configurez la période de rétention selon vos besoins
- Activez la haute disponibilité pour les bases de données de production (crée une réplique de secours)
- Utilisez le pooling de connexions dans vos applications pour une meilleure performance
- Surveillez votre base de données avec Azure Monitor pour suivre la performance et l'utilisation des ressources
- Utilisez toujours des connexions SSL (requis par défaut)

## Azure AI Foundry

### Qu'est-ce qu'Azure AI Foundry?

Azure AI Foundry (anciennement Azure AI Studio) est une plateforme unifiée pour construire, tester et déployer des applications d'IA. Elle fournit un accès aux modèles Azure OpenAI (comme GPT-4, GPT-4o), des modèles d'IA personnalisés et des outils pour développer des solutions d'IA.

### Quand utiliser AI Foundry

- Vous voulez construire des applications alimentées par l'IA
- Vous avez besoin d'accès à de grands modèles de langage (LLMs) comme GPT-4
- Vous développez des chatbots, génération de contenu ou assistants IA
- Vous voulez créer des modèles d'IA personnalisés avec vos propres données

### Fonctionnalités clés

- **Azure OpenAI Service** : Accès aux modèles GPT-4, GPT-4o, GPT-3.5-Turbo et DALL-E
- **Prompt Flow** : Outil visuel pour concevoir et tester des flux de travail IA
- **Model Catalog** : Parcourir et déployer des modèles d'IA pré-entraînés
- **Fine-tuning** : Personnaliser les modèles avec vos propres données
- **Responsible AI Tools** : Filtrage de contenu intégré et fonctionnalités de sécurité

### Pour commencer

1. Recherchez « Azure AI Foundry » ou « Azure AI Studio » dans le portail
2. Cliquez sur « Créer » pour configurer un nouveau hub IA
3. Choisissez votre abonnement et groupe de ressources
4. Donnez un nom à votre hub et sélectionnez une région (Canada Central si disponible pour les services IA)
5. Le hub créera les ressources associées (compte de stockage, coffre de clés, etc.)
6. Une fois créé, vous pouvez créer un « Projet » dans le hub
7. Dans votre projet, allez à « Deployments » pour déployer un modèle IA :
   - Choisissez un modèle (par ex., gpt-4o, gpt-35-turbo)
   - Donnez-lui un nom de déploiement
   - Configurez la limite de débit en jetons-par-minute
8. Cliquez sur « Créer »

### Utiliser votre modèle déployé

Vous pouvez interagir avec les modèles déployés via :

- **Playground** : Testez les prompts directement dans le navigateur
- **REST API** : Appelez le modèle depuis vos applications
- **Python SDK** : Utilisez la bibliothèque `openai`
- **Prompt Flow** : Construisez des flux de travail IA complexes

Exemple de code Python :

```python
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key="your-api-key",
    api_version="2024-02-01",
    azure_endpoint="https://your-resource.openai.azure.com"
)

response = client.chat.completions.create(
    model="your-deployment-name",
    messages=[
        {"role": "user", "content": "Bonjour, comment allez-vous?"}
    ]
)

print(response.choices[0].message.content)
```

### Notes importantes

- Les services IA ont des limites de quota - demandez des augmentations si vous avez besoin de plus de capacité
- Les coûts sont basés sur l'utilisation de jetons (jetons d'entrée et de sortie)
- Activez le filtrage de contenu pour prévenir la génération de contenu nuisible
- Stockez les clés API de manière sécurisée (utilisez le coffre de clés Azure)
- Soyez conscient de la résidence des données - tous les modèles IA ne sont pas disponibles dans toutes les régions
- Consultez les directives sur l'IA responsable d'Azure OpenAI

## Prochaines étapes

Maintenant que vous comprenez ces services essentiels, voici quelques parcours d'apprentissage suggérés :

1. **Commencez simplement** : Créez une machine virtuelle ou déployez une application web simple sur App Services
2. **Ajoutez du stockage** : Configurez un compte de stockage et pratiquez le téléchargement de fichiers
3. **Ajoutez une base de données** : Créez une base de données PostgreSQL et connectez-la à une application
4. **Expérimentez avec l'IA** : Déployez un modèle GPT dans AI Foundry et essayez le playground
5. **Construisez quelque chose** : Combinez ces services - par exemple, une application web (App Services) qui stocke des fichiers (compte de stockage) et utilise une base de données (PostgreSQL)

## Conseils de gestion des coûts

- **Utilisez le niveau gratuit** : Plusieurs services offrent un niveau gratuit pour l'apprentissage
- **Arrêtez les ressources lorsqu'elles ne sont pas utilisées** : Les machines virtuelles et bases de données peuvent être arrêtées pour économiser
- **Configurez des alertes budgétaires** : Configurez des alertes dans Cost Management pour suivre les dépenses
- **Dimensionnez correctement les ressources** : Commencez petit et augmentez seulement si nécessaire
- **Nettoyez** : Supprimez les ressources que vous n'utilisez plus, surtout en développement/test

## Obtenir de l'aide

- **Documentation Azure** : [https://docs.microsoft.com/azure](https://docs.microsoft.com/azure)
- **Aide du portail Azure** : Cliquez sur l'icône « ? » dans la navigation supérieure
- **Équipe LaunchPad** : Contactez-nous si vous avez besoin d'assistance ou avez des questions
- **Support Azure** : Disponible via le portail si vous avez un plan de support
