---
title: Code Repositories
description: Details about how LaunchPad uses code repositories
translationKey: tutorials/code-repositories
draft: false
tags:
  - Git
  - ADO
  - GitHub
categories:
  - Tutorials
---

## Overview

Various code repository options exist depending on your workload and requirements.

Options include but are not limited to:

- **Azure DevOps**: use when data is required to be in Canada, work tracking and/or complex CI/CD pipelines are required and user access is small.
- **AWS CodeCommit**: use when data is required to be in Canada, you have limited GC users, you require a code repo and CI/CD,  and you do not require work tracking in a single product.
- **GitHub**: use for public open source projects with higher GC and Non-GC user counts.  Limited work tracking and data not guaranteed to be in Canada.  Not recommended for sensitive workloads.
- **GC Code**: use for a code repository when internal GC access is only required.  Limited work tracking and no CI/CD integrations to public cloud.

## Repository Options

Below is a list of various code repositories and work tracking tools that can be used.

### Azure DevOps

The science program has an [organization](https://dev.azure.com/science-program/) in Azure for work tracking, code repositories and automated pipelines.  Additional organizations can be created for clients on request.  Each organization includes five free basic licenses for development and work tracking in a private project and after that you are charged $5 per month per user.  Users with an MSDN account get a free basic license and are not counted towards the five accounts.  Stakeholders with read only access do not require a license as well as any users in a public open source project.  DevOps allows for all data to remain in Canada.  

Work tracking can follow traditional waterfall, Agile or Scrum methodologies.  

See the [user guide features](https://docs.microsoft.com/en-us/azure/devops/user-guide/alm-devops-features?view=azure-devops) for details on what DevOps offers.

For specific guidance see the [Science Program Azure DevOps](https://docs.scienceprogram.cloud/en/HowTos/Azure_DevOps) page.

### AWS CodeCommit

AWS CodeCommit is a highly scalable, managed source control service that hosts private Git repositories. You simply create a repository to store your code. There is no hardware to provision and scale or software to install, configure, and operate. CodeCommit helps you collaborate on code with pull requests, branching, and merging. You can implement workflows that include code reviews and feedback by default, and control who can make changes to specific branches.

Repos can be created in the clients AWS account and Canadian region.

AWS CodeCommit does not include work tracking or issues tracking.  You have to use another product like [AWS CodeStar](https://aws.amazon.com/codestar/?nc=bc&pg=pr) powered by Atlassian JIRA Software.

### GitHub

[GitHub](https://github.com/) is one of the most well-known open-source project management tools.  It offers both public and private repositories however you cannot specify where they reside.  Work tracking can be done in github using issues but it is limited and does not include any development methodology.  Data is not guaranteed in Canada.  Recommended for open source projects or public reusable modules.  Not recommended for sensitive projects.

Advanced features such as code reviewers, pages and wikis, and storage over 500MB are additional costs.  See the [Github Licensing page](https://github.com/pricing) for more details.

### GCCode

GCCode is a GC private repo hosted in the SSC datacenter based on [GitLab](https://about.gitlab.com/).  Work tracking is limited but can be done through issue tracking.  No public access or public integrations are allowed which makes it hard for collaboration and Infrastructure as Code deployments.  Requires the user to be on the VPN or in the office.

## Template Repositories

The following is a list of public repositories with reusable modules that can be use for code deployments.

- [Azure ARM Templates](https://github.com/canada-ca/accelerators_accelerateurs-azure/): Common ARM templates that can be used in Azure deployments.  This repo is not maintained anymore as many moved over to terraform for the simple syntax and state.
- [Azure Terraform Templates](https://github.com/canada-ca-azure-templates):  Common Terraform templates maintained by the GC.
- [GC Cloud Enablement](https://gccode.ssc-spc.gc.ca/GCCloudEnablement):  This is a GCcode repository with common modules and documentation for various environments.  You must be on the VPN or in the office and register for an account for this to work.

The following is a list of cloud accelerator frameworks that can be used to meet a CCCS Cloud Medium profile.

- [Azure Landing Zones for Canadian Public Sector](https://github.com/Azure/CanadaPubSecALZ): This template is meant to be used as a based deployment in Azure to meet a CCCS Cloud medium profile.  The solution deploys common logging solutions, security solutions, policies and more.  This is deployed into the 163Oxygen Science tenant.
- [Azure CAF Framework Terraform Module](https://github.com/Azure/terraform-azurerm-caf-enterprise-scale):  This template is similar to the one above but is not GC specific.   It follows the Microsoft Cloud Adoption Framework and is configurable for various scenarios.  A modified version of this template is used by SSC in the 163gc CIO tenant.
-  [AWS Secure Environment Accelerator:](https://github.com/aws-samples/aws-secure-environment-accelerator) The AWS Accelerator is a tool designed to help deploy and operate secure multi-account, multi-region AWS environments on an ongoing basis.  This template is used as a base deployment on AWS to meet a CCCS Cloud Medium profile.  This template is used in the 163Hydrogen Science tenant.
- [GC Accelerators for Google](https://github.com/canada-ca/accelerators_accelerateurs-gcp):  This repository will host the required tooling for deploying a basic GCP environment to be conformant with the the Government of Canada's [Cloud Guardrails Framework](https://github.com/canada-ca/cloud-guardrails).
