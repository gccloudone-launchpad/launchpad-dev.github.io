---
title: Azure - Understanding Core Services
description: A beginner's guide to essential Azure services
translationKey: tutorials/azure-core-services
showToc: true
draft: false
tags:
    - Azure
    - Virtual Machines
    - Storage
    - App Services
    - Databases
    - AI
categories:
    - Tutorials
    - Azure
---

This guide introduces you to the core Azure services you'll commonly use in your projects. Each section explains what the service does, when to use it, and how to get started.

## Virtual Machines (VMs)

### What are VMs?

Virtual Machines are like having a computer in the cloud. You can choose the operating system (Windows or Linux), the size (CPU and memory), and install whatever software you need.

### When to use VMs

- You need full control over the operating system and installed software
- You're running applications that can't easily be containerized
- You need specific configurations or legacy software
- You want to "lift and shift" existing on-premises servers to the cloud

### Getting Started

1. In the Azure portal, search for "Virtual machines" and click "Create"
2. Choose your subscription and resource group
3. Give your VM a name and select a region (e.g., Canada Central)
4. Choose an image (operating system) - Ubuntu, Windows Server, etc.
5. Select a size based on your CPU/memory needs - start small and scale up if needed
6. Configure authentication (SSH key for Linux, password for Windows)
7. Review networking settings - by default, Azure creates a virtual network for you
8. Click "Review + create"

### Important Notes

- VMs are charged by the hour when running - stop them when not in use to save costs
- Keep your VM updated with security patches
- Back up important VMs regularly using Azure Backup
- Use managed disks for better reliability and management

## Storage Accounts

### What are Storage Accounts?

Storage Accounts provide cloud storage for your data. Think of it as a highly scalable, secure place to store files, backups, logs, and application data.

### Types of Storage

- **Blob Storage**: For unstructured data like images, videos, backups, and log files
- **File Storage**: Like a network file share - can be mounted on VMs
- **Queue Storage**: For messaging between application components
- **Table Storage**: For storing structured non-relational data

### When to use Storage Accounts

- You need to store files, images, or documents
- You want to back up data or archive old files
- Your application needs to store and retrieve large amounts of data
- You need a central place for logs or diagnostic information

### Getting Started

1. Search for "Storage accounts" and click "Create"
2. Choose your subscription and resource group
3. Give your storage account a unique name (must be globally unique, lowercase, and no special characters)
4. Select a region (Canada Central recommended)
5. Choose performance tier:
   - **Standard**: Good for most scenarios, cost-effective
   - **Premium**: For high-performance scenarios (databases, VMs)
6. Choose redundancy:
   - **LRS** (Locally Redundant Storage): Most economical, data stored in one datacenter
   - **GRS** (Geo-Redundant Storage): Data replicated to another region for disaster recovery
7. Click "Review + create"

### Important Notes

- Storage account names must be globally unique across all of Azure
- Different storage tiers (Hot, Cool, Archive) offer different pricing - use Cool or Archive for infrequently accessed data
- Use Shared Access Signatures (SAS) to grant temporary access to storage without sharing keys
- Enable soft delete to recover accidentally deleted data

## App Services

### What are App Services?

App Services is a platform for hosting web applications, REST APIs, and mobile backends without managing the underlying infrastructure. You just deploy your code, and Azure handles the servers, scaling, and updates.

### When to use App Services

- You're building a web application or API
- You want to focus on code, not server management
- You need automatic scaling based on traffic
- You want built-in continuous deployment from Git

### Supported Platforms

- .NET, .NET Core
- Node.js
- Python
- PHP
- Java
- Ruby

### Getting Started

1. Search for "App Services" and click "Create" → "Web App"
2. Choose your subscription and resource group
3. Give your app a unique name (this becomes part of your URL: `yourapp.azurewebsites.net`)
4. Choose "Code" or "Docker Container"
5. Select your runtime stack (e.g., Python 3.11, Node 20 LTS)
6. Select an operating system (Linux or Windows)
7. Choose a region (Canada Central recommended)
8. Select an App Service Plan (defines CPU/memory):
   - **Free/Basic**: Good for development and testing
   - **Standard**: For production workloads with custom domains and SSL
   - **Premium**: For high-traffic production apps with scaling
9. Click "Review + create"

### Deployment Options

- Deploy directly from VS Code
- Connect to GitHub for automatic deployment on git push
- Use Azure CLI: `az webapp deploy`
- Upload a ZIP file of your application

### Important Notes

- App Services include built-in SSL certificates for `*.azurewebsites.net` domains
- Use deployment slots for staging environments before promoting to production
- Enable Application Insights for monitoring and diagnostics
- Scale up (bigger machine) or scale out (more instances) based on your needs

## Databases - Azure Database for PostgreSQL

### What is Azure Database for PostgreSQL?

A fully managed PostgreSQL database service. Azure handles backups, updates, patching, and high availability while you focus on your application.

### When to use PostgreSQL

- You need a relational database with SQL support
- You're building applications that require complex queries and transactions
- You need support for JSON data alongside relational data
- You want an open-source database with strong community support

### Deployment Options

- **Flexible Server**: Recommended for most workloads, offers more control and features
- **Single Server**: Being deprecated - use Flexible Server for new projects

### Getting Started

1. Search for "Azure Database for PostgreSQL" and click "Create"
2. Select "Flexible server"
3. Choose your subscription and resource group
4. Give your server a unique name
5. Select a region (Canada Central recommended)
6. Choose PostgreSQL version (use the latest stable version unless you have specific requirements)
7. Configure compute + storage:
   - **Burstable**: For development and low-traffic applications
   - **General Purpose**: For most production workloads
   - **Memory Optimized**: For high-performance database operations
8. Set up administrator username and password (save these securely!)
9. Configure networking:
   - Allow Azure services to access the server
   - Add your current IP address if you want to connect from your computer
10. Click "Review + create"

### Connecting to Your Database

After creation, you'll need:

- **Server name**: `yourserver.postgres.database.azure.com`
- **Admin username**: `youradmin`
- **Password**: What you set during creation
- **Port**: `5432` (default PostgreSQL port)

Connection string example:  
`postgresql://youradmin:yourpassword@yourserver.postgres.database.azure.com:5432/postgres?sslmode=require`

### Important Notes

- Backups are automatic - configure retention period based on your needs
- Enable high availability for production databases (creates a standby replica)
- Use connection pooling in your applications for better performance
- Monitor your database with Azure Monitor to track performance and resource usage
- Always use SSL connections (required by default)

## Azure AI Foundry

### What is Azure AI Foundry?

Azure AI Foundry (formerly Azure AI Studio) is a unified platform for building, testing, and deploying AI applications. It provides access to Azure OpenAI models (like GPT-4, GPT-4o), custom AI models, and tools for developing AI solutions.

### When to use AI Foundry

- You want to build AI-powered applications
- You need access to large language models (LLMs) like GPT-4
- You're developing chatbots, content generation, or AI assistants
- You want to create custom AI models with your own data

### Key Features

- **Azure OpenAI Service**: Access to GPT-4, GPT-4o, GPT-3.5-Turbo, and DALL-E models
- **Prompt Flow**: Visual tool for designing and testing AI workflows
- **Model Catalog**: Browse and deploy pre-trained AI models
- **Fine-tuning**: Customize models with your own data
- **Responsible AI Tools**: Built-in content filtering and safety features

### Getting Started

1. Search for "Azure AI Foundry" or "Azure AI Studio" in the portal
2. Click "Create" to set up a new AI hub
3. Choose your subscription and resource group
4. Give your hub a name and select a region (Canada Central if available for AI services)
5. The hub will create associated resources (Storage Account, Key Vault, etc.)
6. Once created, you can create a "Project" within the hub
7. In your project, go to "Deployments" to deploy an AI model:
   - Choose a model (e.g., gpt-4o, gpt-35-turbo)
   - Give it a deployment name
   - Configure the tokens-per-minute rate limit
8. Click "Create"

### Using Your Deployed Model

You can interact with deployed models through:

- **Playground**: Test prompts directly in the browser
- **REST API**: Call the model from your applications
- **Python SDK**: Use the `openai` library
- **Prompt Flow**: Build complex AI workflows

Example Python code:

```python
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key="your-api-key",
    api_version="2024-02-01",
    azure_endpoint="https://your-resource.openai.azure.com"
)

response = client.chat.completions.create(
    model="your-deployment-name",
    messages=[
        {"role": "user", "content": "Hello, how are you?"}
    ]
)

print(response.choices[0].message.content)
```

### Important Notes

- AI services have quota limits - request increases if you need higher capacity
- Costs are based on token usage (input and output tokens)
- Enable content filtering to prevent harmful content generation
- Store API keys securely (use Azure Key Vault)
- Be aware of data residency - not all AI models are available in all regions
- Review Azure OpenAI's responsible AI guidelines

## Next Steps

Now that you understand these core services, here are some suggested learning paths:

1. **Start Simple**: Create a VM or deploy a simple web app to App Services
2. **Add Storage**: Set up a Storage Account and practice uploading/downloading files
3. **Add a Database**: Create a PostgreSQL database and connect it to an application
4. **Experiment with AI**: Deploy a GPT model in AI Foundry and try the playground
5. **Build Something**: Combine these services - for example, a web app (App Services) that stores files (Storage Account) and uses a database (PostgreSQL)

## Cost Management Tips

- **Use the Free Tier**: Many services offer a free tier for learning
- **Stop Resources When Not in Use**: VMs and databases can be stopped to save costs
- **Set Up Budget Alerts**: Configure alerts in Cost Management to track spending
- **Right-Size Resources**: Start small and scale up only when needed
- **Clean Up**: Delete resources you're no longer using, especially in development/testing

## Getting Help

- **Azure Documentation**: [https://docs.microsoft.com/azure](https://docs.microsoft.com/azure)
- **Azure Portal Help**: Click the "?" icon in the top navigation
- **LaunchPad Team**: Reach out if you need assistance or have questions
- **Azure Support**: Available through the portal if you have a support plan
