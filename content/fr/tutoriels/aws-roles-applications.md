---
title: AWS - Rôles d'Applications IAM
description: "Comment créer des rôles IAM personnalisés avec boundary policies dans AWS."
translationKey: tutorials_aws-application-roles
draft: false
tags:
  - AWS
  - IAM
categories:
  - Tutoriels
---

Nos clients sont autorisés à créer des rôles d'application personnalisés / rôles IAM, mais pour prévenir l'escalade de privilèges, une limite d'autorisation appelée `SSCCustomRoleBoundaryPolicy` est requise. La combinaison de limites d'autorisations et de politiques de contrôle des services est une fonctionnalité avancée qui limite les permissions maximales qu'un rôle peut accorder à une entité IAM. La limite d'autorisation d'une entité lui permet d'effectuer uniquement les actions autorisées à la fois par ses politiques basées sur l'identité, et par ses limites d'autorisations.

Dans presque tous les cas, lors de la création d'un nouveau rôle d'application ou rôle IAM dans AWS, vous devrez attacher une limite d'autorisation. Ces politiques sont maintenues par l'équipe des opérations CIE (LaunchPad).

<gcds-alert alert-role="info" container="full" heading="Note"
    hide-close-btn="true" hide-role-icon="false" is-fixed="false" class="hydrated mb-400">
    <gcds-text character-limit=false>
    Dans le passé, nous utilisions une politique appelée `SSCDeveloperBoundaryPolicy` (et `SSCPowerUserBoundaryPolicy`) et bien que vous puissiez voir ce rôle à certains endroits, il ne devrait pas être utilisé pour de nouveaux rôles.</gcds-text>
    <gcds-text character-limit=false>
    Heureusement, `SSCCustomRoleBoundaryPolicy` est un remplacement direct pour `SSCDeveloperBoundaryPolicy`.</gcds-text>
</gcds-alert>

Il y a deux limites d'autorisations principales qui sont provisionnées à nos comptes et qui devraient être utilisées lors de la création de rôles personnalisés :

- `SSCPowerSysadminBoundaryPolicy`  
  Est appliquée aux comptes utilisateurs pour les utilisateurs réels, afin de définir les politiques appropriées pour le rôle PowerSysadmin. Cette politique ne peut pas être utilisée pour les rôles personnalisés.
- `SSCCustomRoleBoundaryPolicy`  
  Est la politique qui doit être définie sur les rôles IAM personnalisés.

Si vous utilisez le portail web pour créer un nouveau rôle IAM, vous pouvez attacher la limite d'autorisatio limites d'autorisations en utilisant la boîte __Définir une limite d'autorisations - *facultatif*__, en cliquant sur l'option __Utiliser une limite d'autorisations \[...\]__, en recherchant __SSC__, et finalement en sélectionnant la politique `SSCCustomRoleBoundaryPolicy` :

![Interface pour 'Définir une limite d'autorisations'](/images/fr/tutoriels_aws-roles-application_1-element-IU.jpg "Interface pour 'Définir une limite d'autorisations'")
