---
title: GCP - Comprendre les services essentiels
description: Un guide pour débutants sur les services essentiels de Google Cloud Platform
translationKey: tutorials/gcp-core-services
draft: false
tags:
    - GCP
    - Compute Engine
    - Cloud Storage
    - Cloud SQL
    - Vertex AI
categories:
    - Tutoriels
    - GCP
---

Ce guide vous présente les principaux services GCP que vous utiliserez couramment dans vos projets. Chaque section explique ce que fait le service, quand l'utiliser et comment commencer.

## Compute Engine (Machines virtuelles)

### Qu'est-ce que Compute Engine?

Compute Engine fournit des machines virtuelles (VMs) fonctionnant dans les centres de données de Google. Vous avez un contrôle complet sur le système d'exploitation (Linux ou Windows), pouvez choisir le type de machine (CPU et mémoire) et installer n'importe quel logiciel dont vous avez besoin.

### Quand utiliser Compute Engine

- Vous avez besoin d'un contrôle complet sur le système d'exploitation et la configuration logicielle
- Vous exécutez des applications nécessitant des configurations OS spécifiques
- Vous avez besoin de ressources de calcul persistantes qui fonctionnent en continu
- Vous voulez migrer des serveurs sur site existants vers le cloud

### Pour commencer

1. Dans la console Google Cloud, naviguez vers **Compute Engine** → **Instances de VM**
2. Cliquez sur « Créer une instance »
3. Donnez un nom à votre instance
4. Sélectionnez une région et une zone :
   - **northamerica-northeast1** (Montréal) - recommandé pour le Canada
   - **northamerica-northeast2** (Toronto) - également au Canada
5. Choisissez un type de machine :
   - **e2-micro** : Éligible niveau gratuit, bon pour l'apprentissage (2 vCPU, 1 GB mémoire)
   - **e2-small/medium** : Pour le développement et petites charges de travail
   - **Série n2-standard** : Pour les charges de travail de production générales
   - **c2 ou n2-highmem** : Pour les applications intensives en calcul ou mémoire
6. Sélectionnez un disque de démarrage (système d'exploitation) :
   - **Debian** : Bon choix Linux par défaut
   - **Ubuntu** : Distribution Linux populaire
   - **CentOS/Rocky Linux** : Options Linux d'entreprise
   - **Windows Server** : Pour les applications Windows
7. Configurez le pare-feu - cochez les cases pour autoriser le trafic HTTP/HTTPS si nécessaire
8. Cliquez sur « Créer »

### Notes importantes

- Les VMs sont facturées à la seconde lorsqu'elles sont en cours d'exécution - arrêtez-les lorsqu'elles ne sont pas utilisées pour économiser
- Utilisez les **remises d'utilisation soutenue** - remises automatiques pour les VMs fonctionnant tout le mois
- Les **VMs préemptives** coûtent jusqu'à 80% moins cher mais peuvent être terminées à tout moment (bon pour le traitement par lots)
- Gardez vos VMs à jour avec les correctifs de sécurité
- Utilisez les **groupes d'instances gérés** pour les charges de travail de production nécessitant haute disponibilité et auto-scaling
- Configurez des **scripts de démarrage** pour automatiser la configuration de la VM

## Cloud Storage et Filestore

### Qu'est-ce que Cloud Storage et Filestore?

Ce sont tous deux des services de stockage, mais ils servent des objectifs différents :

**Cloud Storage** est un stockage d'objets - parfait pour stocker des fichiers, sauvegardes, images, vidéos et données d'application. Pensez-y comme un système de stockage de fichiers infiniment évolutif accessible via API ou interface web.

**Filestore** est un système de fichiers réseau (NFS) géré qui peut être monté sur les VMs Compute Engine, similaire à un lecteur réseau partagé. Plusieurs VMs peuvent accéder à la même instance Filestore simultanément.

### Quand utiliser Cloud Storage

- Stocker des fichiers, images, vidéos ou documents
- Héberger des sites web statiques
- Sauvegarder des données ou archiver d'anciens fichiers
- Stocker des journaux et données d'application
- Distribuer du contenu globalement avec Cloud CDN
- Stocker des données devant être accessibles via HTTP/HTTPS

### Quand utiliser Filestore

- Plusieurs VMs doivent accéder aux mêmes fichiers simultanément
- Vous avez besoin d'opérations de système de fichiers traditionnelles (comme sur un disque local)
- Vous exécutez des applications qui attendent un système de fichiers (pas un stockage d'objets)
- Vous avez besoin d'opérations de fichiers à faible latence pour des applications comme des bases de données ou workflows média

### Pour commencer avec Cloud Storage

1. Dans la console Google Cloud, naviguez vers **Cloud Storage** → **Buckets**
2. Cliquez sur « Créer un bucket »
3. Donnez à votre bucket un nom globalement unique (minuscules, pas d'espaces)
4. Choisissez où stocker vos données :
   - **Région** : `northamerica-northeast1` ou `northamerica-northeast2` (recommandé pour le Canada)
   - **Multi-région** : Stocke les données dans plusieurs régions pour une disponibilité plus élevée
5. Choisissez une classe de stockage :
   - **Standard** : Pour les données fréquemment consultées
   - **Nearline** : Pour les données consultées moins d'une fois par mois (moins cher)
   - **Coldline** : Pour les données consultées moins d'une fois par trimestre
   - **Archive** : Pour l'archivage à long terme (le moins cher)
6. Configurez le contrôle d'accès :
   - **Uniforme** : Recommandé - utilise IAM pour tout le contrôle d'accès
   - **Granulaire** : Permet des ACL par objet
7. Cliquez sur « Créer »

Pour télécharger des fichiers :

- Cliquez sur le nom de votre bucket
- Cliquez sur « Télécharger des fichiers » ou glissez-déposez

### Pour commencer avec Filestore

1. Dans la console Google Cloud, naviguez vers **Filestore** → **Instances**
2. Cliquez sur « Créer une instance »
3. Donnez un nom à votre instance
4. Choisissez un niveau de service :
   - **Basic HDD** : Rentable pour usage général
   - **Basic SSD** : Performance plus élevée
   - **Enterprise** : Haute disponibilité avec réplication
5. Sélectionnez la région et la zone (correspondez à l'emplacement de vos VMs)
6. Choisissez la capacité de stockage (minimum 1 TB pour Basic)
7. Configurez les paramètres réseau (sélectionnez votre VPC)
8. Cliquez sur « Créer »

Pour monter Filestore sur une VM :

```bash
# Installer le client NFS
sudo apt-get update
sudo apt-get install nfs-common

# Créer le point de montage
sudo mkdir -p /mnt/filestore

# Monter le système de fichiers (remplacez par l'IP Filestore et le nom de partage)
sudo mount -t nfs FILESTORE_IP:/SHARE_NAME /mnt/filestore
```

### Notes importantes

**Cloud Storage :**

- Les noms de buckets doivent être globalement uniques dans tout Google Cloud
- Utilisez les **politiques de cycle de vie** pour transitionner automatiquement les données vers des classes de stockage moins chères
- Activez le **versioning** pour protéger contre les suppressions accidentelles
- Utilisez les **URL signées** pour un accès temporaire sans authentification
- Considérez **requester pays** pour partager de grands ensembles de données

**Filestore :**

- Filestore est plus cher que Cloud Storage - utilisez-le seulement si vous avez besoin d'un vrai système de fichiers
- Choisissez le bon niveau selon les besoins de performance
- Utilisez les **snapshots** pour les sauvegardes
- Ajustez la capacité selon les besoins (niveau Basic)

## Cloud SQL

### Qu'est-ce que Cloud SQL?

Cloud SQL est un service de base de données relationnelle entièrement géré qui supporte PostgreSQL, MySQL et SQL Server. Google gère les sauvegardes, correctifs, mise à l'échelle et haute disponibilité, vous permettant de vous concentrer sur votre application.

### Moteurs de base de données supportés

- **PostgreSQL** : Open-source, riche en fonctionnalités, idéal pour la plupart des applications
- **MySQL** : Base de données open-source populaire
- **SQL Server** : Base de données Microsoft (nécessite une licence, plus cher)

### Quand utiliser Cloud SQL

- Vous avez besoin d'une base de données relationnelle avec support SQL
- Vous voulez des sauvegardes automatiques et une récupération point dans le temps
- Vous avez besoin de haute disponibilité avec basculement automatique
- Vous ne voulez pas gérer les correctifs et la maintenance de la base de données
- Vous construisez des applications nécessitant des transactions ACID

### Pour commencer avec PostgreSQL

1. Dans la console Google Cloud, naviguez vers **SQL**
2. Cliquez sur « Créer une instance »
3. Choisissez **PostgreSQL**
4. Donnez un ID d'instance à votre instance
5. Définissez un mot de passe pour l'utilisateur `postgres` - **conservez-le en sécurité!**
6. Choisissez une version de base de données (utilisez la dernière sauf si vous avez des exigences spécifiques)
7. Sélectionnez une région et une zone :
   - **northamerica-northeast1** (Montréal) recommandé
8. Configurez votre instance :
   - **Préréglage** : Choisissez Development, Production ou personnalisez
   - **Type de machine** :
     - **Shared-core** (db-f1-micro) : Éligible niveau gratuit, bon pour l'apprentissage
     - **Lightweight** (db-g1-small) : Pour le développement
     - **Standard/High memory** : Pour les charges de travail de production
9. Configurez le stockage :
   - Commencez avec 10-20 GB
   - Activez l'augmentation automatique du stockage (recommandé)
10. Configurez les connexions :
    - **IP publique** : Pour se connecter depuis l'extérieur de Google Cloud (nécessite des réseaux autorisés)
    - **IP privée** : Pour se connecter depuis les VMs (plus sécurisé, recommandé pour la production)
11. Cliquez sur « Créer une instance »

### Se connecter à votre base de données

Après la création (prend 5-10 minutes), vous trouverez vos détails de connexion :

**Utilisant l'IP publique :**

- Ajoutez votre IP aux réseaux autorisés dans l'onglet Connexions
- **Nom de connexion** : `PROJECT_ID:REGION:INSTANCE_ID`
- **Adresse IP publique** : Affichée dans les détails de l'instance
- **Nom d'utilisateur** : `postgres`
- **Mot de passe** : Ce que vous avez défini lors de la création

Exemple de chaîne de connexion :  
`postgresql://postgres:votremotdepasse@PUBLIC_IP:5432/postgres`

**Utilisant Cloud SQL Proxy (recommandé) :**

```bash
# Télécharger Cloud SQL Proxy
curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.8.0/cloud-sql-proxy.linux.amd64
chmod +x cloud-sql-proxy

# Démarrer le proxy (remplacez CONNECTION_NAME)
./cloud-sql-proxy PROJECT_ID:REGION:INSTANCE_ID
```

Ensuite connectez-vous à `localhost:5432`

### Notes importantes

- Les sauvegardes automatiques sont activées par défaut - configurez la période de rétention (1-365 jours)
- Activez la **haute disponibilité (HA)** pour les bases de données de production (crée une réplique de secours dans une autre zone)
- Utilisez les **réplicas de lecture** pour mettre à l'échelle les charges de travail intensives en lecture
- Cloud SQL peut être coûteux - envisagez d'arrêter les instances pendant le développement (peut prendre du temps à redémarrer)
- Surveillez votre base de données avec **Cloud Monitoring**
- Utilisez les **database flags** pour personnaliser les paramètres PostgreSQL
- Activez la **récupération point dans le temps** pour des options de restauration granulaires

## App Engine et Cloud Run

### Qu'est-ce qu'App Engine et Cloud Run?

Ce sont tous deux des plateformes pour déployer des applications sans gérer l'infrastructure :

**App Engine** est la plateforme-as-a-service (PaaS) originale de Google. Vous déployez votre code, et Google gère tout - serveurs, mise à l'échelle, équilibrage de charge. Bon pour les applications web traditionnelles.

**Cloud Run** est une plateforme serverless plus récente pour exécuter des conteneurs. Elle s'adapte automatiquement, même à zéro, et vous ne payez que lorsque votre code s'exécute. Plus flexible qu'App Engine.

### Quand utiliser App Engine

- Vous construisez une application web traditionnelle
- Vous voulez zéro gestion d'infrastructure
- Votre application correspond à l'un des runtimes supportés
- Vous voulez une mise à l'échelle automatique avec une configuration minimale
- Vous préférez un modèle de déploiement plus simple

### Quand utiliser Cloud Run

- Vous voulez déployer des applications conteneurisées
- Vous avez besoin de plus de flexibilité dans le runtime et les dépendances
- Vous voulez mettre à l'échelle à zéro lorsque non utilisé
- Vous construisez des APIs ou microservices
- Vous voulez exécuter n'importe quel langage ou framework

### Plateformes supportées

**App Engine :**

- Python, Java, Node.js, PHP, Ruby, Go
- Environnement standard (sandboxé) ou environnement flexible (conteneurs)

**Cloud Run :**

- N'importe quel langage qui s'exécute dans un conteneur
- Doit écouter sur un port défini par la variable d'environnement `PORT`

### Pour commencer avec App Engine

1. Dans la console Google Cloud, naviguez vers **App Engine**
2. Cliquez sur « Créer une application »
3. Sélectionnez une région (choisissez `northamerica-northeast1`)
4. Choisissez votre langage/runtime
5. Suivez les instructions de configuration pour votre langage

Déployer votre application :

```bash
# Créer app.yaml dans le répertoire de votre projet
# Pour l'exemple Python :
runtime: python311

# Déployer
gcloud app deploy

# Voir votre application
gcloud app browse
```

### Pour commencer avec Cloud Run

1. Conteneurisez votre application (créez un `Dockerfile`)
2. Construisez et poussez vers Container Registry ou Artifact Registry :

```bash
# Activer les APIs requises
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com

# Construire et déployer en une commande
gcloud run deploy SERVICE_NAME \
  --source . \
  --region northamerica-northeast1 \
  --allow-unauthenticated
```

Ou déployez depuis une image de conteneur :

```bash
gcloud run deploy SERVICE_NAME \
  --image gcr.io/PROJECT_ID/IMAGE_NAME \
  --region northamerica-northeast1 \
  --allow-unauthenticated
```

### Notes importantes

**App Engine :**

- Chaque projet Google Cloud ne peut avoir qu'une seule application App Engine
- L'environnement standard a une mise à l'échelle plus rapide mais plus de restrictions
- Utilisez `app.yaml` pour configurer votre application
- Supporte la répartition du trafic pour les tests A/B
- Inclut des services intégrés comme Cron, files d'attente de tâches

**Cloud Run :**

- S'adapte automatiquement selon les requêtes, y compris à zéro
- Vous êtes facturé uniquement pour l'utilisation réelle (CPU, mémoire, requêtes)
- Peut gérer jusqu'à 1000 requêtes simultanées par instance de conteneur
- Définissez des instances minimum pour éviter les démarrages à froid pour les services critiques
- Utilisez **Cloud Run Jobs** pour les tâches ponctuelles ou planifiées
- Configurez les limites CPU et mémoire par service

## Vertex AI

### Qu'est-ce que Vertex AI?

Vertex AI est la plateforme IA unifiée de Google Cloud pour construire, déployer et mettre à l'échelle des modèles d'apprentissage automatique. Elle fournit un accès à des modèles pré-entraînés, des outils pour le développement de modèles personnalisés et des capacités d'IA générative.

### Quand utiliser Vertex AI

- Vous voulez construire des applications alimentées par l'IA
- Vous avez besoin d'accès à de grands modèles de langage (LLMs) pour la génération de texte
- Vous développez des chatbots, génération de contenu ou outils de synthèse
- Vous voulez entraîner des modèles d'apprentissage automatique personnalisés
- Vous avez besoin de capacités de vision par ordinateur ou de traitement du langage naturel

### Fonctionnalités clés

- **Generative AI Studio** : Accès à PaLM 2, Gemini et autres modèles fondamentaux
- **Model Garden** : Modèles pré-entraînés pour diverses tâches
- **AutoML** : Entraîner des modèles personnalisés sans expertise ML approfondie
- **Vertex AI Workbench** : Environnement basé sur Jupyter pour la science des données
- **Vertex AI Pipelines** : Orchestrer les flux de travail ML
- **Model Monitoring** : Suivre la performance des modèles en production

### Pour commencer avec l'IA générative

1. Dans la console Google Cloud, naviguez vers **Vertex AI** → **Generative AI Studio**
2. Choisissez un modèle à tester :
   - **Gemini Pro** : Le modèle multimodal le plus performant de Google
   - **PaLM 2** : Génération de texte et chat
   - **Imagen** : Génération d'images
3. Dans le playground, testez les prompts et ajustez les paramètres :
   - **Temperature** : Contrôle le caractère aléatoire (0 = déterministe, 1 = créatif)
   - **Top-k** et **Top-p** : Contrôlent la diversité des réponses
   - **Max output tokens** : Limite la longueur de la réponse

### Utiliser Vertex AI dans votre application

Exemple utilisant le SDK Python :

```python
from vertexai.preview.generative_models import GenerativeModel

# Initialiser Vertex AI
import vertexai
vertexai.init(project="your-project-id", location="northamerica-northeast1")

# Charger le modèle
model = GenerativeModel("gemini-pro")

# Générer du contenu
response = model.generate_content(
    "Expliquez ce qu'est Google Cloud Platform en termes simples"
)

print(response.text)
```

Pour le chat :

```python
# Démarrer une session de chat
chat = model.start_chat()

# Envoyer des messages
response = chat.send_message("Bonjour! Comment pouvez-vous m'aider?")
print(response.text)

response = chat.send_message("Parlez-moi de Cloud Storage")
print(response.text)
```

### Notes importantes

- Vertex AI est disponible dans des régions limitées - utilisez `us-central1` ou `northamerica-northeast1`
- La tarification est basée sur les caractères/jetons d'entrée et de sortie
- Utilisez les **paramètres de sécurité** pour filtrer le contenu nuisible
- Le **grounding** avec Google Search peut fournir des réponses plus précises et à jour
- Définissez des **quotas** pour contrôler les coûts
- Utilisez l'**appel de fonctions** pour intégrer l'IA avec les fonctions de votre application
- Testez minutieusement dans le playground avant le déploiement en production
- Envisagez le **fine-tuning** des modèles avec vos propres données pour une meilleure performance

## Prochaines étapes

Maintenant que vous comprenez ces services GCP essentiels, voici quelques parcours d'apprentissage suggérés :

1. **Commencez simplement** : Créez une VM Compute Engine ou déployez une application simple sur Cloud Run
2. **Ajoutez du stockage** : Créez un bucket Cloud Storage et pratiquez le téléchargement de fichiers
3. **Ajoutez une base de données** : Configurez une base de données Cloud SQL PostgreSQL et connectez-la à une application
4. **Expérimentez avec l'IA** : Essayez Gemini Pro dans Generative AI Studio
5. **Construisez quelque chose** : Combinez ces services - par exemple, une application Cloud Run qui stocke des fichiers dans Cloud Storage et utilise Cloud SQL pour les données

## Conseils de gestion des coûts

- **Utilisez le niveau gratuit** : Plusieurs services offrent une utilisation gratuite pour l'apprentissage (VM e2-micro, Cloud Storage, Cloud SQL, etc.)
- **Arrêtez les ressources lorsqu'elles ne sont pas utilisées** : Arrêtez les VMs Compute Engine et instances Cloud SQL pour économiser
- **Configurez des alertes budgétaires** : Configurez des budgets dans Facturation pour suivre les dépenses et recevoir des alertes
- **Dimensionnez correctement les ressources** : Commencez petit et augmentez seulement si nécessaire
- **Utilisez les remises d'engagement d'utilisation** : Pour les charges de travail de production fonctionnant 24/7, obtenez jusqu'à 57% de remise
- **Nettoyez** : Supprimez les ressources que vous n'utilisez plus, surtout en développement/test
- **Utilisez les VMs préemptives/spot** : Pour le traitement par lots, utilisez les VMs préemptives avec jusqu'à 80% de remise
- **Choisissez la bonne région** : Certaines régions sont plus chères que d'autres

## Obtenir de l'aide

- **Documentation Google Cloud** : [https://cloud.google.com/docs](https://cloud.google.com/docs)
- **Aide de la console Cloud** : Cliquez sur l'icône « ? » dans la navigation supérieure
- **Équipe LaunchPad** : Contactez-nous si vous avez besoin d'assistance ou avez des questions
- **Support Google Cloud** : Disponible via la console si vous avez un plan de support
