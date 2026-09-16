---
title: Dépôts de Code
description: Details about how LaunchPad uses code repositories
translationKey: tutorials/code-repositories
draft: false
tags:
  - Git
  - ADO
  - GitHub
categories:
  - Tutoriels
---

## Aperçu

Diverses options de dépôts de code existent selon votre charge de travail et vos exigences.

Les options incluent, sans s'y limiter :

- **Azure DevOps** : à utiliser lorsque les données doivent être hébergées au Canada, que le suivi du travail et/ou des pipelines CI/CD complexes sont requis et que l'accès des utilisateurs est limité.
- **AWS CodeCommit** : à utiliser lorsque les données doivent être hébergées au Canada, que vous avez un nombre limité d'utilisateurs GC, que vous avez besoin d'un dépôt de code et de CI/CD, et que vous n'avez pas besoin de suivi du travail dans un seul produit.
- **GitHub** : à utiliser pour des projets open source publics avec un nombre élevé d'utilisateurs GC et non-GC. Suivi du travail limité et données non garanties au Canada. Non recommandé pour les charges de travail sensibles.
- **GC Code** : à utiliser pour un dépôt de code lorsque seul l'accès interne au GC est requis. Suivi du travail limité et aucune intégration CI/CD vers le cloud public.

## Options de dépôts

Ci-dessous se trouve une liste de divers dépôts de code et outils de suivi du travail qui peuvent être utilisés.

### Azure DevOps

Le programme scientifique possède une [organisation](https://dev.azure.com/science-program/) dans Azure pour le suivi du travail, les dépôts de code et les pipelines automatisés. Des organisations supplémentaires peuvent être créées pour les clients sur demande. Chaque organisation comprend cinq licences de base gratuites pour le développement et le suivi du travail dans un projet privé, et par la suite, des frais de 5 $ par mois par utilisateur s'appliquent. Les utilisateurs avec un compte MSDN obtiennent une licence de base gratuite et ne sont pas comptabilisés dans les cinq comptes. Les intervenants avec accès en lecture seule ne nécessitent pas de licence, tout comme les utilisateurs d'un projet open source public. DevOps permet de conserver toutes les données au Canada.

Le suivi du travail peut suivre les méthodologies traditionnelles waterfall, Agile ou Scrum.

Consultez les [fonctionnalités du guide utilisateur](https://docs.microsoft.com/en-us/azure/devops/user-guide/alm-devops-features?view=azure-devops) pour plus de détails sur ce qu'offre DevOps.

{{< needs-review >}}Pour des directives spécifiques, consultez la page [Science Program Azure DevOps](https://docs.scienceprogram.cloud/en/HowTos/Azure_DevOps).{{< /needs-review >}}

### AWS CodeCommit

AWS CodeCommit est un service de contrôle de source géré et hautement évolutif qui héberge des dépôts Git privés. Vous créez simplement un dépôt pour stocker votre code. Il n'y a pas de matériel à provisionner et à faire évoluer, ni de logiciel à installer, configurer et exploiter. CodeCommit vous aide à collaborer sur le code avec des pull requests, le branchement et la fusion. Vous pouvez mettre en œuvre des flux de travail qui incluent par défaut des révisions de code et des commentaires, et contrôler qui peut apporter des modifications à des branches spécifiques.

Les dépôts peuvent être créés dans le compte AWS du client et dans une région canadienne.

AWS CodeCommit n'inclut pas le suivi du travail ou le suivi des problèmes. Vous devez utiliser un autre produit comme [AWS CodeStar](https://aws.amazon.com/codestar/?nc=bc&pg=pr) propulsé par Atlassian JIRA Software.

### GitHub

[GitHub](https://github.com/) est l'un des outils de gestion de projets open source les plus connus. Il offre des dépôts publics et privés, mais vous ne pouvez pas spécifier où ils résident. Le suivi du travail peut être effectué dans GitHub à l'aide des issues, mais il est limité et n'inclut aucune méthodologie de développement. Les données ne sont pas garanties au Canada. Recommandé pour les projets open source ou les modules réutilisables publics. Non recommandé pour les projets sensibles.

Les fonctionnalités avancées telles que les réviseurs de code, les pages et wikis, et le stockage de plus de 500 Mo entraînent des coûts supplémentaires. Consultez la [page de licences GitHub](https://github.com/pricing) pour plus de détails.

### GCCode

GCCode est un dépôt privé du GC hébergé dans le centre de données de SPC et basé sur [GitLab](https://about.gitlab.com/). Le suivi du travail est limité mais peut être effectué via le suivi des problèmes. Aucun accès public ou intégration publique n'est autorisé, ce qui rend difficile la collaboration et les déploiements d'Infrastructure as Code. L'utilisateur doit être connecté au VPN ou au bureau.

## Dépôts de modèles

Ce qui suit est une liste de dépôts publics avec des modules réutilisables qui peuvent être utilisés pour les déploiements de code.

- [Azure ARM Templates](https://github.com/canada-ca/accelerators_accelerateurs-azure/) : Modèles ARM communs qui peuvent être utilisés dans les déploiements Azure. Ce dépôt n'est plus maintenu car plusieurs sont passés à Terraform pour sa syntaxe simple et son état.
- [Azure Terraform Templates](https://github.com/canada-ca-azure-templates) : Modèles Terraform communs maintenus par le GC.
- [GC Cloud Enablement](https://gccode.ssc-spc.gc.ca/GCCloudEnablement) : Il s'agit d'un dépôt GCcode avec des modules communs et de la documentation pour divers environnements. Vous devez être connecté au VPN ou au bureau et vous inscrire pour un compte pour que cela fonctionne.

Ce qui suit est une liste de cadres d'accélérateurs cloud qui peuvent être utilisés pour répondre à un profil Cloud Medium du CCCS.

- [Azure Landing Zones for Canadian Public Sector](https://github.com/Azure/CanadaPubSecALZ) : Ce modèle est destiné à être utilisé comme déploiement de base dans Azure pour répondre à un profil Cloud medium du CCCS. La solution déploie des solutions de journalisation communes, des solutions de sécurité, des politiques et plus encore. Ceci est déployé dans le locataire 163Oxygen Science.
- [Azure CAF Framework Terraform Module](https://github.com/Azure/terraform-azurerm-caf-enterprise-scale) : Ce modèle est similaire à celui ci-dessus mais n'est pas spécifique au GC. Il suit le Microsoft Cloud Adoption Framework et est configurable pour divers scénarios. Une version modifiée de ce modèle est utilisée par SPC dans le locataire 163gc CIO.
- [AWS Secure Environment Accelerator](https://github.com/aws-samples/aws-secure-environment-accelerator) : L'accélérateur AWS est un outil conçu pour aider à déployer et à exploiter des environnements AWS sécurisés multi-comptes et multi-régions de manière continue. Ce modèle est utilisé comme déploiement de base sur AWS pour répondre à un profil Cloud Medium du CCCS. Ce modèle est utilisé dans le locataire 163Hydrogen Science.
- [GC Accelerators for Google](https://github.com/canada-ca/accelerators_accelerateurs-gcp) : Ce dépôt hébergera les outils requis pour déployer un environnement GCP de base conforme au [cadre de mesures de sécurité du cloud](https://github.com/canada-ca/cloud-guardrails) du gouvernement du Canada.
