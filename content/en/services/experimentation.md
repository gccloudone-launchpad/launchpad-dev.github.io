---
title: Experimentation
description: "try shit and see how it works"
translationKey: services/experimentation
draft: false
tags: []
categories: []
---

{{< translation-note >}}

Experimentation is our core service. Whether you're validating a new idea, testing a technology, or running a proof of concept, we offer three service models to match your team's needs and capacity: **Managed**, **Delegated**, and **Full-Service**. Each gives you access to secure, government-compliant cloud environments — the difference lies in how much support we provide and how costs are handled.

Experiments typically run between **3 and 12 months**, giving your team enough time to test, learn, and draw meaningful conclusions.

{{< needs-review >}}
Expand on the experiment lifecycle — what happens at intake, during the experiment, and at the end (wind-down, path to production, etc.)? How does the lifecycle differ across Managed, Delegated, and Full-Service models? This could just be a link to the Journey section (Client)
{{< /needs-review >}}

{{< needs-review >}}
Add a very basic image / process that looks like this: Intake -> Kickoff -> Experiment -> Closeout
{{< /needs-review >}}

## Funding

How you pay for your experiment depends on the service model:

- **Managed** — Generally centrally funded for smaller experiments. If your expected cloud spend is significant, a cost-recovery arrangement may apply.
- **Delegated** — Cost-recovery. Your department covers the cloud costs associated with your experiment.
- **Full-Service** — Cost-recovery. You bring the budget; we deliver the work.

{{< needs-review >}}
Maybe add a Class D cost estimate calculator to help teams understand what to budget for?
{{< /needs-review >}}

## Managed

In the Managed model, we handle the heavy lifting so you don't have to. Think of us as your cloud landlord — we set up the building, maintain the plumbing, and make sure the fire exits are clearly marked. You get your own space to work in, without having to worry about what's going on behind the walls.

Here's what that looks like in practice:

- **Your own dedicated environment.** You receive your own subscription, account, or project (depending on the cloud provider) that is isolated from other teams. What you build there is yours to control.
- **We manage the platform for you.** That means handling administration, security configurations, guardrails, and policies. We make sure the environment meets government standards so that you can focus on your experiment — not on compliance paperwork.
- **A cloud expert in your corner.** We assign you a dedicated cloud expert who can guide you through your journey, answer your questions, and help you avoid common pitfalls. You're not alone in this.
- **Full visibility into your spending.** Cloud costs can add up quickly if you're not paying attention. We give you clear, up-to-date information on what you're spending and why — keeping you informed and in control from a FinOps (financial operations) perspective. This applies whether you're using centrally funded resources or bringing your own budget to the table.
- **Access to the full cloud catalogue.** Through our agreements with Google Cloud (GCP), Amazon Web Services (AWS), and Microsoft Azure, you get access to almost any service each provider offers — without having to navigate Government of Canada procurement processes or security assessments yourself. We've already done that work, so you can start using the services you need right away.


{{< needs-review >}}
Put this in the glossary
{{< /needs-review >}}

### IaaS

IaaS stands for **Infrastructure as a Service**. In plain terms, it means you get access to the raw building blocks of the cloud: virtual machines, storage, and networking. You decide what to install on them and how to configure them — we just make sure the infrastructure is there and running.

This option is best suited for teams that have specific technical requirements, need full control over their environment, or are running workloads that don't fit neatly into a pre-packaged platform. If your experiment involves custom software stacks, specialized operating system configurations, or anything that requires you to "get close to the metal," IaaS is likely the right fit.

Keep in mind that with more control comes more responsibility on your end — your team will need to manage the software running on top of the infrastructure. We handle the cloud layer; you handle what's on it.

### PaaS

PaaS stands for **Platform as a Service**. Rather than giving you raw infrastructure to configure yourself, PaaS gives you a ready-to-use platform — think managed databases, container hosting environments, serverless functions, or machine learning workbenches. The underlying servers and networking are abstracted away, so you can focus on your application or analysis without worrying about what's running underneath.

This is a great fit for teams who want to move fast and don't want to spend time configuring and maintaining infrastructure. If your experiment involves deploying an app, running a data pipeline, or training a model, PaaS services let you get there more quickly and with less operational overhead.

In short: IaaS gives you the land to build on; PaaS gives you a house that's mostly move-in ready.

## Delegated

In the Delegated model, your department takes on a more active role in supporting its own cloud experimenters. Rather than relying solely on our central team, a designated Subject Matter Expert (SME) within your department works alongside us to help your teams succeed.

Here's what that means for you:

- **A familiar face closer to home.** Your delegated SME understands your department's context, priorities, and constraints. They can help you navigate the financial side of cloud experimentation, chart a path toward production, and connect you with the right people — whether that's within your department or across government — to unlock learning and innovation.
- **Better innovation from within.** Having a delegated SME means your department builds its own cloud expertise over time. That knowledge doesn't disappear when a project ends — it stays in your team and benefits future initiatives.

Interested in becoming a delegated department or SME? [Contact us]({{< globallink "about-us/contact-us" >}}) — we'd love to work with you to set that up.

{{< needs-review >}}
Maybe add a few departments that already have a delegated base? Stats Can, DFO, PHAC, DRDC etc.?
{{< /needs-review >}}

## Full-Service

Have a complex application or service you need to build or experiment with, but don't have the in-house resources or bandwidth to make it happen? The Full-Service model is designed for exactly that. You bring us the funding and the requirements — our cloud and development experts take care of the rest, from architecture and implementation to deployment and iteration.

This option is ideal for teams with a clear problem to solve but limited technical capacity to tackle it on their own. We work with you to understand what you need, and then we build it.

> **Before submitting an intake request**, please [reach out to us]({{< globallink "about-us/contact-us" >}}) directly. Our internal capacity is limited, and we want to make sure we can give your project the attention it deserves before committing to it.

{{< needs-review >}}
Add a RACI table showing who is Responsible, Accountable, Consulted, and Informed for key activities (e.g. environment setup, security, billing, support) across the Managed, Delegated, and Full-Service models.
{{< /needs-review >}}
