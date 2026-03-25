---
title: Profils de données protégées et différences dans les environnements infonuagiques
description: Effets des politiques de garde-fous du GdC sur l'utilisation de notre environnement
translationKey: protected-data-profiles
draft: false
---

Nous offrons maintenant trois niveaux de sécurité différents pour les informations protégées. Les informations contenues dans cette page vous aideront à déterminer ce qui sera requis dans l'espace que vous utiliserez dans notre environnement, ainsi qu'à connaître les limitations auxquelles vous ferez face lors de l'utilisation de données protégées.

Pour obtenir des informations sur les guardrails généraux, voici une page utile : [GoC Cloud Guardrails](https://github.com/canada-ca/cloud-guardrails/blob/master/FR/00_Port%C3%A9e-Applicable.md)

{{% notice type="danger" title="Classification des données" %}}
Il est important de noter que si vous avez un espace « Experimental » ou « Profile 1 », vous **ne pouvez pas y avoir d'informations protégées**!
{{% /notice %}}

## Cloud-Guardrails

Voici une liste des guardrails implémentés dans notre environnement (consultez le lien ci-dessus pour plus d'informations) :

### Impact majeur sur votre utilisation

#### ID1 - Protéger les comptes d'utilisateurs et les identités

Nous utilisons vos comptes ministériels comme comptes invités dans notre environnement. Vous bénéficiez ainsi de nos protections ainsi que de celles de votre ministère (MFA, logging, etc.).

Il s'agit d'une nécessité de base qui ne devrait vous affecter que si vous ne pouvez pas utiliser le MFA pour des raisons professionnelles. Veuillez nous contacter si c'est le cas.

---

#### ID2 - Gérer l'accès

Nous limitons l'accès à une liste définie d'utilisateurs actifs et supprimons leur accès une fois leur expérience terminée. L'accès est également désactivé et le compte supprimé après un certain nombre de jours d'inactivité.

Cela peut affecter votre utilisation lorsque vous n'utilisez pas l'environnement pendant certaines périodes.

---

#### ID9 - Services de sécurité du réseau *(Profile 3 seulement)*

L'accès aux services de stockage infonuagique doit être protégé et limité aux zones ou réseaux de sécurité autorisés, aux utilisateurs et aux services. Cela signifie que les services et les ressources doivent être accessibles à l'aide d'outils et de méthodes d'accès sécurisés. Concrètement, dans notre environnement, cela signifie que les données et les paquets provenant de votre ordinateur doivent passer par notre pare-feu et que les services doivent se trouver dans des réseaux isolés (d'Internet) (VNETs ou VPCs).

### Impact mineur sur votre utilisation

#### ID3 - Sécuriser les points d'extrémité

Pour permettre l'accès aux utilisateurs extérieurs au gouvernement (contractuels, étudiants, etc.), ce guardrail n'est pas entièrement appliqué, mais un logging est en place pour s'assurer que l'utilisateur provient d'un emplacement sécurisé au Canada. Cela ne devrait pas affecter votre utilisation quotidienne de façon notable.

---

#### ID5 - Emplacement des données *(Profile 3 seulement)*

Toutes les données au repos doivent se trouver au Canada. Pour vous, cela signifie que toutes les ressources (EC2, VMs, bases de données, MS Foundry) doivent être hébergées dans un centre de données situé au Canada lorsque l'option est disponible. Pour Vertex et Bedrock (les plateformes d'IA de GCP et d'AWS), ces options n'existent pas et ne peuvent donc pas être sélectionnées; il est donc acceptable d'avoir des éléments en dehors du Canada (avec des endpoints globaux).

---

#### ID6 - Protection des données inactives *(Profile 3 seulement)*

Les données au repos doivent être chiffrées. Cela devrait être pris en charge par le CSP ainsi que par les paramètres que vous pouvez configurer vous-même. De nombreux services ont le chiffrement activé par défaut, et d'autres ont des politiques configurées dans le Profile 3 pour s'en assurer.

---

#### ID7 - Protection des données en transit *(Profile 3 seulement)*

Les données en transit doivent être chiffrées. La plupart des services sont chiffrés par défaut dans nos CSPs, mais d'autres qui ne le sont pas se voient imposer le chiffrement par nos politiques (que ce soit via notre pare-feu ou non).

---

#### ID8 - Segmenter et séparer *(Profile 3 seulement)*

Cette exigence est déjà satisfaite par notre mode de fonctionnement (l'attribution des subscriptions / comptes / projets). Il est important de noter que si vous avez accès à plusieurs subscriptions / comptes / projets en raison de vos multiples projets, vous ne devez pas partager de données ni de paramètres réseau entre eux (même s'ils sont tous des espaces Profile 3).

### Aucun impact sur votre utilisation

#### ID4 - Comptes de surveillance de l'organisation

Il s'agit d'une nécessité de base imposée par le CCCS pour tous les espaces infonuagiques du gouvernement. Cela n'affectera pas votre utilisation, à moins bien sûr que vous soyez un espion.

---

#### ID10 - Services de cyberdéfense

Nous utilisons des outils tels que Microsoft Defender for Cloud pour défendre votre environnement et nos outils internes contre les attaques de grande envergure comme les DDOS et les intrusions. Cela ne devrait pas affecter votre utilisation.

---

#### ID11 - Journalisation et surveillance

Nous utilisons différents outils pour assurer un logging adéquat des activités dans notre environnement. Cela n'affectera pas votre utilisation.

---

#### ID12 - Configuration des marchés de l'informatique en nuage

Nous avons désactivé les items de marketplace tiers afin de ne pas contrevenir aux règles d'approvisionnement et de sécurité du GdC. La plupart des produits utilisés sont des items de première partie; cela ne devrait donc pas affecter votre utilisation.

---

#### ID13 - Planifier la continuité

Nous disposons d'une documentation adéquate dans nos systèmes internes et utilisons les accélérateurs CSP appropriés en cas de réinitialisation complète du tenant. Cela n'affectera pas votre utilisation.
