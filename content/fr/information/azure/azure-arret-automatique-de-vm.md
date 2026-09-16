---
title: Azure - Arret Automatique de VM
description: Informations a propos de l'arret automatique de VM dans le client
translationKey: tutorials/azure-off-hours-vm-shutdown
draft: false
tags:
  - Azure
  - VM
  - Automatisation
categories:
  - Tutoriels
  - Azure
---

## Description

Dans le but de maintenir les coûts de calcul à un niveau bas et de profiter de l'élasticité offerte par les technologies infonuagiques, nous avons mis en place une fonction qui s'exécute quotidiennement après les heures de bureau pour arrêter les machines virtuelles (VM).

### Justification

Les coût les plus important dans le client Azure 163Oxygen provient des VM, car leurs coûts continuent de s'accumuler lorsqu'elles sont en cours d'exécution, peu importe leur niveau d'utilisation.

En arrêtant les VM selon l'horaire ci-dessous, nous pouvons réduire la durée d'exécution hebdomadaire d'une VM de 168 heures à 80 heures, ce qui résulte en une économie de plus de 50%.

## Détails

**Chaque jour à 03h00 UTC (23h00 EDT ou 22h00 EST)**  
Toutes les VM en cours d'exécution seront arrêtées, sauf si elles ont [l'étiquette](#désactivation-de-larrêt-automatique) de désactivation configuré. Les VM qui n'étaient pas en cours d'exécution à ce moment, ou qui ont l'étiquette configuré, ne sont pas affectées.

**Chaque lundi au vendredi à 10h00 UTC (06h00 EDT ou 05h00 EST)**  
Les VM arrêtées la journée précédente par l'automatisation seront redémarrées. Le lundi, les VM arrêtées le vendredi précédent seront redémarrées.

### Désactivation de L'Arrêt Automatique

Pour qu'une machine ne soit pas arrêtée comme mentionné ci-dessus, ajoutez une *étiquette* à la VM avec le nom `vmkeepon` et la valeur `true`.

L'image ci-dessous montre un exemple avec l'étiquette appliqué.

![Vue du portail Azure montrant l'etiquette sur une VM](/images/fr/tutoriels_azure-arret-automatique_1-etiquette.png "Vue du portail Azure montrant l'etiquette sur une VM")

## Remarques

- Ceci réduira seulement les coûts de calcul des VM elles-mêmes (c.-à-d. CPU et RAM assignés).
- Les coûts de stockage ne sont pas affectés et s'accumulent toujours en fonction de la taille des disques *provisionnés*, peu importe leur capacité utilisée ou leur état d'attachement.
- Actuellement, nous ciblons seulement les VM « régulières ».
