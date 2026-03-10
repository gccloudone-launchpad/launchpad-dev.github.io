---
title: Setup Multi-Factor Authentication
description: "How to setup your cell phone as a Multi-Factor Authenticator"
translationKey: tutorials/setup-multifactor-authentication
draft: false
tags: 
  - MFA
  - Security
categories: 
  - Tutorials
---

## Context

Our environment, called *163Oxygen* because of our science roots, requires Multi-Factor Authentication (MFA), sometimes called Two Factor Auth, or 2FA. Although you'll use your departmental credentials as the 'first factor', the MFA our environment requires is in addition to any MFA you already have for your home department.

Furthermore, we actually require so-called 'push' MFA, which means the use of the **Microsoft Authenticator** app on Android or iOS devices, although it does not need to be a GC-issued device.

{{% notice type="info" title="Note" %}}
If you are using the MMicrosoft Authenticator app for other GC resources, adding MFA for our environment **will not** affect any of those.
{{% /notice %}}

## First Time Setup

1. You should be automatically prompted the first time you try to get to your cloud environment. If not, you can go directly to the My Sign-Ins page for our environment:  
  <https://mysignins.microsoft.com/security-info?tenantId=163oxygen.onmicrosoft.com>
1. If prompted between MS Authenticator App and Hardware token, choose the MS Authenticator App.
1. As prompted on the *Start by getting the app* step.
    - If you don't already have it installed, install the MS Authenticator App on your device. You can click the *Download now* link for detailed instructions & QR codes to open the correct app store page for your device.
    - Once the app is installed, click *Next*.
{{% notice type="warning" title="Attention!" %}}
Note that many app stores will sell advertising space in their search results, so please ensure to install the **Microsoft** Authenticator App.  
As of Aug 2025 the QR codes below will bring you to the correct apps depending on your phone OS.
![QR code to download Microsoft Authenticator App on Android](/images/_bi/tutorials_setup-multifactor-authenticaor_1-qrcode-android.webp)
![QR code to download Microsoft Authenticator App on iOS](/images/_bi/tutorials_setup-multifactor-authenticaor_2-qrcode-ios.webp)
{{% /notice %}}
1. As suggested by the *Set up your account* page, in the MS Auth app on your phone, press the plus (or QR code) button to add an account.  
    - Your phone should now be on a QR code scanning screen, e.g. using the camera.  
    - If asked, you're adding a *work or school* account.
1. Back on the webpage, click the next button to get to the QR code page.  
    - Scan this with your phone, and it should set up the account.  
    - You should now see an entry titled *163Oxygen* in the list.
1. On the *Scan the QR code* page, click *Next*.
1. The setup wizard will now have you validate your setup  
    - You'll be given a two digit number and you should be prompted on your phone to enter it.  
    - Enter the number and click yes, and the setup wizard should confirm it was approved.

You can configure up to 5 total MFA methods so if you have a second device this can be quite handy in case of a lost/replaced/wiped primary device. If you were automatically prompted to setup MFA, you can add additional MFA on the My Sign-Ins page at the link provided in Step 1 above.

{{% notice type="info" title="Note" %}}
Do note that during the setup, the option to *Use another authenticator app* appears, but unfortunately our security policy does not support this option and you **must** use the Microsoft Authenticator App.
{{% /notice %}}

## Adding a New or Secondary Device

### Can Access Your Original Device

You can setup another MFA device visiting the same [My Sign-Ins](https://mysignins.microsoft.com/security-info?tenantId=163oxygen.onmicrosoft.com) page as noted above.

### No Longer Have Original Device

If you're unable to get to the My Sign-Ins (e.g. because it prompts you for MFA, which you can't now do), reach out to our team through whatever method you usually do and we'll be able to get you sorted out.

## No ability to use a phone/device for MFA

In the rare case you're unable to use an Android or iOS device for MFA (e.g. no cell reception, worksite restrictions), please reach out to our team as we have options for these exceptional cases.
