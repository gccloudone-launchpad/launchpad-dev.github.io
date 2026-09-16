---
title: Différences techniques par profil de données
description: Différences techniques entre les profils de données
translationKey: technical-data-profiles
draft: false
---

Cette page décrit les différences et limitations techniques auxquelles vous ferez face selon le profil choisi. Elle peut vous servir de référence pour les limitations techniques et la façon de les gérer. Elle peut également vous aider à déterminer s'il est plus simple de nettoyer vos données ou d'utiliser un profil 3.

## Particularités du profil 1 (non classifié / expérimental)

Ce profil correspond au niveau que nous avons toujours offert. Il est conçu pour contenir uniquement des données non classifiées, ce qui signifie qu'il comporte le moins de restrictions.

Voici la liste des restrictions de sécurité en vigueur dans tous nos profils, y compris le profil 1 :

### Azure

- **Restriction sur SSH (22) et RDP (3389) :** Ce sont les ports les plus fréquemment ciblés sur Internet. En conséquence, ces ports ne peuvent pas rester ouverts vers l'Internet public dans notre environnement. Si vous déployez une VM avec l'un ou l'autre de ces ports accessible publiquement, vous recevrez une notification par courriel. Si le problème n'est pas résolu dans les 24 heures, l'accès sera restreint à votre propre adresse IP.

#### Ce que cela signifie pour vous

Vous ne devriez pas constater de différence notable entre un environnement Azure standard et le nôtre, si ce n'est l'authentification multifacteur (AMF) obligatoire, l'utilisation de votre courriel GC et la présence de mesures de sécurité supplémentaires.

## Profil 3a (données sensibles / Protégé B)

Ce profil est conçu pour les charges de travail sensibles et peut contenir des données jusqu'au niveau Protégé B. Il n'est pas destiné à toutes les charges de travail; les projets dans la région du profil 3 de notre environnement peuvent être plus complexes et sont soumis à davantage de restrictions. Il est recommandé d'avoir une certaine expérience de l'infonuagique avant d'entreprendre un projet dans notre espace de profil 3.

### Ce que cela signifie pour vous

#### Azure

- L'accès aux VM se fait via le bastion fourni (aucun port SSH ou RDP ouvert).
- Les ressources se trouvent dans des VNET fournis, connectés à un VNET général derrière notre pare-feu.
- L'ouverture de ports ou d'adresses IP vers Internet nécessite la suppression de la politique après approbation par notre équipe. L'accès sortant est activé par défaut via HTTPS / HTTP.

#### AWS

- Oups, cette section doit être complétée.

#### GCP

> Notre environnement GCP n'est pas encore approuvé pour une utilisation avec le profil 3. C'est en cours.
