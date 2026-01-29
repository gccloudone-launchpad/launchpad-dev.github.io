---
title: Azure - OpenAI
description: Information about running Azure OpenAI
translationKey: tutorials/azure-openai
draft: false
tags:
  - AWS
  - IAM
  - CLI
categories:
  - Tutorials
---

> Nous avons un petit dicton : « Bienvenue dans l'infonuagique! Une nouvelle expérience chaque jour! ». Malheureusement, cela est particulièrement pertinent pour l'IA/ML, qui semble évoluer encore plus rapidement. Veuillez nous pardonner (et nous en informer) pour tout ce qui pourrait être désuet ici!
{ .is-warning }

## Tarification

La plupart de la tarification d'Azure OpenAI est basée sur les tokens, qui sont bien sûr une façon en IA/ML de représenter (généralement) du texte. En règle générale, un token équivaut à environ 4,5 caractères; ainsi, les mots courts et courants représentent généralement un token, tandis que le jargon plus long ou plus obscur en compte davantage. Il existe des outils comme [TikToken](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) qui peuvent mesurer le contenu sans avoir à l'envoyer à OpenAI, si vous en avez besoin.

### Coûts réels

La [tarification d'Azure OpenAI](https://azure.microsoft.com/en-ca/pricing/details/cognitive-services/openai-service/) est la ressource faisant autorité.

- N'oubliez pas de définir votre région et votre devise!
- Assurez-vous de consulter *exactement* le bon modèle; `o4`, `4o` et `4o-realtime` sont tous très différents!
- Notez les différents types de tokens :
  - Input sont les tokens envoyés au modèle
  - Cached (certains modèles seulement) sont les tokens qui ont déjà été envoyés au modèle lors d'un tour précédent (c.-à-d. questions de suivi. Pour les modèles qui ne prennent pas en charge la mise en cache, *tous* les tokens, y compris ceux précédemment invités, sont comptés comme input)
  - Output sont les sorties du modèle. En règle générale, ils coûtent 4× plus que les tokens Input.
- Batch nécessite une API/logique d'application différente, mais coûte environ 50 % par rapport au temps réel.

## Disponibilité des modèles

Consultez la section [Types de déploiement](#types-de-déploiement) ci-dessous pour une analyse plus approfondie, mais nos recommandations simples dépendent de votre type d'expérimentation :

### Expérimentations non classifiées

Si vous effectuez une expérimentation non classifiée (c.-à-d. *pas* Protégé B), vous pouvez en fait utiliser des modèles de n'importe quelle région. Les types de déploiement les plus simples sont soit **Global Standard** soit **Global Batch**; si vous souhaitez la meilleure sélection de modèles, les deux régions de choix sont :

- East US 2
- Sweden Central

Consultez ici le tableau des régions pour la [disponibilité des modèles Global Standard](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure?pivots=azure-openai&tabs=global-standard-aoai%2Cstandard-chat-completions%2Cglobal-standard#global-standard-model-availability).

### Expérimentations Protégé B

Les données Protégé B **doivent** être stockées au Canada, bien qu'elles *puissent* être traitées à l'extérieur du Canada (tant qu'elles restent chiffrées en transit).

> Bien que la politique du SCT n'*exige* pas que les données PB soient traitées au pays, cela ne signifie pas que l'ATO/SA&A^1^ de votre projet acceptera ce risque. Par conséquent, vous voudrez peut-être planifier pour la probabilité très réelle que vous devrez tout conserver, y compris le traitement, au Canada.
{.is-info}

^1^*ATO: Authority to operate, SA&A: Security Audit & Authorization. Consultez ici pour un [document d'information sur les ATO/SA&A](https://www.canada.ca/en/shared-services/corporate/publications/audit-security-assessment-authorization-march-2020.html).*

En pratique, avec Azure OpenAI, cela signifie que vous devez déployer vos ressources au Canada (spécifiquement **Canada East** pour les meilleures options).
Dans notre espace bac à sable, nous permettons le traitement à l'extérieur du Canada en utilisant des déploiements Global.

> Veuillez toujours utiliser votre jugement pour déterminer si le traitement de vos données PB à l'extérieur du Canada a du sens!
{.is-danger}

Si vous souhaitez traiter au Canada, la [disponibilité des modèles de déploiement Standard](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure?pivots=azure-openai&tabs=standard%2Cstandard-chat-completions%2Cglobal-standard#standard-deployment-model-availability) énumère les options (en date d'octobre 2025) :

- gpt-4o, version 2024-11-20
- gpt-35-turbo, version 1106 ou 0125

Si vous décidez de traiter à l'extérieur du Canada, vous pouvez utiliser les modèles selon la [disponibilité des modèles Global Standard](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure?pivots=azure-openai&tabs=global-standard-aoai%2Cstandard-chat-completions%2Cglobal-standard#global-standard-model-availability).

### Passage en production

Selon notre expérience, presque tous les espaces de production infonuagiques sont configurés pour prendre en charge Protégé B, ce qui signifie que même si votre projet n'utilise pas PB, vous devriez tout de même vous attendre aux restrictions de PB (voir [Expérimentations Protégé B](#expérimentations-protégé-b) ci-dessus).
Notez qu'en production, vous pouvez également avoir l'option de déploiements *Provisioned*, qui sont essentiellement des engagements de tokens/heure, mais quelques modèles supplémentaires sont offerts.

### Types de déploiement

Dans Azure OpenAI, il existe principalement deux « dimensions » pour déployer des modèles :

#### Géographique

- Les modèles **Standard** ou **Regional** sont traités dans la région de la ressource (OpenAI ou AI Foundry) à laquelle ils sont attachés.
- **Global**, comme son nom l'indique, ignore plus ou moins la région de votre ressource et traitera votre demande dans le centre de données Azure qui peut le mieux vous servir. Étrangement, vous ne pouvez *pas* déployer *tous* les modèles en tant que Global dans toutes les régions; consultez la section [Expérimentations non classifiées](#expérimentations-non-classifiées) ci-dessus pour notre recommandation.
- **Data Zone** est un type spécial qui ne s'applique pas vraiment à nous; c'est comme Global mais limite le traitement à la même frontière géopolitique que celle où la ressource est déployée : soit les États-Unis ou l'UE.

#### Type

- **Standard** est l'option de base.
- **Provisioned** ou **Provisioned Managed** sont plus ou moins comme un niveau d'engagement, où vous vous engagez à un certain nombre de tokens par heure (en utilisant une métrique PTU absurdement compliquée). GPT-4o dans ce déploiement coûte 277 $ CA/h pour 50M de tokens. Comme il est peu probable que cela soit utilisé de manière appropriée dans nos environnements, nous avons utilisé Azure Policy pour empêcher le déploiement accidentel de ce type; ils peuvent être ignorés en toute sécurité.
- **Batch** est, sans surprise, pour les requêtes par lots. Bien que vous deviez ajuster vos appels API / logique d'application pour le prendre en charge, batch peut permettre d'économiser beaucoup de coûts, car MS semble le tarifer à 50 % du prix équivalent non-batch.
  
Les options géographiques et de type ci-dessus sont combinées pour former environ 8 façons différentes de déployer un modèle; malheureusement, l'utilisation du mot « Standard » pourrait impliquer *soit* le géographique ou le type, et est parfois entièrement omise :(.
