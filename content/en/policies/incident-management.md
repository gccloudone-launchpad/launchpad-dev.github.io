---
title: Incident Management
description: "How we handle incidents"
translationKey: policy/incident-management
draft: false
tags: 
  - Policy
categories: 
  - Policy
---

{{< translation-note >}}

## Purpose

Incident response includes planning for and actively managing incidents that can prevent an enterprise from leveraging its assets to meet its goals. Most commonly this takes the form of unauthorized access into a computer system, physical security intrusions, or if a natural disaster occurs. The *Incident Response Policy* provides the processes and procedures for ensuring incidents are properly handled with as little impact to the enterprise as possible, and to begin the recovery plan. This policy applies to all departments and all assets connected to the enterprise network.

## Responsibility

- The LaunchPad team is responsible for managing all incident response functions.
  - While all IT staff are required to follow the written incident response plan, real world deviations are expected and must be handled gracefully. Third-party organizations involved in the incident response process must be managed by the incident manager.
- Users are responsible for reporting incidents that they are aware of to the appropriate business unit or personnel as specified in the incident reporting process. Users are responsible for attending training for recognizing and reporting incidents within the enterprise.

## Policy

### Plan

1. IT must develop and maintain a written incident response plan.
    - This process must be documented and approved.
    - This plan must include a process for responding to incidents.
    - At a minimum, the incident response process must be reviewed on an annual basis or following significant changes within the enterprise.
        - This review may also occur following an incident or tabletop exercise.
    - An incident manager and backup incident manager must be specifically identified by name within the plan.
        - If an external party is the incident manager, then one internal individual must be specified to oversee the response process.
        - Contact information must be recorded in the incident response plan.
    - Any parties that need to be made aware of a security incident must be documented.
    - The plan must address any regulatory or other compliance requirements.
    - The plan must address communications.
2. IT must develop and maintain a written process for users to report incidents.
    - This process must include approved methods for reporting incidents including:
        - Primary and secondary methods for reporting.
        - Specific recipients to receive incident reports.
        - Any minimum information needed.
        - Timeframes for reporting incidents.
    - At a minimum, the incident reporting process must be reviewed on an annual basis or following significant changes within the enterprise.

### Detect

1. IT must review the detection results and action appropriately.
    - Automatic detection will be done with the cloud Security tools (Sentinel, AWS SecurityHub, AWS GuardDuty, AWS Inspector, Azure Defender).

### Respond

1. IT must communicate with the client any incidents that impact them within 1 business day.
2. IT must document all resolutions as part of the ticket.

### Update

1. At a minimum, the incident response and reporting processes must be reviewed on an annual basis or following significant changes within the enterprise.

#### Policy Review Cycle

This policy will be reviewed annually with the process and procedures.

#### Revision History

This policy will be reviewed annually.  
Each time this document is updated, this table should be updated.  

| Date | Name | Description |
| ---- | ---- | ---- |
| 2023-08-02 | John Nephin | Initial Version |
{ class="full-width" } <!-- markdownlint-disable-line MD056 MD055 -->
