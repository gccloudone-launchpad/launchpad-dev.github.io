---
title: Audit and Accountability
description: "sDfasdfasdf"
translationKey: policy/audit-and-accoutability
draft: false
tags: 
  - Policy
categories: 
  - Policy
---

{{< translation-note >}}

## Purpose

To ensure that Information Technology (IT) resources and information systems are established with effective security controls and control enhancements that reflect applicable federal and state laws, Executive Orders, directives, regulations, policies, standards, and guidance.

## References

- [NIST SP 800-53a](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) – Assessing Security and Privacy Controls in Information Systems and Organizations
- [NIST SP 800-12](https://csrc.nist.gov/pubs/sp/800/12/r1/final) - An Introduction to Information Security
- [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final) - Guide to Computer Security Log Management
- [NIST SP 800-100](https://csrc.nist.gov/pubs/sp/800/100/upd1/final) - Information Security Handbook: A Guide for Managers

## Policy

This policy is applicable to all LaunchPad cloud environments.

### Audit Events

The information systems owners, in cooperation with audits and IT, shall:

- Determine that the information system is capable of auditing the following events:
  - Changes to administration roles
  - All actions taken by a user
  - Login actions with secure accounts (ex: breakglass accounts, root accounts)
  - Network and security changes to core infrastructure
  - Changes and/or access to logs
  - Changes and/or access to auditing systems
  - Sign-in failures
  - Environment policy changes
- Coordinate the security audit function with other organizational entities requiring audit (ex: Canadian Cyber Center for Security)
- Provide a rationale for why the auditable events are deemed to be adequate to support after-the-fact investigations of security incidents
- Determine that the following events are to be audited within the information system:
  - Changes to administration roles
  - All actions taken by a user
  - Login actions with secure accounts (ex: breakglass accounts, root accounts)
  - Network and security changes to core infrastructure
  - Changes and/or access to logs
  - Changes and/or access to auditing systems
  - Sign-in failures
  - Environment policy changes

### Reviews and Updates

The LaunchPad Operations team shall review and update the audited events yearly.

### Content of Audit Records

The information system shall generate audit records containing information that establishes what type of event occurred, when the event occurred, where the event occurred, the source of the event, the outcome of the event, and the identity of any individuals or subjects associated with the event.

### Audit Storage Capacity Planning

The information owner shall ensure audit record storage capacity is allocated when required and that it will meet the retention period.

### Transfer to Alternate Storage

The information system shall off-load audit records daily onto a different system or media than the system being audited.

### Response to Audit Processing Failures

The LaunchPad Operations team shall:

- Review and document why the audit is failing
- Fix any issues with logging and auditing

### Audit Storage Capacity Monitoring

The information system shall provide a warning to the LaunchPad Operations team within 24 hours of when allocated audit record storage volume reaches 75% of repository maximum audit record storage capacity.

### Real-Time Alerts

The information system shall provide an alert in 2 hours to the LaunchPad Operations teams when the following audit failure events occur:

- Login actions with secure accounts (ex: breakglass accounts, root accounts)
- Network and security changes to core infrastructure
- Changes to security logs
- Changes to auditing system rules
- Environment policy changes
- Breach by a known threat group

### Configurable Traffic Volume Thresholds

The information system shall enforce configurable network communications traffic volume thresholds reflecting limits on auditing capacity and rejects or delays network traffic above those thresholds.

### Shutdown on Failure

The information system shall invoke a partial system shutdown in the event of any of the audit failures below, unless an alternate audit capability exists.

- Login actions with secure accounts (ex: breakglass accounts, root accounts)
- Network and security changes to core infrastructure
- Changes to security logs
- Changes to auditing system rules
- Environment policy changes
- Breach by a known threat group

### Audit Review, Analysis and Reporting

The information system owner shall:

- Review and analyze information system audit records weekly for indications of any inappropriate or unusual activity.
- Report findings to LaunchPad Operations, and Management teams.

### Process Integration

The information system owners shall ensure automated mechanisms are employed to integrate audit review, analysis, and reporting processes to support organizational processes for investigation and response to suspicious activities.

### Audit Repositories

The information system owner shall ensure analysis and correlation of audit records across different repositories to gain situational awareness.

### Audit Reduction and Report Generation

The information system shall provide an audit reduction and report generation capability that:

- Supports on-demand audit review, analysis, and reporting requirements and after-the-fact.
- Does not alter the original content or time ordering of audit records.

### Time Stamps

The information system shall:

- Use internal system clocks to generate time stamps for audit records.
- Record time stamps for audit records that can be mapped to Coordinated Universal Time (UTC) or Greenwich Mean Time (GMT) and meets one second granularity of time measurement or lower.

### Synchronization With Authoritative Time Source

Timestamps will rely on the cloud provider time sync services which uses a fleet of redundant satellite-connected and atomic clocks in each Region to deliver a highly accurate reference clock.  Using the cloud providers service will ensure that all timestamps match even for services where it cannot be set.

### Protection of Audit Information

The information system shall protect audit information and audit tools from unauthorized access, modification, and deletion.

### Access by Subset of Privileged Users

The organization shall authorize access to management of audit functionality to only to LaunchPad Operations, and Security teams.

### Audit Record Retention

The information system owners shall retain audit records in accordance to Treasury Board Secretariat's (TBS) [Event Logging Guidance](https://www.canada.ca/en/government/system/digital-government/online-security-privacy/event-logging-guidance.html) and [Government of Canada Security Control Profile for Cloud-based GC Services](https://www.canada.ca/en/government/system/digital-government/modern-emerging-technologies/cloud-services/government-canada-security-control-profile-cloud-based-it-services.html) documents.

- CSP: Time period = \[**at least 90 days**\]
- GC: Time period = \[**events and logs at least 3 months online and at least 6 months in storage; events and logs associated with a security incident for at least 2 years**\]

### Long-Term Retrieval Capability

The information system owners shall employ query and archive retrieval mechanisms to ensure that long-term audit records generated by the information system can be retrieved.

### Audit Generation

The information system shall:

- Provide audit record generation capability for the auditable events as defined above.
- Allow LaunchPad Operations team to select which auditable events are to be audited by specific components of the information system.

### Standardized Formats

The information system shall produce a system-wide (logical or physical) audit trail composed of audit records in a standardized format.

### Changes by Authorized Individuals

The information system shall provide the capability for the LaunchPad Operations team to change the auditing performed on the cloud environments based on agreed upon values.

## Procedures

The following should be performed at least every 90 days:

1. Rotate account access keys
2. Review AWS IaM users and groups removing any people that are not required.
3. Review AWS IaM roles and permission sets deleting those that are no longer required.
4. Review AWS EC2 Security groups, key pairs, running instances, and instance sizes.
   - Adjust, turn off, or remove as required.
5. Review Azure group synchronization.
6. Review AWS Service Control Policies and adjust as required.
7. Review AWS LZA repository for updates and remediate as required.

The following should be done at least every 7 days:

1. Review SecurityHub, AWS Config, GuardDuty, CloudTrail and Defender for Cloud findings and remediate as required.

The following should be done daily:

1. Review Microsoft Sentinel for incidents and investigate when required. See the {{< needs-review >}}[Sentinel incident handling](/Azure/Sentinel/azure-sentinel "Sentinel incident handling" ) section{{< /needs-review >}}.
2. Review any alerts coming into the operations mailbox and remediate as required.

{{< needs-review >}}
See [AWS security audit guidelines](https://docs.aws.amazon.com/general/latest/gr/aws-security-audit-guide.html) and [AWS Operational Best Practices](https://docs.aws.amazon.com/audit-manager/latest/userguide/OBP.html) for additional tips and procedures.
{{< /needs-review >}}

## Compliance

Employees who violate this policy may be subject to appropriate disciplinary action up to and including discharge as well as both civil and criminal penalties. Non-employees, including, without limitation, contractors, may be subject to termination of contractual agreements, denial of access to IT resources, and other actions as well as both civil and criminal penalties.

### Policy Exceptions

Requests for exceptions to this policy shall be reviewed and approved by the LaunchPad Management team and its Director.
