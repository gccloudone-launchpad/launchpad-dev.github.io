---
title: Authentication and Authoriziation
description: ""
translationKey: policy/authentication-and-authorization
draft: false
tags: 
  - Policy
categories: 
  - Policy
---

{{< translation-note >}}

## Purpose

To ensure that only properly identified and authenticated users and devices are granted access to Information Technology (IT) resources in compliance with IT security policies, standards, and procedures.

## Reference

National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53a – Identification and Authentication (IA), NIST SP 800-12, NIST SP 800-63, NIST SP 800-73, NIST SP 800-76, NIST SP 800-78, NIST SP 800-100, NIST SP 800-116;

Homeland Security Presidential Directive (HSPD) 12 Policy for a Common Identification Standard for Federal Employees and Contractors; Federal Information Processing Standards (FIPS): FIPS 201, FIPS 140

## Policy

This policy is applicable to all departments and users of IT resources and assets.  It will be reviewed yearly.

### Identification and Authentication

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Ensure that information systems uniquely identify and authenticate users or processes acting on behalf of users.
2. Ensure that information systems implement multifactor authentication for network access to privileged accounts.
3. Ensure that information systems implement multifactor authentication for network access to non-privileged accounts.
4. Ensure that information systems implement multifactor authentication for local access to privileged accounts.
5. Ensure that information systems implement replay-resistant authentication mechanisms for network access to privileged accounts.
6. Ensure that information systems implement multifactor authentication for remote access to privileged and non-privileged accounts such that one of the factors is provided by a device separate from the system gaining access and the device utilizes a cryptographic strength mechanisms that protects the primary authentication token (secret key, private key or one-time password) against compromise by protocol threats including: eavesdropper, replay, online guessing, verifier impersonation and man-in-the-middle attacks.
7. Ensure that information systems accept and electronically verify Personal Identity Verification (PIV) credentials.

### Device Identification and Authentication

No policy requirement is defined for device authentication and authorization as users can be a mix of GC and Non-GC users and it would be impossible to manage it.

### Identifier Management

SSC Science Program Collaboration and Emerging Technologies team team, through department information systems owners, shall:

1. Ensure that the SSC Science Program Collaboration and Emerging Technologies Ops team manages information system identifiers by receiving authorization from Pathfinder owner to assign an individual, group, role, or device identifier.
2. Select an identifier that identifies an individual, group, or role.
3. Assign the identifier to the intended individual, group, or role.
4. Prevent reuse of identifiers for 90 days.
5. Disable the identifier after 30 days of inactivity.

### Authenticator Management

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Manage information system authenticators by verifying, as part of the initial authenticator distribution, the identity of the individual, group, role, or device receiving the authenticator.
2. Establish initial authenticator content for authenticators defined by the organization.
3. Ensure that authenticators have sufficient strength of mechanism for their intended use.
4. Establish and implement administrative procedures for initial authenticator distribution, for lost/compromised or damaged authenticators, and for revoking authenticators.
5. Change default content of authenticators prior to information system installation.
6. Establish minimum and maximum lifetime restrictions and reuse conditions for authenticators.
7. Change/refresh MFA authenticator keys every 30 seconds.
8. Protect authenticator content from unauthorized disclosure and modification.
9. Require individuals and devices to implement specific security safeguards to protect authenticators.
10. Change authenticators for group/role accounts when membership to those account changes.
11. Follow [SSC Password Guidance](https://www.canada.ca/en/government/system/digital-government/online-security-privacy/password-guidance.html).
12. Ensure that information system, _for PKI-based authentication,_ validates certifications by constructing and verifying a certification path to an accepted trust anchor including checking certificate status information.
13. Enforce authorized access to the corresponding private key.
14. Map the authenticated identity to the account of the individual or group.

### Authenticator Feedback

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Ensure that information systems obscure feedback of authentication information during the authentication process to protect the information from possible exploitation/use by unauthorized individuals.

### Cryptographic Module Authentication

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Ensure that information systems implement mechanisms for authentication to a cryptographic module that meet the requirements of applicable state and federal laws, directives, policies, regulations, standards, and guidance for such authentication.

### Non-Entity User Identification and Authentication

SSC Science Program Collaboration and Emerging Technologies team shall:

1. Ensure that information systems uniquely identify and authenticate non-entity users or processes acting on behalf of non-entity users.

## Compliance

Employees who violate this policy may be subject to appropriate disciplinary action up to and including discharge as well as both civil and criminal penalties. Non-employees, including, without limitation, contractors, may be subject to termination of contractual agreements, denial of access to IT resources, and other actions as well as both civil and criminal penalties.

## Policy Exceptions

Requests for exceptions to this policy shall be reviewed by the SSC Science Program Collaboration and Emerging Technologies team and the Director. Departments requesting exceptions shall provide such requests to the SSC Science Program Collaboration and Emerging Technologies team in writing. The request should specifically state the scope of the exception along with justification for granting the exception, the potential impact or risk attendant upon granting the exception, risk mitigation measures to be undertaken by the SSC Science Program Collaboration and Emerging Technologies team team, initiatives, actions and a time-frame for achieving the minimum compliance level with the policies set forth herein. The SSC Science Program Collaboration and Emerging Technologies team shall review such requests; confer with the requesting department.

## Responsible Department

SSC Science Program Collaboration and Emerging Technologies team

## Date Issued/Date Reviewed

| Task | Date |
| ----- | ----- |
| Issued | 10/03/2022 |
| Reviewed | 28/02/2025 |
