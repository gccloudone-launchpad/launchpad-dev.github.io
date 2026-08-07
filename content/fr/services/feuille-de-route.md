---
title: Feuille de route
description: "Services que LaunchPad développe et pourrait offrir éventuellement."
translationKey: services/roadmap
draft: false
tags: []
categories: []
---

{{% notice type="warning" title="Travaux en cours" %}}
Les services décrits sur cette page sont en cours d'élaboration. Leur disponibilité, leur conception et leur portée peuvent changer en tout temps.
{{% /notice %}}

LaunchPad cherche continuellement des façons de mieux appuyer les fonctionnaires qui explorent les technologies infonuagiques. Les services ci-dessous reflètent des orientations que nous envisageons pour l'avenir, allant de premières idées à des concepts que nous continuons de peaufiner. Aucun n'est offert de façon générale à l'heure actuelle. Si l'un de ces services pourrait être utile à votre organisation, veuillez [nous contacter]({{< globallink "about-us/contact-us" >}}) pour discuter de vos besoins et contribuer à orienter son développement.

## Services-conseils

L'offre principale de LaunchPad combine actuellement un environnement infonuagique (un abonnement Azure, un compte AWS ou un projet GCP) et des services-conseils qui aident les clients à s'y retrouver parmi les services infonuagiques offerts et à les utiliser efficacement. Cependant, pas toutes les organisations qui pourraient bénéficier de cette expertise ont  besoin d'un espace qui leur est propre. Certains clients ont déjà accès à un environnement infonuagique par l'entremise de leur ministère, d'un autre courtier infonuagique ou d'une charge de travail infonuagique existante, et n'ont besoin que de conseils d'experts pour bien l'utiliser.

Un service de Conseils autonome séparerait cette expertise de l'offre de bac à sable. Les clients fourniraient leur propre environnement infonuagique, et LaunchPad offrirait la capacité supplémentaire, l'orientation et les conseils pratiques nécessaires pour les aider à s'y retrouver parmi les services infonuagiques, sans provisionner ni gérer d'infrastructure dans les locataires de LaunchPad. Cela maintiendrait LaunchPad dans un rôle de soutien plutôt que celui d'un fournisseur de services gérés : nous ne mettrions pas en place ni n'exploiterions l'environnement d'un client, mais donnerions accès à notre expérience multi-infonuagique pour aider les clients à prendre des décisions éclairées. Comme pour le reste des services de LaunchPad, ce service se concentrerait sur des travaux axés sur des objectifs, à court terme, expérimentaux et novateurs, jusqu'au profil 3, plutôt que sur un soutien continu à la production.

Le service de Conseils fonctionnerait probablement selon un modèle de recouvrement des coûts, facturé selon un nombre défini d'heures à un taux horaire, plutôt que d'être financé de façon centralisée comme peuvent l'être les plus petites expériences gérées. Cela contribuerait à assurer la viabilité du service et son accessibilité aux clients ayant un besoin réel et bien défini d'expertise, tout en complétant les autres services offerts par LaunchPad au sein de l'écosystème plus large de GCCO à titre de source d'expertise infonuagique pratique.

## Environnements d'innovation persistants (PIE)

PIE offrirait aux clients une capacité de calcul de haute puissance à court terme sans devoir provisionner un environnement infonuagique complet. Plutôt que de recevoir un abonnement, un compte ou un projet, les clients obtiendraient un accès en ligne de commande à une machine virtuelle, ainsi qu'à des ressources de stockage et de bases de données au besoin, pour une période limitée afin d'exécuter des tâches de calcul à grande échelle. Une fois cette période terminée et le travail achevé, les ressources associées seraient détruites, ce qui permettrait de garder le service strictement limité dans le temps. Cela distingue PIE des autres offres de LaunchPad et, surtout, du calcul haute performance (CHP). Le service ne vise pas à remplacer une infrastructure de CHP dédiée, mais à fournir, au besoin, de courtes périodes de capacité de calcul provisionnées rapidement et à coût avantageux.

Ce service s'adresserait aux clients qui comprennent déjà leurs besoins techniques et qui ont simplement besoin de plus de puissance de calcul que ce que leurs ordinateurs portables ou l'infrastructure de leur ministère peuvent rapidement fournir, par exemple pour le traitement de données génomiques ou des charges de travail d'entraînement et d'inférence en IA/apprentissage automatique. Comme pour le reste des services de LaunchPad, PIE se concentrerait sur des travaux expérimentaux et novateurs, et ne conviendrait pas aux clients qui sont encore en train d'explorer ou de définir leurs besoins; ce soutien continuerait de relever des services de base d'expérimentation et de conseils de LaunchPad.

L'établissement des coûts pour PIE reposerait sur un modèle de recouvrement des coûts, puisque les dépenses pourraient varier considérablement selon les besoins de calcul particuliers de chaque client. LaunchPad collaborerait avec les clients pour établir un plafond de dépenses qui leur convient, et exigerait que le codage financier et d'autres détails soient confirmés avant le provisionnement de toute ressource.

## Locataires gérés

Les locataires gérés répondraient aux situations où les clients ont besoin d'un accès à Microsoft Entra ID avec un niveau de permissions administratives que les environnements traditionnels de LaunchPad ne peuvent pas offrir. Plutôt que de travailler dans un abonnement au sein d'un des locataires existants de LaunchPad, ces clients auraient besoin d'un locataire dédié pour évaluer des scénarios liés à l'identité, comme des politiques d'accès conditionnel, des configurations à l'échelle du locataire ou d'autres fonctionnalités qui exigent un niveau d'accès et de contrôle plus élevé que ce qui est possible dans nos locataires partagés.

LaunchPad provisionnerait le locataire et mettrait en place les mécanismes de protection appropriés avant d'accorder l'accès, afin de s'assurer que chaque locataire est configuré dès le départ selon de saines pratiques de sécurité. Une fois prêts, les clients recevraient des comptes de niveau administrateur et pourraient configurer et expérimenter au sein du locataire selon leurs besoins. Comme pour le reste des services de LaunchPad, cette offre se concentrerait sur des travaux axés sur des objectifs, expérimentaux et novateurs, plutôt que d'offrir une voie vers un locataire permanent prêt pour la production.

Une préoccupation majeure liée à l'offre de locataires dédiés est la prolifération des locataires, un défi qui peut aussi survenir plus largement dans le courtage infonuagique. Les locataires gérés atténueraient ce risque de la même façon que LaunchPad gère ses autres environnements : en limitant l'accès dans le temps. Une fois l'expérience du client terminée, le locataire serait mis hors service. Cela permettrait à LaunchPad d'accorder un niveau d'accès plus élevé aux clients qui en ont réellement besoin, sans imposer le fardeau de gouvernance à long terme lié à la création non gérée de locataires au sein de l'écosystème plus large de GCCO.

Pour le moment, le modèle de coûts, les échéanciers et le niveau de soutien pour les locataires gérés demeurent indéfinis, puisque nous explorons encore cette possibilité et réfléchissons à la meilleure façon de la mettre en œuvre.