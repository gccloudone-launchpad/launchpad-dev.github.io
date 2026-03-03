---
description: Effects of GoC Guardrails policies on usage of our environment
title: Cloud guardrails profiles and protected data differences
translationKey: protected-data-profiles
draft: true
---

As we now offer three different levels of security for protected information. The information in this page will help make out what will be needed in the space you go to following our environment as well as to see what are the limitations you'll face within our environment when using protected data.

For information about the general guardrails, here is a good page: [GoC Cloud Guardrails](https://github.com/canada-ca/cloud-guardrails/blob/master/EN/00_Applicable-Scope.md)

{{% notice type="danger" title="Data Classification" %}}
 It is important to note that if you have an "Experimental" or "Profile 1" space, you **cannot have protected information there**!
{{% /notice %}}

## Cloud-Guardrails

Here is a list of the implemented guardrails in our environment (see link above for more information):

### Biggest effect on your usage

#### ID1 - Protect user accounts and identities

We use your departmental accounts as guest accounts in our environment. This means you get our protection and your departmental protections (MFA, logging etc.).

This is a basic necessity and should only affect you if you cannot have MFA due to work related reasons. Please contact us if this is the case.

---

#### ID2 - Manage access

We limit access to a certain list of active users and delete their access once their experiment is over. Access is also disabled and account deleted after a certain amount of inactive days.

This can affect your usage when not using the environment for certain periods of time.

---

#### ID9 - Network Security Services *(Profile 3 only)*

Ensure that access to cloud storage services is protected and restricted to authorized security zones or networks, users, and services. This means that services and resources need to be accessed using secure tools and access methods. Concretely for you in our environment, this means that the data and packets coming from your computer need to go through our firewall and services need to be sitting in isolated (from the Internet that is) networks (VNETs or VPCs).

### Small effect on your usage

#### ID3 - Secure endpoints

To allow for users outside of government (contractors, students etc.), this guardrail is not fully enforced but logging is in place to ensure that the user is coming from a secure location within Canada. This should not noticeably affect your day-to-day usage.

---

#### ID5 - Data location *(Profile 3 only)*

All data at rest must be in Canada. For you, this means that all resources (EC2, VMs, databases, MS Foundry) must be in a datacenter located in Canada when the option is available. For Vertex and Bedrock (GCP and AWS's AI platforms), these options do not exist and so cannot be selected, thus it is fine to have things outside of Canada there (with global endpoints).

---

#### ID6 - Protection of data at rest *(Profile 3 only)*

Data at rest must be encrypted. This should be done by the CSP and settings you can set up yourself. Many services have encryption by default and many others have policies set up in profile 3 to ensure that that is the case.

---

#### ID7 - Protection of data in transit *(Profile 3 only)*

Data in transit must be encrypted. Most services are encrypted by default in our CSPs but other services which may not be have enforced encryption by our policies (whether through our firewall or not).

---

#### ID8 - Segment and separate *(Profile 3 only)*

This requirement is already met by the way we function (the assignment of subscriptions / accounts / projects). It is important to note that if you have access to multiple subscriptions / accounts / projects due to you having multiple projects, you should not share data or networking settings between them (even if they are both profile 3 spaces).

### No effect on your usage

#### ID4 - Enterprise monitoring account

This is a basic necessity from CCCS for all cloud spaces in government. This will not affect your usage in any way, that is, unless you're a spy.

---

#### ID10 - Cyber defense services

We use tools such as Microsoft Defender for Cloud to defend your environment and our internal tools from large attacks like DDOS and hacks. This should not affect your usage.

---

#### ID11 - Logging and monitoring

We use different tools to ensure proper logging of activities on our environment. This will not affect your usage.

---

#### ID12 - Configuration of cloud marketplaces

We have turned off third party marketplace items as to not go against GoC procurement and security rules. Most products used are first party items, and as such, this should not affect your usage.

---

#### ID13 - Plan for continuity

We have proper documentation in our internal systems as well as use the proper CSP accelerators in case of a full tenant reset. This will not affect your usage.
