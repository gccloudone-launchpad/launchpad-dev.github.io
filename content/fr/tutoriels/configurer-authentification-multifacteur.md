---
title: Configurer Authentification Multifacteur
description: "Comment configurer votre telephone comme source authentification multifacteur'"
translationKey: tutorials/setup-multifactor-authentication
draft: false
tags: 
  - AFM
  - Sécurity
categories: 
  - Tutoriels
---

## Contexte

Notre environnement, appelé *163Oxygen* en raison de nos racines scientifiques, nécessite une authentification multifacteur (AMF, « MFA » en anglais), aussi parfois appelée authentification à deux facteurs, A2F, (« 2FA » en anglais). Bien que vous utilisiez vos identifiants départementaux comme 'premier facteur', l'AMF requise par notre environnement s'ajoute à toute AMF que vous avez déjà pour votre département d'origine.

De plus, nous exigeons en réalité une AMF dite 'push'. Vous devrez utiliser l'application **Microsoft Authenticator** sur les appareils Android ou iOS, bien qu'il ne soit pas nécessaire qu'il s'agisse d'un appareil émis par le GC.

{{% notice type="info" title="Notez" %}}
Si vous utilisez l'application Microsoft Authenticator pour d'autres ressources GC, l'ajout de la AMF pour notre environnement **n'affectera pas** celles-ci.
{{% /notice %}}

## Configuration Initiale

1. Vous devriez être automatiquement invité lors de votre première tentative d'accès à votre espace infonuagique. Si ce n'est pas le cas, vous pouvez vous rendre directement sur la page MySignins pour notre environnement :  
  <https://mysignins.microsoft.com/security-info?tenantId=163oxygen.onmicrosoft.com>
1. Si vous êtes invité à choisir entre l'application MS Authenticator et un jeton matériel, choisissez l'application MS.
1. Comme indiqué à l'étape *Commencez par obtenir l'application*.  
    - Si vous ne l'avez pas déjà installée, téléchargez l'application MS Authenticator sur votre appareil. Vous pouvez cliquer sur le lien *Télécharger maintenant* pour des instructions détaillées et des codes QR afin d'ouvrir la page de la boutique d'applications appropriée pour votre appareil.  
    - Une fois l'application installée, cliquez sur *Suivant*.
{{% notice type="warning" title="Attenion!" %}}
Il y as nombreuses boutiques d'applications qui vendent des espaces publicitaires dans leurs résultats de recherche, alors assurez-vous d'installer l'application Authenticator de **Microsoft**.  
À partir d'août 2025, les codes QR suivant vous dirigeront vers les applications correctes selon le système d'exploitation de votre téléphone.  
![QR code to download Microsoft Authenticator App on Android](/images/_bi/tutorials_setup-multifactor-authenticaor_1-qrcode-android.webp)
![QR code to download Microsoft Authenticator App on iOS](/images/_bi/tutorials_setup-multifactor-authenticaor_2-qrcode-ios.webp)
{{% /notice %}}
1. Comme suggéré par la page *Configurer votre compte*, dans l'application Authenticator sur votre téléphone, appuyez sur le bouton plus (ou bouton code QR) pour ajouter un compte.  
    - Votre téléphone devrait maintenant être sur un écran de numérisation de code QR, c'est-à-dire en utilisant la caméra.
    - Si on vous le demande, vous ajoutez un compte *travail ou école*.
1. De retour sur la page web, cliquez sur le bouton suivant pour accéder à la page du code QR.  
    - Numérisez-le avec votre téléphone, et cela devrait configurer le compte.  
    - Vous devriez maintenant voir une entrée intitulée *163Oxygen* dans la liste.
1. Sur la page *Scanner le code QR*, cliquez sur *Suivant*.
1. L'assistant de configuration va maintenant vous faire valider votre configuration.  
    - Un nombre à deux chiffres vous sera donné et vous devriez être invité à le saisir sur votre téléphone.  
    - Entrez le numéro et cliquez sur oui, l'assistant de configuration devrait confirmer que le code a été approuvé.

Vous pouvez configurer jusqu'à 5 méthodes AMF au total, alors si vous avez un deuxième appareil, cela peut être très pratique en cas de perte/remplacement/purge de l'appareil principale. Si vous avez été automatiquement invité à configurer la AMF, vous pouvez ajouter des méthodes AMF supplémentaires sur la page Mes connexions à l'adresse en haut de la page a l'étape 1.

{{% notice type="info" title="Notez" %}}
Veuillez noter que pendant la configuration, l'option « Je souhaite utiliser une autre application d'authentification » est proposée, mais malheureusement, notre politique de sécurité ne prend pas en charge cette option et vous **devez** utiliser l'application Microsoft Authenticator.
{{% /notice %}}

## Nouvel appareil / appareil de secours

### Si vous avez toujours accès à votre appareil original

Vous pouvez configurer un autre appareil AMF en visitant la même page *[My Sign-Ins](https://mysignins.microsoft.com/security-info?tenantId=163oxygen.onmicrosoft.com)* mentionnée ci-dessus.

### Pas d'accès à l'appareil/configuration AMF original

Si vous ne parvenez pas à accéder à la page My Sign-Ins (par exemple, parce qu'elle vous demande une AMF, ce que vous ne pouvez pas faire maintenant), contactez notre équipe et nous pourrons vous aider.

## Pas de possibilité d'utiliser un téléphone/appareil pour AMF

Dans le rare cas où vous ne pouvez pas utiliser un appareil Android ou iOS pour la AMF (par exemple, pas de réception de cellulaire, restrictions sur le lieu de travail), veuillez nouz contacter, car nous avons des options pour ces cas exceptionnels.
