---
title: AWS - Get Connected
description: How to get connected to AWS
translationKey: tutorials/aws-get-connected
draft: false
tags:
  - AWS
  - IAM
  - CLI
categories:
  - Tutorials
  - AWS
---

## Web Browser

Once you've received, and accepted, the invitation to the GCCO LaunchPad Azure tenant (163Oxygen), you'll need to visit the AWS login page to get started.

The URL is: [https://gcscience.awsapps.com/start#](https://gcscience.awsapps.com/start#)

1. You'll be presented with a list of all the AWS accounts (the main "container" that we delegate to each of our experiments) that you have access to
2. If you click that, you'll see the role(s) you have available on that particular account; likely one called `PowerSysadmin`
3. Click on the role you'd like to use, and a new window/tab will open to that role in that account.

### Notes

- AWS unfortunately doesn't offer many **global** views, so you'll want to pay special attention to the region dropdown in the top right
  - Typically, you can only see instances/resources in the currently selected region
  - AWS presently only has one region in Canada "Canada (Central)", or `ca-central-1`, so the easiest solution here is to try and keep everything there
- The **AWS access portal** page is intolerant of you openning multiple accounts at the same time
  - Doing so will render inoperable any other AWS tabs you have open prior to doing so
  - Once inside the management console, open as many windows/tabs as you like, so long as you don't start again from the *AWS access portal* page
- If you need to create Roles, you're welcome to do so, however you will need to attach a Boundary Policy.
  - You can see the full details about that [here]({{< relref path="aws-application-roles.md" >}})
  
## Command-line (CLI)

1. In the terminal type in `aws configure sso`
2. This will then ask you to put in the following info:
    - SSO session name: `gcco-launchpad`
    - SSO start URL: `https://gcscience.awsapps.com/start#/`
    - SSO region: `ca-central-1`
    - SSO registration scopes: `sso:account:access`
3. Visit the URL, and enter the code provided
4. Follow the steps to authenticate yourself, and authorize the use of `botocore-client-ssc-sp`
5. Once authenticated select the account and role you'd like to use
    1. If more than one account is visible, use the arrows to nagivate up/down, and hit Enter when you've got the right one
    2. If more than one role is visible, use the arrows to navigate up/down, and hit Enter when you've got the right one
6. Enter the *CLI default client region*, as `ca-central-1`
7. Enter the *CLI default output format*, as `json`
8. For the *CLI profile name*, you can leave the default (which is `<Role>-<AccountNumber>` by default), or specify one of your own

### Default Profile

You can force the CLI to use a given profile (Role/Account pair) by setting an environment variable, or manually on the command-line at each execution.

Profile name is whatever you chose in step 8 above.

- **Environment Variable**  
  Linux: `export AWS_DEFAULT_PROFILE=<ProfileName>`  
  Windows CMD: `set AWS_DEFAULT_PROFILE=<ProfileName>`  
  PowerShell: `$env:AWS_DEFAULT_PROFILE = '<ProfileName>'`  
- **At Execution**  
  Append `--profile <ProfileName>` to each commadn you run
