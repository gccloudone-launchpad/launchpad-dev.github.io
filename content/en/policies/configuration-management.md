---
title: Configuration Management
description: "Ensures that Information Technology (IT) resources are inventoried and configured in compliance with IT security policies, standards, and procedures."
translationKey: policy/configuration-management
draft: false
tags: 
  - Policy
categories: 
  - Policy
---

{{< translation-note >}}

## Purpose

To ensure that Information Technology (IT) resources are inventoried and configured in compliance with IT security policies, standards, and procedures.

## Reference

National Institute of Standards and Technology (NIST) Special Publication (SP): NIST SP 800-53a – Configuration Management (CM).

## Policy

This policy is applicable to the baseline configurations Science Program Cloud tenants and any pathfinder work or solutions we work directly on.

This policy will be reviewed yearly and updated if required.

### Baseline Configuration

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Develop, document, and maintain under configuration control, a current baseline configuration of the cloud environment or information systems.
2. Review and update the baseline configuration of the cloud environment or information system quarterly.
3. Review and update the baseline configuration of the cloud environment or information system when required as an integral part of information system component installations and upgrades.
4. Retain three previous versions of baseline configurations of the cloud environment or information systems to support rollback.

### Configuration Change Control

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Determine the types of changes to the cloud environment or information system that are configuration-controlled.
2. Review proposed configuration-controlled changes to the cloud environment or information system and approve or disapprove such changes with explicit consideration for security impact analyses.
3. Document configuration change decisions associated with the cloud environment or information system.
4. Implement approved configuration-controlled changes to the cloud environment or information system.
5. Retain records of configuration-controlled changes to the cloud environment or information system.
6. Audit and review activities associated with configuration-controlled changes to the cloud environment or information system.
7. Coordinate and provide oversight for configuration change control activities through Microsoft Teams and code repository pull requests.
8. Test, validate, and document changes to the cloud environment or information system before implementing the changes on the operational system.

### Security Impact Analysis

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Analyze changes to the cloud environment or information system to determine potential security impacts prior to change implementation.

### Access Restrictions for Change

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Define, document, approve, and enforce logical access restrictions associated with changes to the cloud environment or information system.

### Configuration Settings

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Establish and document configuration settings for cloud environment or information technology products employed within the environment using cloud polices that reflect the most restrictive mode consistent with operational requirements.
2. Implement the configuration settings.
3. Identify, document, and approve any deviations from established configuration settings or polices based on operational requirements.
4. Monitor and control changes to the configuration settings in accordance with policies and procedures.

### Least Functionality

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Configure the cloud environment or information system to provide only essential capabilities.
2. Review the cloud environment or information system quarterly to identify unnecessary and/or non-secure functions, ports, protocols, and services.
3. Disable functions, ports, protocols, and services within the cloud environment or information system deemed to be unnecessary and/or non-secure.
4. Prevent program execution in accordance with policies regarding software program usage and restrictions and rules authorizing the terms and conditions of software program usage.
5. Identify software programs not authorized to execute on the cloud environment or information systems.
6. Employ an allow-all, deny-by-exception policy to prohibit the execution of unauthorized software programs on the information system.
7. Employ a deny-all 3rd party marketplace items, approve-by-exception policy for the cloud environment.  This includes controlling a private marketplace that allows only approved software following the [Marketplace Approval Process](https://docs.scienceprogram.cloud/en/LegoTeam/CloudMarketplaceItemApprovalRequest).
8. Review and update the list of unauthorized and authorized software programs annually.

### Cloud Environment and Information System Component Inventory

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Document any components that are not already tracked as part of the cloud portal (ex: software installs).
2. Update the inventory of components as an integral part of component installations, removals, and information system updates.
3. Employ automated mechanisms to detect the presence of unauthorized hardware, software, and firmware components within the information system.
4. Take the following actions when unauthorized components are detected and verified:

- Disable network access by such components, or Isolate the components and notifies the security operator and system owner.
- Move the subscription to the quarantine management group
- Rebuild any virtual machines or containers that are deemed compromised.
- Verify that all components within the authorization boundary of the cloud environment or information system are not duplicated in other information system component inventories.

### Configuration Management Plan

SSC Science Program Collaboration and Emerging Technologies team shall develop, document, and implement a configuration management plan for the cloud environment or information system that:

1. Addresses roles, responsibilities, and configuration management processes and procedures.
2. Establishes a process for identifying configuration items throughout the system development life cycle and for managing the configuration of the configuration items.
3. Defines the configuration items for the information system and places the configuration items under configuration management.
4. Protects the configuration management plan from unauthorized disclosure and modification.

### Software Usage Restrictions

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Use software and associated documentation in accordance with contract agreements and copyright laws.
2. Track the use of software and associated documentation protected by quantity licenses to control copying and distribution.
3. Control and document the use of peer-to-peer file sharing technology to ensure that this capability is not used for the unauthorized distribution, display, performance, or reproduction of copyrighted work.
4. Ensure all cloud components and information systems are used for government use.

### User-Installed Software

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Establish policies governing the installation of software by users.
2. Enforce software installation policies through controlling privileged access and blocking the execution of files using policy applied by directory service and/or application whitelisting.
3. Monitor policy compliance on a monthly basis.

## Compliance

Employees who violate this policy may be subject to appropriate disciplinary action up to and including discharge as well as both civil and criminal penalties. Non-employees, including, without limitation, contractors, may be subject to termination of contractual agreements, denial of access to IT resources, and other actions as well as both civil and criminal penalties.

## Policy Exceptions

Requests for exceptions to this policy shall be reviewed by the SSC Science Program Collaboration and Emerging Technologies team and the Director. Departments requesting exceptions shall provide such requests to the SSC Science Program Collaboration and Emerging Technologies team in writing. The request should specifically state the scope of the exception along with justification for granting the exception, the potential impact or risk attendant upon granting the exception, risk mitigation measures to be undertaken by the IT Department, initiatives, actions and a time-frame for achieving the minimum compliance level with the policies set forth herein. The SSC Science Program Collaboration and Emerging Technologies team shall review such requests; confer with the requesting department.

The table below lists current exemptions:

| **Name** | **Description** | **Rational** | **Date of exemption** |
| --- | --- | --- | --- |
| Experimental / Sandbox work | Any work that is done in the experimental / sandbox space | This work is meant for short lived software trials, learning cloud environments and business transformation so full documentation and monitoring may not be required.  Private marketplace restrictions still apply for contracting restrictions. | 2022/10/03 |

## Responsible Department

SSC Science Program Collaboration and Emerging Technologies

## Date Issued/Date Reviewed

| task | date |
| ---- | ---- |
| Issued | 2022/04/06 |
| Reviewed | 2022/04/06 |

## Change Log

| Version | Date | Author | Description of Change |
| --- | --- | --- | --- |
| 1.0 | 2022/04/06 | John Nephin | Initial draft reviewed and approved with team |
| 1.1 | 2023-07-24 | John Nephin | Added Change Log section |
{ class="full-width" } <!-- markdownlint-disable-line MD056 MD055 -->
