---
title: Configuration de l'authentification multifacteur (exempté)
description: Configuration de l'authentification multifacteur (exempté)
translationKey: tutorials/mfa-exemptions
draft: false
tags: 
  - AFM
  - Securite
categories:
  - Tutoriels
---

## Introduction

{{% notice type="info" title="Notez" %}}
Cette page est écrite **seulement** pour les gens ayant été accordés par une exemption de notre politique normal d'authentification multifacteur pour des raisons approuvées.
{{% /notice %}}

{{% notice type="info" title="SMS" %}}
L'option **SMS** est techniquement disponible en ce moment si vous avez eu une exemption d'AMF, cependant, cette option ne sera plus valide bientôt étant donné qu'elle n'est pas sécuritaire.
{{% /notice %}}

Cette page contient les instructions qui vont vous aider à configurer une authentification multifacteur (AMF) à <gcds-link external=true href="h[ttps://en.wikipedia.org/wiki/Time-based_one-time_password](https://fr.wikipedia.org/wiki/Mot_de_passe_%C3%A0_usage_unique_bas%C3%A9_sur_le_temps)" lang="fr">Mot de passe à usage unique basé sur le temps</gcds-link> (TOTP), et ce, lorsqu'une exemption vous a été donnée afin de pouvoir utiliser une méthode moins sécurisée que l'AMF par notification (*push*). Cette exemption est donnée lors de circonstances spéciales et est dictée par notre équipe. Nous vous demandons de contacter notre équipe avant de suivre ces instructions.

## Instructions

- Lors de la première connexion à notre environnement (si vous êtes exempté de la méthode d'AMF la plus sécurisée), vous allez etre demander de configurer votre AMF avec plusieurs options affichées à l'écran. Sélectionné l'option «Microsoft Authenticator»  
![Methodes de connexion](/images/fr/tutoriels_exemptions-afm_1-methodes-connexion.png "Methodes de connexion")
- Ensuite, cliquez sur l'option «Je souhaite utiliser une autre application d'authentification». Cette option est disponible seulement si vous êtes sur la liste d'exemption  
![Utiliser une autre application d'authentication](/images/fr/tutoriels_exemptions-afm_2-utilser-autre-application.png "Utiliser une autre application d'authentication")
- Suivez les instructions pour configurer un nouveau compte dans votre application d'authentification (il est possible d'utiliser n'importe quelle application d'authentification TOTP, comme Google Authenticator par exemple)
- Numérisez le code QR donné à l'aide de votre application d'authentification  
![Code QR pour configurer l'application d'authentication](/images/fr/tutoriels_exemptions-afm_3-code-qr.png "Code QR pour configurer l'application d'authentication")
- Entrez le code à 6 chiffres donné par votre application
- Votre application est maintenant configurée et devait maintenant fonctionner

### Applications TOTP recommandés

- Google authenticator
- Proton authenticator
- LastPass Authenticator
