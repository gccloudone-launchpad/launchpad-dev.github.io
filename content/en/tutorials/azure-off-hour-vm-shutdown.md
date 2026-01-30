---
title: Azure - Off Hours VM Shutdown
description: Information about the tenant-wide policy to shutdown VMs during off-hours
translationKey: tutorials/azure-off-hours-vm-shutdown
draft: false
tags:
  - Azure
  - VM
  - Automation
categories:
  - Tutorials
---

## Description

In an effort to keep compute costs low and benefit from the elasticity provided by the cloud, we have instituted a function that runs daily after hours to shut down Virtual Machines (VMs).

### Rationale

The greatest cost item in the 163Oxygen Azure tenant are VMs, as their cost keeps accruing when they are running, regardless whether they are heavily utilized or not.

By shutting down VMs based on the schedule below, we can reduce the weekly runtime of a VM from 168 hours to 80 hours, resulting in a more than 50% savings.  

## Details

**Every day at 03:00 UTC (23:00 EDT or 22:00 EST)**  
All running VMs will will be shutdown, unless they have the "opt-out" [tag](#opting-out) configured. VMs that weren't running at the timem, or have the tag configured, are unaffected.

**Every Monday to Friday at 10:00 UTC (06:00 EDT or 05:00 EST)**  
VMs shutdown the previous weekday by the automation will be powered back on. On Monday, VMs from the previous Friday's shutdown will be powered on.

### Opting Out

In order to have a machine not shutdown as mentioned above, add a *Tag* to the VM with the name of `vmkeepon` and a value of `true`.

The image below shows an example of that tag being applied.

![View of Azure Portal showing the 'opt-out' tag on a VM](/images/en/tutorials_azure-auto-shutdown_1-tag.png "View of Azure Portal showing the 'opt-out' tag on a VM")

## Notes

- This will only reduce the compute costs of the VMs itself (i.e. assigned CPU and RAM).
- Storage costs are not affected and always accrue based on the size of disks that are *provisioned*, regardless of their used capacity, or attatement state.
- Currently we are only targeting "regular" VMs.
