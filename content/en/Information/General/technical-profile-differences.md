---
description: Technical differences between data profiles
title: Technical differences per data profiles
translationKey: technical-data-profiles
draft: false
---

This page describes the technical differences and limitations you'll face depending on which profile you've chosen. This can help you as a reminder of the technical limitations and how to fix them. It can also help you choosing wether or not its easier sanitizing your data versus using a profile 3.

## Profile 1 (Unclassified / Experimental) particulars

This profile is the level we've always offered. It is designed to use only unclassified data inside. It also means it has the least amount of restrictions.  

Here is a list of the security restrictions which are in effect in all our profiles, which include Profile 1 of course:

### Azure

- **Restriction on SSH (22) and RDP (3389):** These are the most commonly targeted ports on the internet. As a result, these ports cannot be left open to the public internet in our space. If you deploy a VM with either port publicly accessible, you will receive an email notification. If the issue is not resolved within 24 hours, access will be restricted to your own IP address.

#### What all this means for you

You should not see a real difference between an out of the box Azure space and our space other than having enforced MFA, using you GC email and having additional security in place.

## Profile 3a (Sensitive / Protected B)

This profile is designed for sensitive workloads and can contain up to protected B data. It is not to be used for any workload and work in our environment's profile 3 region can be more complex and has more restrictions. It is recommended to have some knowledge of the cloud prior to taking on a project in our profile 3 space.

### What does this mean for you

#### Azure

- Accessing VMs is through our provided bastion (no SSH or RDP ports open).
- Resources sit in provided VNETs that are connected through a general VNET behind our provided firewall.
- Opening ports or IPs to the Internet needs policy removal after approval by our team.

#### AWS

- Oups, this section needs to be filled.

#### GCP

> Our GCP environment is not yet approved for profile 3 usage. Its in the works.
