---
title: AWS - Comprendre les services essentiels
description: Un guide pour débutants sur les services AWS essentiels
translationKey: tutorials/aws-core-services
showToc: true
draft: false
tags:
    - AWS
    - EC2
    - S3
    - RDS
    - Bedrock
categories:
    - Tutoriels
    - AWS
---

Ce guide vous présente les principaux services AWS que vous utiliserez couramment dans vos projets. Chaque section explique ce que fait le service, quand l'utiliser et comment commencer.

## EC2 (Elastic Compute Cloud)

### Qu'est-ce qu'EC2?

Les instances EC2 sont des machines virtuelles fonctionnant dans le cloud AWS. Vous avez un contrôle complet sur le système d'exploitation (Linux ou Windows), pouvez choisir la taille de l'instance (CPU et mémoire) et installer n'importe quel logiciel dont vous avez besoin.

### Quand utiliser EC2

- Vous avez besoin d'un contrôle complet sur le système d'exploitation et la configuration logicielle
- Vous exécutez des applications nécessitant des configurations OS spécifiques
- Vous avez besoin de ressources de calcul persistantes qui fonctionnent en continu
- Vous voulez migrer des serveurs sur site existants vers le cloud

### Pour commencer

1. Dans la console AWS, naviguez vers **EC2** et cliquez sur « Launch Instance »
2. Donnez un nom à votre instance
3. Choisissez une Amazon Machine Image (AMI) - c'est votre système d'exploitation :
   - **Amazon Linux 2023** : Linux optimisé par AWS, bon choix par défaut
   - **Ubuntu Server** : Distribution Linux populaire
   - **Windows Server** : Pour les applications Windows
4. Choisissez un type d'instance en fonction de vos besoins :
   - **t3.micro** ou **t3.small** : Bon pour le développement et les petites charges de travail (éligible niveau gratuit)
   - **t3.medium** : Pour les charges de travail de production légères
   - **Séries m5 ou c5** : Pour les charges de travail de production nécessitant plus de ressources
5. Créez ou sélectionnez une paire de clés pour l'accès SSH (Linux) ou RDP (Windows)
6. Configurez les paramètres réseau - par défaut, AWS crée un groupe de sécurité permettant l'accès SSH/RDP
7. Configurez le stockage - commencez avec la valeur par défaut (8-30 GB) et augmentez si nécessaire
8. Cliquez sur « Launch instance »

### Notes importantes

- Les instances EC2 sont facturées à l'heure lorsqu'elles sont en cours d'exécution - arrêtez-les lorsqu'elles ne sont pas utilisées pour économiser
- Utilisez les **Elastic IPs** si vous avez besoin d'une adresse IP statique
- Gardez vos instances à jour avec les correctifs de sécurité
- Les groupes de sécurité agissent comme des pare-feu - n'ouvrez que les ports dont vous avez réellement besoin
- Envisagez d'utiliser les **Auto Scaling Groups** pour les charges de travail de production nécessitant une haute disponibilité

## S3 (Simple Storage Service) et EFS (Elastic File System)

### Qu'est-ce que S3 et EFS?

Ce sont tous deux des services de stockage, mais ils servent des objectifs différents :

**S3 (Simple Storage Service)** est un stockage d'objets - parfait pour stocker des fichiers, sauvegardes, images, vidéos et données d'application. Pensez-y comme un système de stockage de fichiers infiniment évolutif accessible via API ou interface web.

**EFS (Elastic File System)** est un système de fichiers réseau qui peut être monté directement sur les instances EC2, similaire à un lecteur réseau partagé. Plusieurs instances EC2 peuvent accéder au même système de fichiers EFS simultanément.

### Quand utiliser S3

- Stocker des fichiers, images, vidéos ou documents
- Héberger des sites web statiques
- Sauvegarder des données ou archiver d'anciens fichiers
- Stocker des journaux et données d'application
- Stocker des données devant être accessibles via HTTP/HTTPS

### Quand utiliser EFS

- Plusieurs instances EC2 doivent accéder aux mêmes fichiers simultanément
- Vous avez besoin d'opérations de système de fichiers traditionnelles (comme sur un disque local)
- Vous exécutez des applications qui attendent un système de fichiers (pas un stockage d'objets)
- Vous devez partager des données entre conteneurs ou instances

### Pour commencer avec S3

1. Dans la console AWS, naviguez vers **S3** et cliquez sur « Create bucket »
2. Donnez à votre compartiment un nom globalement unique (minuscules, pas d'espaces)
3. Sélectionnez une région - **ca-central-1** (Canada Central) est recommandé
4. Gardez « Block all public access » activé sauf si vous avez spécifiquement besoin d'un accès public
5. Activez le versioning si vous voulez conserver plusieurs versions des fichiers
6. Cliquez sur « Create bucket »

Pour télécharger des fichiers :

- Cliquez sur le nom de votre compartiment
- Cliquez sur « Upload » et glissez-déposez des fichiers ou cliquez sur « Add files »
- Cliquez sur « Upload »

### Pour commencer avec EFS

1. Dans la console AWS, naviguez vers **EFS** et cliquez sur « Create file system »
2. Cliquez sur « Customize » pour plus d'options
3. Donnez un nom à votre système de fichiers
4. Choisissez une classe de stockage :
   - **Standard** : Pour les données fréquemment consultées
   - **One Zone** : Coût inférieur, stocké dans une seule zone de disponibilité
5. Activez les sauvegardes automatiques (recommandé pour la production)
6. Configurez l'accès réseau - sélectionnez votre VPC et sous-réseaux
7. Cliquez sur « Create »

Pour monter EFS sur une instance EC2 :

```bash
# Installer le client NFS
sudo yum install -y nfs-utils  # Amazon Linux
sudo apt-get install -y nfs-common  # Ubuntu

# Créer le point de montage
sudo mkdir /mnt/efs

# Monter le système de fichiers (remplacez fs-xxxxx par votre ID EFS)
sudo mount -t nfs4 -o nfsvers=4.1 fs-xxxxx.efs.ca-central-1.amazonaws.com:/ /mnt/efs
```

### Notes importantes

**S3 :**

- Les noms de compartiments S3 doivent être globalement uniques dans tout AWS
- Utilisez les **politiques de cycle de vie S3** pour déplacer automatiquement les anciennes données vers des niveaux de stockage moins chers (Glacier)
- Activez le **versioning** pour protéger contre les suppressions accidentelles
- Utilisez **S3 Intelligent-Tiering** pour optimiser automatiquement les coûts en fonction des modèles d'accès

**EFS :**

- EFS est plus cher que S3 - utilisez-le seulement si vous avez besoin d'un vrai système de fichiers
- EFS s'adapte automatiquement - vous ne payez que ce que vous utilisez
- Utilisez la **gestion du cycle de vie EFS** pour déplacer les fichiers rarement consultés vers une classe de stockage moins chère

## RDS (Relational Database Service)

### Qu'est-ce que RDS?

RDS est un service de base de données géré qui supporte plusieurs moteurs de base de données. AWS gère les sauvegardes, les correctifs, la mise à l'échelle et la haute disponibilité, vous permettant de vous concentrer sur votre application.

### Moteurs de base de données supportés

- **PostgreSQL** : Open-source, riche en fonctionnalités, idéal pour la plupart des applications
- **MySQL** : Base de données open-source populaire
- **MariaDB** : Compatible MySQL, développé par la communauté
- **Oracle** : Base de données d'entreprise (nécessite une licence)
- **SQL Server** : Base de données Microsoft (nécessite une licence)
- **Amazon Aurora** : Base de données haute performance compatible MySQL/PostgreSQL d'AWS

### Quand utiliser RDS

- Vous avez besoin d'une base de données relationnelle avec support SQL
- Vous voulez des sauvegardes automatiques et une récupération point dans le temps
- Vous avez besoin de haute disponibilité avec basculement automatique
- Vous ne voulez pas gérer les correctifs et la maintenance de la base de données
- Vous construisez des applications nécessitant des transactions ACID

### Pour commencer avec PostgreSQL

1. Dans la console AWS, naviguez vers **RDS** et cliquez sur « Create database »
2. Choisissez **Standard Create** pour plus de contrôle
3. Sélectionnez **PostgreSQL** comme moteur
4. Choisissez la dernière version sauf si vous avez des exigences spécifiques
5. Sélectionnez un modèle :
   - **Free tier** : Pour l'apprentissage et le développement (limité à db.t3.micro)
   - **Dev/Test** : Pour les charges de travail hors production
   - **Production** : Active Multi-AZ pour la haute disponibilité
6. Définissez votre identifiant d'instance DB (nom)
7. Définissez le nom d'utilisateur et mot de passe principal - **conservez-les en sécurité!**
8. Choisissez la taille de l'instance :
   - **db.t3.micro** : Éligible niveau gratuit, bon pour l'apprentissage
   - **db.t3.small/medium** : Pour le développement et petites applications
   - **db.m5 ou db.r5** : Pour les charges de travail de production
9. Configurez le stockage :
   - Commencez avec 20-50 GB
   - Activez l'auto-scaling du stockage pour augmenter automatiquement si nécessaire
10. Configurez la connectivité :
    - Choisissez votre VPC
    - Sélectionnez « Yes » pour l'accès public si vous devez vous connecter depuis l'extérieur d'AWS (développement uniquement)
    - Créez un nouveau groupe de sécurité ou sélectionnez-en un existant
11. Cliquez sur « Create database »

### Se connecter à votre base de données

Après la création (prend 5-10 minutes), vous trouverez vos détails de connexion :

- **Endpoint** : `your-db-name.xxxxx.ca-central-1.rds.amazonaws.com`
- **Port** : `5432` (PostgreSQL par défaut)
- **Nom d'utilisateur** : Ce que vous avez défini lors de la création
- **Mot de passe** : Ce que vous avez défini lors de la création

Exemple de chaîne de connexion :  
`postgresql://username:password@your-db-name.xxxxx.ca-central-1.rds.amazonaws.com:5432/postgres`

### Notes importantes

- Les sauvegardes automatiques sont activées par défaut - configurez la période de rétention (1-35 jours)
- Activez le **déploiement Multi-AZ** pour les bases de données de production (fournit un basculement automatique)
- Utilisez les **Read Replicas** pour mettre à l'échelle les charges de travail intensives en lecture
- RDS peut être coûteux - arrêtez votre base de données lorsqu'elle n'est pas utilisée (dev/test uniquement)
- Surveillez votre base de données avec **CloudWatch** pour suivre la performance
- Utilisez les **Parameter Groups** pour personnaliser les paramètres de la base de données

## Elastic Beanstalk

### Qu'est-ce qu'Elastic Beanstalk?

Elastic Beanstalk est une plateforme pour déployer et gérer des applications web sans se soucier de l'infrastructure. Vous téléchargez votre code, et AWS gère le déploiement, le provisionnement de capacité, l'équilibrage de charge, l'auto-scaling et la surveillance.

### Quand utiliser Elastic Beanstalk

- Vous déployez une application web ou une API
- Vous voulez vous concentrer sur le code, pas la gestion de l'infrastructure
- Vous avez besoin de mise à l'échelle automatique basée sur le trafic
- Vous voulez un déploiement rapide avec une configuration minimale
- Vous construisez une application web standard (pas de microservices)

### Plateformes supportées

- Node.js
- Python
- Ruby
- PHP
- Java
- .NET (Core et Framework)
- Go
- Docker (simple ou multi-conteneur)

### Pour commencer

1. Dans la console AWS, naviguez vers **Elastic Beanstalk** et cliquez sur « Create application »
2. Donnez un nom à votre application
3. Sélectionnez une plateforme :
   - Choisissez votre langage/runtime (par ex., Python 3.11, Node.js 20)
   - AWS sélectionnera la version de plateforme recommandée
4. Pour « Application code », vous avez des options :
   - **Sample application** : AWS fournit une simple application « Hello World » pour tester
   - **Upload your code** : Téléchargez un fichier ZIP de votre application
   - **Use existing version** : Si vous avez déjà déployé
5. Cliquez sur « Create application »

AWS va maintenant :

- Créer une instance EC2
- Configurer un groupe de sécurité
- Créer un équilibreur de charge (si nécessaire)
- Configurer l'auto-scaling
- Déployer votre application

### Déployer des mises à jour

Pour déployer de nouvelles versions :

1. Compressez votre code d'application en ZIP
2. Allez à votre application Elastic Beanstalk
3. Cliquez sur « Upload and deploy »
4. Sélectionnez votre fichier ZIP et donnez une étiquette à la version
5. Cliquez sur « Deploy »

Ou utilisez AWS CLI :

```bash
# Installer EB CLI
pip install awsebcli

# Initialiser votre application
eb init

# Déployer votre application
eb deploy
```

### Notes importantes

- Elastic Beanstalk utilise EC2, vous êtes donc toujours facturé pour les ressources sous-jacentes
- Utilisez les **types d'environnement** :
  - **Web server environment** : Pour les applications web
  - **Worker environment** : Pour le traitement des tâches en arrière-plan
- Utilisez les **configurations sauvegardées** pour répliquer les environnements
- Activez les **mises à jour gérées** pour les correctifs automatiques de plateforme
- Configurez les **vérifications de santé** pour vous assurer que votre application fonctionne correctement
- Utilisez les **variables d'environnement** pour configurer votre application sans modifier le code

## Bedrock

### Qu'est-ce qu'AWS Bedrock?

AWS Bedrock fournit un accès aux modèles fondamentaux (grands modèles d'IA) des principales entreprises d'IA via une API unique. Il vous permet de construire et mettre à l'échelle des applications d'IA en utilisant des modèles pré-entraînés sans gérer l'infrastructure.

### Quand utiliser Bedrock

- Vous voulez construire des applications alimentées par l'IA
- Vous avez besoin d'accès à de grands modèles de langage (LLMs) pour la génération de texte
- Vous développez des chatbots, génération de contenu ou outils de synthèse
- Vous voulez utiliser l'IA sans entraîner vos propres modèles
- Vous avez besoin de capacités de génération d'images ou d'IA multimodale

### Modèles disponibles

- **Amazon Titan** : Modèles fondamentaux d'AWS pour le texte et les embeddings
- **Claude (Anthropic)** : Modèles puissants pour la conversation et l'analyse
- **Jurassic (AI21 Labs)** : Modèles optimisés pour la génération de texte
- **Stable Diffusion (Stability AI)** : Modèles de génération d'images
- **Llama (Meta)** : Modèles fondamentaux open-source

### Pour commencer

1. Dans la console AWS, naviguez vers **Amazon Bedrock**
2. Allez à « Model access » dans le menu de gauche
3. Cliquez sur « Manage model access »
4. Sélectionnez les modèles auxquels vous voulez accéder (Claude et Titan sont de bons points de départ)
5. Cliquez sur « Request model access » - certains modèles sont instantanés, d'autres peuvent nécessiter une approbation
6. Une fois approuvé, allez à « Playgrounds » pour tester les modèles :
   - **Text** : Pour la génération de texte et la conversation
   - **Chat** : Pour les tests de chatbot interactifs
   - **Image** : Pour la génération d'images

### Utiliser Bedrock dans votre application

Exemple utilisant AWS SDK pour Python (boto3) :

```python
import boto3
import json

# Créer le client Bedrock
bedrock = boto3.client('bedrock-runtime', region_name='ca-central-1')

# Préparer la requête
prompt = "Expliquez ce qu'est AWS Bedrock en termes simples"

body = json.dumps({
    "prompt": f"\n\nHuman: {prompt}\n\nAssistant:",
    "max_tokens_to_sample": 500,
    "temperature": 0.7,
})

# Appeler le modèle Claude
response = bedrock.invoke_model(
    modelId='anthropic.claude-v2',
    body=body
)

# Analyser la réponse
response_body = json.loads(response['body'].read())
print(response_body['completion'])
```

### Notes importantes

- Bedrock n'est **pas disponible dans toutes les régions** - vérifiez la disponibilité (actuellement régions limitées)
- La tarification est basée sur les jetons d'entrée et de sortie - surveillez votre utilisation
- Utilisez les **Guardrails** pour filtrer le contenu nuisible et implémenter des contrôles de sécurité
- Envisagez d'utiliser les **Knowledge Bases** pour fournir vos propres données à l'IA
- Stockez les identifiants API de manière sécurisée - utilisez les rôles IAM lorsque c'est possible
- Certains modèles nécessitent une approbation spéciale et peuvent avoir des limites d'utilisation
- Testez dans le playground avant d'intégrer dans votre application

## Prochaines étapes

Maintenant que vous comprenez ces services AWS essentiels, voici quelques parcours d'apprentissage suggérés :

1. **Commencez simplement** : Lancez une instance EC2 ou déployez une application simple sur Elastic Beanstalk
2. **Ajoutez du stockage** : Créez un compartiment S3 et pratiquez le téléchargement de fichiers
3. **Ajoutez une base de données** : Configurez une base de données RDS PostgreSQL et connectez-la à une application
4. **Expérimentez avec l'IA** : Obtenez l'accès aux modèles Bedrock et essayez le playground
5. **Construisez quelque chose** : Combinez ces services - par exemple, une application sur Elastic Beanstalk qui stocke des fichiers dans S3 et utilise RDS pour les données

## Conseils de gestion des coûts

- **Utilisez le niveau gratuit** : Plusieurs services offrent une utilisation gratuite pour l'apprentissage
- **Arrêtez les ressources lorsqu'elles ne sont pas utilisées** : Arrêtez les instances EC2 et les bases de données RDS pour économiser
- **Configurez des alertes de facturation** : Configurez des alarmes de facturation CloudWatch pour suivre les dépenses
- **Dimensionnez correctement les ressources** : Commencez petit et augmentez seulement si nécessaire
- **Utilisez Cost Explorer** : Analysez vos modèles de dépenses et identifiez les opportunités d'économies
- **Nettoyez** : Supprimez les ressources que vous n'utilisez plus, surtout en développement/test
- **Envisagez les Reserved Instances** : Pour les charges de travail de production fonctionnant 24/7, les Reserved Instances offrent des économies significatives

## Obtenir de l'aide

- **Documentation AWS** : [https://docs.aws.amazon.com](https://docs.aws.amazon.com)
- **Aide de la console AWS** : Cliquez sur l'icône « ? » dans la navigation supérieure
- **Équipe LaunchPad** : Contactez-nous si vous avez besoin d'assistance ou avez des questions
- **Support AWS** : Disponible via la console si vous avez un plan de support
