---
title: Exempted Multi-Factor Authentication
translationKey: tutorials_mfa-exemptions
description: How to setup MFA with exemptions
tags: 
  - MFA
  - Security
draft: false
categories:
  - Tutorials
---

## Introduction

{{% notice type="info" title="Note" %}}
This page is **only** for persons who have been given an exemption by our team regarding MFA for approved reasons.
{{% /notice %}}

{{% notice type="info" title="SMS Method" %}}
The SMS method is currently available when given an MFA exemption but it will be deprecated soon as it is **insecure** so we recommend using TOTP (follow this page's instructions) authentication.
{{% /notice %}}

This page is set up so you can follow instructions on how to properly set up <gcds-link external=true href="https://en.wikipedia.org/wiki/Time-based_one-time_password" lang="en">Time Based One Time Password</gcds-link> (TOTP) when an exemption was given so a less secure than push authentication method can be used. This exemption is given under special circumstances and is decided by our team. Please discuss with us before trying to follow these instructions.

## Instructions

- When login in for the first time on our environment with the exemption set on your account, you will be asked to set up MFA and will have many options. Select the "Microsoft Authenticator" option.  
![Sign-in Methods](/images/en/tutorials_mfa-exemptions_1-sign-in-methods.png "Sign-in Methods")
- Then, click on "I want to use a different authenticator app," this option is only truly available when you are in our exemption list.  
![Use different authenticator app](/images/en/tutorials_mfa-exemptions_2-use-different-app.png "Use different authenticator app")
- Follow the instructions to set up a new account in your authenticator application (you can use any TOTP enabled authenticator app like Google Authenticator for example)
- Scan the given QR code in your authentication app.  
![Authentictor app QR code](/images/en/tutorials_mfa-exemptions_3-qr-code.png "Authentictor app QR code")
- Enter the 6 digit code given by your authenticator app.
- Your authenticator app should be configured and working now.

### Recommended TOTP applications

- Google authenticator
- Proton authenticator
- LastPass Authenticator
