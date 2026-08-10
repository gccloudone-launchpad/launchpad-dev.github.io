---
title: Service Roadmap
description: "Services Launchpad is developing, and might offer at a future date."
translationKey: services/roadmap
draft: false
tags: []
categories: []
---


{{% notice type="warning" title="Work in Progress" %}}
The services described on this page are works in progress. Their availability, design, and scope are subject to change at any time.
{{% /notice %}}

LaunchPad is continually looking at ways to better support public servants exploring cloud technologies. The services below reflect directions we are considering for the future, ranging from early ideas to concepts we are actively refining. None are generally available today. If any of these services could benefit your organization, please [contact us]({{< globallink "about-us/contact-us" >}}) to discuss your needs and help shape their development.

## Advisory

LaunchPad's core offering currently bundles a cloud environment (an Azure subscription, AWS account, or GCP project) with advisory services that help clients navigate available cloud services and use them effectively. However, not every organization that could benefit from this expertise requires a space of its own. Some clients already have access to a cloud environment through their department, another cloud broker, or an existing cloud-based workload, and simply require experienced guidance to make effective use of it.

A standalone Advisory service would separate this expertise from the sandbox offering. Clients would provide their own cloud environment, and LaunchPad would supply the additional capacity, guidance, and hands-on advice required to help them navigate cloud services, without provisioning or managing infrastructure in LaunchPad tenants. This would maintain LaunchPad in a supporting role rather than as a managed service provider: we would not stand up or operate a client's environment, but would provide access to our multi-cloud experience to help clients make informed decisions. Consistent with the rest of LaunchPad, this service would focus on goal-based, short-term, experimental, and innovative work, up to Profile 3, rather than ongoing production support.

Advisory would likely operate on a cost-recovery basis, billed against a defined number of hours at an hourly rate, rather than being centrally funded as smaller Managed experiments can be. This would help ensure the service remains sustainable and available to clients with a genuine, scoped need for expertise, while complementing the other services LaunchPad provides within the broader GCCO landscape as a source of hands-on cloud expertise.

## Persistent Innovation Environments (PIE)

PIE would offer clients short-term, high-power compute capacity without provisioning a full cloud environment. Rather than receiving a subscription, account, or project, clients would be granted shell access to a virtual machine, along with storage and database resources if required, for a limited period to perform large-scale computing tasks. Once that period ends and the work is complete, the associated resources would be destroyed, keeping the service tightly time-boxed. This distinguishes PIE from LaunchPad's other offerings, and importantly, from High-Performance Computing (HPC). It is not intended to replace dedicated HPC infrastructure, but to provide rapidly-provisioned, cost-effective short bursts of compute capacity where needed.

This service would be intended for clients who already understand their technical requirements and simply require more computing power than their laptops or departmental infrastructure can quickly provide, such as genomic processing or AI/ML training and inference workloads. Consistent with the rest of LaunchPad, PIE would focus on experimental, and innovative work, and would not be suited to clients who are still exploring or defining their requirements; that support would continue to fall under LaunchPad's core experimentation and advisory services.

Costing for PIE would operate on a cost-recovery basis, given that expenses could vary significantly depending on each client's specific compute needs. LaunchPad would work with clients to establish a spending ceiling they are comfortable with, and would require financial coding and other details to be confirmed before provisioning any resources.

## Managed tenants

Managed tenants would address situations where clients require access to Microsoft Entra ID with a level of administrative permission that LaunchPad's traditional environments cannot accommodate. Rather than working within a subscription inside one of LaunchPad's existing tenants, these clients would require a dedicated tenant to evaluate identity-related scenarios, such as conditional access policies, tenant-wide configurations, or other capabilities that require a higher level of access and control than is possible in our shared tenants.

LaunchPad would provision the tenant and establish the appropriate guardrails before granting access, ensuring that each tenant is set up with sound security practices from the outset. Once ready, clients would receive Administrator-level accounts and could configure and experiment within the tenant as needed. As with the rest of LaunchPad, this offering would focus on goal-based, experimental, and innovative work, rather than providing a path to a permanent, production-ready tenant.

A key concern with offering dedicated tenants is tenant sprawl, the same challenge that can arise with cloud brokering more broadly. Managed tenants would mitigate this in the same way LaunchPad manages its other environments: by time-boxing access. Once a client's experiment concludes, the tenant would be decommissioned. This would allow LaunchPad to extend a higher level of access to clients who genuinely need it without introducing the long-term governance burden of unmanaged tenant creation within the broader GCCO landscape.

At this time, the cost model, timelines, and support level for Managed Tenants is undefined, as we're still exploring this possibility and formulating ideas of how best to deliver it.
