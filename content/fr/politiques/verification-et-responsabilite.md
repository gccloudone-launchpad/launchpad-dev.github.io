---
title: Vérification et Responsabilité
description: ""
translationKey: policy/audit-and-accoutability
draft: false
tags: 
  - Politique
categories: 
  - Politique
---

## Objectif

Assurer que les ressources de technologie de l'information (TI) et les systèmes d'information soient établis avec des contrôles de sécurité efficaces et des améliorations de contrôle qui reflètent les lois fédérales et provinciales applicables, les décrets, directives, règlements, politiques, normes et orientations.

## References

- [NIST SP 800-53a](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) – Assessing Security and Privacy Controls in Information Systems and Organizations
- [NIST SP 800-12](https://csrc.nist.gov/pubs/sp/800/12/r1/final) - An Introduction to Information Security
- [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final) - Guide to Computer Security Log Management
- [NIST SP 800-100](https://csrc.nist.gov/pubs/sp/800/100/upd1/final) - Information Security Handbook: A Guide for Managers

## Politique

Cette politique s'applique à tous les environnements infonuagiques de GCCO LaunchPad.

### Événements de vérification

Les propriétaires des systèmes d'information, en collaboration avec les services de vérification et de TI, doivent :

- Déterminer que le système d'information est capable de vérifier les événements suivants :
  - Modifications aux rôles d'administration
  - Toutes les actions effectuées par un utilisateur
  - Actions de connexion avec des comptes sécurisés (p. ex. : comptes breakglass, comptes root)
  - Modifications du réseau et de la sécurité de l'infrastructure de base
  - Modifications et/ou accès aux journaux
  - Modifications et/ou accès aux systèmes de vérification
  - Échecs de connexion
  - Modifications des politiques d'environnement
- Coordonner la fonction de vérification de la sécurité avec les autres entités organisationnelles nécessitant une vérification (p. ex. : Centre canadien pour la cybersécurité)
- Fournir une justification expliquant pourquoi les événements vérifiables sont jugés adéquats pour soutenir les enquêtes après coup sur les incidents de sécurité
- Déterminer que les événements suivants doivent être vérifiés au sein du système d'information :
  - Modifications aux rôles d'administration
  - Toutes les actions effectuées par un utilisateur
  - Actions de connexion avec des comptes sécurisés (p. ex. : comptes breakglass, comptes root)
  - Modifications du réseau et de la sécurité de l'infrastructure de base
  - Modifications et/ou accès aux journaux
  - Modifications et/ou accès aux systèmes de vérification
  - Échecs de connexion
  - Modifications des politiques d'environnement

### Révisions et mises à jour

L'équipe des opérations de GCCO LaunchPad doit réviser et mettre à jour les événements vérifiés annuellement.

### Contenu des enregistrements de vérification

Le système d'information doit générer des enregistrements de vérification contenant des informations qui établissent le type d'événement survenu, le moment où l'événement s'est produit, l'endroit où l'événement s'est produit, la source de l'événement, le résultat de l'événement et l'identité de toute personne ou tout sujet associé à l'événement.

### Planification de la capacité de stockage des vérifications

Le propriétaire de l'information doit s'assurer que la capacité de stockage des enregistrements de vérification est allouée au besoin et qu'elle respectera la période de conservation.

### Transfert vers un stockage de substitution

Le système d'information doit décharger quotidiennement les enregistrements de vérification sur un système ou un support différent du système vérifié.

### Réponse aux défaillances du traitement de vérification

L'équipe des opérations de GCCO LaunchPad doit :

- Réviser et documenter les raisons de l'échec de la vérification
- Corriger tout problème lié à la journalisation et à la vérification

### Surveillance de la capacité de stockage des vérifications

Le système d'information doit fournir un avertissement à l'équipe des opérations de GCCO LaunchPad dans les 24 heures suivant le moment où le volume de stockage des enregistrements de vérification alloué atteint 75 % de la capacité maximale de stockage des enregistrements de vérification du référentiel.

### Alertes en temps réel

Le système d'information doit fournir une alerte dans un délai de 2 heures aux équipes des opérations de GCCO LaunchPad lorsque les échecs de vérification suivants se produisent :

- Actions de connexion avec des comptes sécurisés (p. ex. : comptes breakglass, comptes root)
- Modifications du réseau et de la sécurité de l'infrastructure de base
- Modifications aux journaux de sécurité
- Modifications aux règles du système de vérification
- Modifications des politiques d'environnement
- Intrusion par un groupe de menace connu

### Seuils de volume de trafic configurables

Le système d'information doit appliquer des seuils de volume de trafic de communications réseau configurables qui reflètent les limites de la capacité de vérification et rejeter ou retarder le trafic réseau au-delà de ces seuils.

### Arrêt en cas de défaillance

Le système d'information doit invoquer un arrêt partiel du système en cas de défaillances de vérification ci-dessous, à moins qu'une capacité de vérification de substitution n'existe.

- Actions de connexion avec des comptes sécurisés (p. ex. : comptes breakglass, comptes root)
- Modifications du réseau et de la sécurité de l'infrastructure de base
- Modifications aux journaux de sécurité
- Modifications aux règles du système de vérification
- Modifications des politiques d'environnement
- Intrusion par un groupe de menace connu

### Révision, analyse et rapport de vérification

Le propriétaire du système d'information doit :

- Réviser et analyser hebdomadairement les enregistrements de vérification du système d'information pour détecter toute activité inappropriée ou inhabituelle.
- Communiquer les résultats aux opérations de GCCO LaunchPad et aux équipes de gestion.

### Intégration des processus

Les propriétaires des systèmes d'information doivent s'assurer que des mécanismes automatisés sont employés pour intégrer les processus de révision, d'analyse et de rapport de vérification afin de soutenir les processus organisationnels d'enquête et de réponse aux activités suspectes.

### Référentiels de vérification

Le propriétaire du système d'information doit s'assurer de l'analyse et de la corrélation des enregistrements de vérification dans différents référentiels afin d'acquérir une conscience situationnelle.

### Réduction de la vérification et génération de rapports

Le système d'information doit fournir une capacité de réduction de la vérification et de génération de rapports qui :

- Prend en charge les exigences de révision, d'analyse et de rapport de vérification sur demande et après coup.
- Ne modifie pas le contenu original ou l'ordre chronologique des enregistrements de vérification.

### Horodatage

Le système d'information doit :

- Utiliser des horloges système internes pour générer des horodatages pour les enregistrements de vérification.
- Enregistrer des horodatages pour les enregistrements de vérification qui peuvent être mappés au temps universel coordonné (UTC) ou au temps moyen de Greenwich (GMT) et respecter une granularité de mesure du temps d'une seconde ou moins.

### Synchronisation avec une source temporelle faisant autorité

Les horodatages s'appuieront sur les services de synchronisation temporelle du fournisseur infonuagique qui utilise une flotte d'horloges atomiques et connectées par satellite redondantes dans chaque région pour fournir une horloge de référence hautement précise. L'utilisation du service du fournisseur infonuagique garantira que tous les horodatages concordent, même pour les services où ils ne peuvent pas être définis.

### Protection des informations de vérification

Le système d'information doit protéger les informations de vérification et les outils de vérification contre l'accès, la modification et la suppression non autorisés.

### Accès par un sous-ensemble d'utilisateurs privilégiés

L'organisation doit autoriser l'accès à la gestion de la fonctionnalité de vérification uniquement aux équipes des opérations et de la sécurité de GCCO LaunchPad.

### Conservation des enregistrements de vérification

Les propriétaires des systèmes d'information doivent conserver les enregistrements de vérification conformément aux documents [Guide sur la consignation d’événements](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/securite-confidentialite-ligne/orientations-politiques-matiere-cybersecurite/guide-sur-la-consignation-evenements.html) et [Profil des mesures de sécurité pour les services du GC fondés sur l’informatique en nuage](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/services-informatique-nuage/profil-controle-securite-services-ti-fondes-information-nuage.html) du Secrétariat du Conseil du Trésor (SCT).

- FSI : Période = \[**au moins 90 jours**\]
- GC : Période = \[**événements et journaux au moins 3 mois en ligne et au moins 6 mois en stockage; événements et journaux associés à un incident de sécurité pendant au moins 2 ans**\]

### Capacité de récupération à long terme

Les propriétaires des systèmes d'information doivent utiliser des mécanismes de requête et de récupération d'archives pour garantir que les enregistrements de vérification à long terme générés par le système d'information peuvent être récupérés.

### Génération de vérification

Le système d'information doit :

- Fournir une capacité de génération d'enregistrements de vérification pour les événements vérifiables tels que définis ci-dessus.
- Permettre à l'équipe des opérations de GCCO LaunchPad de sélectionner les événements vérifiables qui doivent être vérifiés par des composants spécifiques du système d'information.

### Formats normalisés

Le système d'information doit produire une piste de vérification à l'échelle du système (logique ou physique) composée d'enregistrements de vérification dans un format normalisé.

### Modifications par des personnes autorisées

Le système d'information doit fournir à l'équipe des opérations de GCCO LaunchPad la capacité de modifier la vérification effectuée sur les environnements infonuagiques en fonction de valeurs convenues.

## Procédures

Les actions suivantes doivent être effectuées au moins tous les 90 jours :

1. Effectuer la rotation des clés d'accès des comptes
2. Réviser les utilisateurs et groupes AWS IAM en retirant toute personne qui n'est pas requise.
3. Réviser les rôles AWS IAM et les ensembles d'autorisations en supprimant ceux qui ne sont plus requis.
4. Réviser les groupes de sécurité AWS EC2, les paires de clés, les instances en cours d'exécution et les tailles d'instances.
   - Ajuster, désactiver ou supprimer au besoin.
5. Réviser la synchronisation des groupes Azure.
6. Réviser les Service Control Policies AWS et ajuster au besoin.
7. Réviser le référentiel AWS LZA pour les mises à jour et remédier au besoin.

Les actions suivantes doivent être effectuées au moins tous les 7 jours :

1. Réviser les résultats de SecurityHub, AWS Config, GuardDuty, CloudTrail et Defender for Cloud, et remédier au besoin.

Les actions suivantes doivent être effectuées quotidiennement :

1. Réviser Microsoft Sentinel pour les incidents et enquêter au besoin. Voir la section {{< needs-review >}}[Gestion des incidents Sentinel](/Azure/Sentinel/azure-sentinel "Gestion des incidents Sentinel" ){{< /needs-review >}}.
2. Réviser toutes les alertes reçues dans la boîte aux lettres des opérations et remédier au besoin.

{{< needs-review >}}
Consulter les [Lignes directrices sur la vérification de sécurité AWS](https://docs.aws.amazon.com/general/latest/gr/aws-security-audit-guide.html) et les [Pratiques opérationnelles exemplaires AWS](https://docs.aws.amazon.com/audit-manager/latest/userguide/OBP.html) pour des conseils et procédures supplémentaires.
{{< /needs-review >}}

## Conformité

Les employés qui enfreignent cette politique peuvent faire l'objet de mesures disciplinaires appropriées pouvant aller jusqu'au congédiement, ainsi que de sanctions civiles et pénales. Les non-employés, y compris, sans s'y limiter, les entrepreneurs, peuvent faire l'objet de la résiliation d'ententes contractuelles, du refus d'accès aux ressources de TI et d'autres mesures, ainsi que de sanctions civiles et pénales.

### Exceptions à la politique

Les demandes d'exception à cette politique doivent être révisées et approuvées par l'équipe de gestion et le directeur de GCCO LaunchPad.
