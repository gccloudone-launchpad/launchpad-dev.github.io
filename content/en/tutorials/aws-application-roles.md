---
title: AWS - IAM Roles
description: "Creating custom IAM roles with Boundary Policies in AWS"
translationKey: tutorials/aws-application-roles
draft: false
tags:
  - AWS
  - IAM
categories:
  - Tutorials
---

Our clients are allowed to create custom application roles / IAM roles, but to prevent privilege escalation, a permission boundary called `SSCCustomRoleBoundaryPolicy` is required.  The combination of Permission Boundaries and Service Control Policies is an advanced feature that limits the maximum permissions that a role can grant to an IAM entity. An entity's permissions boundary allows it to perform only the actions that are allowed by both its identity-based policies and its permissions boundaries.  

In almost all cases, when creating a new application role or IAM role in AWS you will need to attach a boundary policy. These policies are maintained by the CIE (LaunchPad) Operations team.

<gcds-alert alert-role="info" container="full" heading="Note"
    hide-close-btn="true" hide-role-icon="false" is-fixed="false" class="hydrated mb-400">
    <gcds-text character-limit=false>
    In the past we used a policy called `SSCDeveloperBoundaryPolicy`  (and `SSCPowerUserBoundaryPolicy`) and although you might see this role in some places, it should not be used for any new roles.</gcds-text>
    <gcds-text character-limit=false>
    Fortunately `SSCCustomRoleBoundaryPolicy` is a drop-in replacement for `SSCDeveloperBoundaryPolicy`.</gcds-text>
</gcds-alert>

There are two main boundary policies that are provisioned to our accounts and should be used when creating custom roles:

- `SSCPowerSysadminBoundaryPolicy`  
  Is applied to user accounts for actual users, to set appropriate policies for the PowerSysadmin role. This policy can not be used for custom roles.
- `SSCCustomRoleBoundaryPolicy`  
  Is the policy that must be set on custom IAM roles.

If using the web portal to create a new IAM role, you can attach the boundary policy using the __Set permissions boundary - *optional*__ box, clicking the __Use a permissions boundary \[...\]__ option, searching for __SSC__, and finally select the `SSCCustomRoleBoundaryPolicy` policy:

!['Set Permissions Boundary' UI element](/images/en/tutorials_aws-applicaton-roles_1-ui-element.jpg "'Set Permissions Boundary' UI element")
