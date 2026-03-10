---
title: GCP - Understanding Core Services
description: A beginner's guide to essential Google Cloud Platform services
translationKey: tutorials/gcp-core-services
draft: false
tags:
    - GCP
    - Compute Engine
    - Cloud Storage
    - Cloud SQL
    - Vertex AI
categories:
    - GCP
    - Tutorials
---

This guide introduces you to the core GCP services you'll commonly use in your projects. Each section explains what the service does, when to use it, and how to get started.

## Compute Engine (Virtual Machines)

### What is Compute Engine?

Compute Engine provides virtual machines (VMs) running in Google's data centers. You have full control over the operating system (Linux or Windows), can choose the machine type (CPU and memory), and install any software you need.

### When to Use Compute Engine

- You need complete control over the operating system and software configuration
- You're running applications that require specific OS configurations
- You need persistent compute resources that run continuously
- You want to migrate existing on-premises servers to the cloud

### Getting Started

1. In the Google Cloud Console, navigate to **Compute Engine** → **VM instances**
2. Click "Create Instance"
3. Give your instance a name
4. Select a region and zone:
   - **northamerica-northeast1** (Montréal) - recommended for Canada
   - **northamerica-northeast2** (Toronto) - also in Canada
5. Choose a machine type:
   - **e2-micro**: Free tier eligible, good for learning (2 vCPU, 1 GB memory)
   - **e2-small/medium**: For development and small workloads
   - **n2-standard series**: For general production workloads
   - **c2 or n2-highmem**: For compute or memory-intensive applications
6. Select a boot disk (operating system):
   - **Debian**: Good default Linux choice
   - **Ubuntu**: Popular Linux distribution
   - **CentOS/Rocky Linux**: Enterprise Linux options
   - **Windows Server**: For Windows applications
7. Configure firewall - check boxes to allow HTTP/HTTPS traffic if needed
8. Click "Create"

### Important Notes

- VMs are charged by the second when running - stop them when not in use to save costs
- Use **Sustained Use Discounts** - automatic discounts for running VMs all month
- **Preemptible VMs** cost up to 80% less but can be terminated at any time (good for batch processing)
- Keep your VMs updated with security patches
- Use **managed instance groups** for production workloads needing high availability and auto-scaling
- Configure **startup scripts** to automate VM setup

## Cloud Storage and Filestore

### What are Cloud Storage and Filestore?

Both are storage services, but they serve different purposes:

**Cloud Storage** is object storage - perfect for storing files, backups, images, videos, and application data. Think of it as an infinitely scalable file storage system accessible via API or web interface.

**Filestore** is a managed network file system (NFS) that can be mounted on Compute Engine VMs, similar to a shared network drive. Multiple VMs can access the same Filestore instance simultaneously.

### When to Use Cloud Storage

- Storing files, images, videos, or documents
- Hosting static websites
- Backing up data or archiving old files
- Storing application logs and data
- Distributing content globally with Cloud CDN
- Storing data that needs to be accessed via HTTP/HTTPS

### When to Use Filestore

- Multiple VMs need to access the same files simultaneously
- You need traditional file system operations (like you would on a local drive)
- You're running applications that expect a file system (not object storage)
- You need low-latency file operations for applications like databases or media workflows

### Getting Started with Cloud Storage

1. In the Google Cloud Console, navigate to **Cloud Storage** → **Buckets**
2. Click "Create bucket"
3. Give your bucket a globally unique name (lowercase, no spaces)
4. Choose where to store your data:
   - **Region**: `northamerica-northeast1` or `northamerica-northeast2` (recommended for Canada)
   - **Multi-region**: Stores data in multiple regions for higher availability
5. Choose a storage class:
   - **Standard**: For frequently accessed data
   - **Nearline**: For data accessed less than once per month (cheaper)
   - **Coldline**: For data accessed less than once per quarter
   - **Archive**: For long-term archival (cheapest)
6. Configure access control:
   - **Uniform**: Recommended - uses IAM for all access control
   - **Fine-grained**: Allows per-object ACLs
7. Click "Create"

To upload files:

- Click on your bucket name
- Click "Upload files" or drag and drop

### Getting Started with Filestore

1. In the Google Cloud Console, navigate to **Filestore** → **Instances**
2. Click "Create instance"
3. Give your instance a name
4. Choose a service tier:
   - **Basic HDD**: Cost-effective for general use
   - **Basic SSD**: Higher performance
   - **Enterprise**: High availability with replication
5. Select region and zone (match your VM locations)
6. Choose storage capacity (minimum 1 TB for Basic)
7. Configure network settings (select your VPC)
8. Click "Create"

To mount Filestore on a VM (Ubuntu, or Debian-based distributions):

```bash
# Install NFS client
sudo apt-get update
sudo apt-get install nfs-common

# Create mount point
sudo mkdir -p /mnt/filestore

# Mount the file system (replace with your Filestore IP and share name)
sudo mount -t nfs FILESTORE_IP:/SHARE_NAME /mnt/filestore
```

### Important Notes

**Cloud Storage:**

- Bucket names must be globally unique across all of Google Cloud
- Use **lifecycle policies** to automatically transition data to cheaper storage classes
- Enable **versioning** to protect against accidental deletions
- Use **signed URLs** for temporary access without authentication
- Consider **requester pays** for sharing large datasets

**Filestore:**

- Filestore is more expensive than Cloud Storage - use it only when you need a true file system
- Choose the right tier based on performance needs
- Use **snapshots** for backups
- Scale capacity up or down as needed (Basic tier)

## Cloud SQL

### What is Cloud SQL?

Cloud SQL is a fully managed relational database service that supports PostgreSQL, MySQL, and SQL Server. Google handles backups, patching, scaling, and high availability, so you can focus on your application.

### Supported Database Engines

- **PostgreSQL**: Open-source, feature-rich, great for most applications
- **MySQL**: Popular open-source database
- **SQL Server**: Microsoft's database (requires license, more expensive)

### When to Use Cloud SQL

- You need a relational database with SQL support
- You want automated backups and point-in-time recovery
- You need high availability with automatic failover
- You don't want to manage database patching and maintenance
- You're building applications that require ACID transactions

### Getting Started with PostgreSQL

1. In the Google Cloud Console, navigate to **SQL**
2. Click "Create instance"
3. Choose **PostgreSQL**
4. Give your instance an instance ID
5. Set a password for the `postgres` user - **save this securely!**
6. Choose a database version (use the latest unless you have specific requirements)
7. Select a region and zone:
   - **northamerica-northeast1** (Montréal) recommended
8. Configure your instance:
   - **Preset**: Choose Development, Production, or customize
   - **Machine type**:
     - **Shared-core** (db-f1-micro): Free tier eligible, good for learning
     - **Lightweight** (db-g1-small): For development
     - **Standard/High memory**: For production workloads
9. Configure storage:
   - Start with 10-20 GB
   - Enable automatic storage increases (recommended)
10. Configure connections:
    - **Public IP**: For connecting from outside Google Cloud (requires authorized networks)
    - **Private IP**: For connecting from VMs (more secure, recommended for production)
11. Click "Create instance"

### Connecting to Your Database

After creation (takes 5-10 minutes), you'll find your connection details:

**Using Public IP:**

- Add your IP to authorized networks in the Connections tab
- **Connection name**: `PROJECT_ID:REGION:INSTANCE_ID`
- **Public IP address**: Shown in the instance details
- **Username**: `postgres`
- **Password**: What you set during creation

Connection string example:  
`postgresql://postgres:yourpassword@PUBLIC_IP:5432/postgres`

**Using Cloud SQL Proxy (recommended):**

```bash
# Download Cloud SQL Proxy
curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.8.0/cloud-sql-proxy.linux.amd64
chmod +x cloud-sql-proxy

# Start the proxy (replace CONNECTION_NAME)
./cloud-sql-proxy PROJECT_ID:REGION:INSTANCE_ID
```

Then connect to `localhost:5432`

### Important Notes

- Automated backups are enabled by default - configure retention period (1-365 days)
- Enable **High Availability (HA)** for production databases (creates standby replica in another zone)
- Use **read replicas** to scale read-heavy workloads
- Cloud SQL can be expensive - consider stopping instances during development (can take time to restart)
- Monitor your database with **Cloud Monitoring**
- Use **database flags** to customize PostgreSQL settings
- Enable **point-in-time recovery** for granular restore options

## App Engine and Cloud Run

### What are App Engine and Cloud Run?

Both are platforms for deploying applications without managing infrastructure:

**App Engine** is Google's original platform-as-a-service (PaaS). You deploy your code, and Google handles everything - servers, scaling, load balancing. Good for traditional web applications.

**Cloud Run** is a newer serverless platform for running containers. It scales automatically, even to zero, and you only pay when your code is running. More flexible than App Engine.

### When to Use App Engine

- You're building a traditional web application
- You want zero infrastructure management
- Your app fits one of the supported runtimes
- You want automatic scaling with minimal configuration
- You prefer a simpler deployment model

### When to Use Cloud Run

- You want to deploy containerized applications
- You need more flexibility in runtime and dependencies
- You want to scale to zero when not in use
- You're building APIs or microservices
- You want to run any language or framework

### Supported Platforms

**App Engine:**

- Python, Java, Node.js, PHP, Ruby, Go
- Standard environment (sandboxed) or Flexible environment (containers)

**Cloud Run:**

- Any language that runs in a container
- Must listen on a port defined by the `PORT` environment variable

### Getting Started with App Engine

1. In the Google Cloud Console, navigate to **App Engine**
2. Click "Create Application"
3. Select a region (choose `northamerica-northeast1`)
4. Choose your language/runtime
5. Follow the setup instructions for your language

Deploying your app:

```bash
# Create app.yaml in your project directory
# For Python example:
runtime: python311

# Deploy
gcloud app deploy

# View your app
gcloud app browse
```

### Getting Started with Cloud Run

1. Containerize your application (create a `Dockerfile`)
2. Build and push to Container Registry or Artifact Registry:

```bash
# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com

# Build and deploy in one command
gcloud run deploy SERVICE_NAME \
  --source . \
  --region northamerica-northeast1 \
  --allow-unauthenticated
```

Or deploy from a container image:

```bash
gcloud run deploy SERVICE_NAME \
  --image gcr.io/PROJECT_ID/IMAGE_NAME \
  --region northamerica-northeast1 \
  --allow-unauthenticated
```

### Important Notes

**App Engine:**

- Each Google Cloud project can have only one App Engine application
- Standard environment has faster scaling but more restrictions
- Use `app.yaml` to configure your application
- Supports traffic splitting for A/B testing
- Includes built-in services like Cron, Task Queues

**Cloud Run:**

- Scales automatically based on requests, including to zero
- You're charged only for actual usage (CPU, memory, requests)
- Can handle up to 1000 concurrent requests per container instance
- Set minimum instances to avoid cold starts for critical services
- Use **Cloud Run Jobs** for one-off tasks or scheduled jobs
- Configure CPU and memory limits per service

## Vertex AI

### What is Vertex AI?

Vertex AI is Google Cloud's unified AI platform for building, deploying, and scaling machine learning models. It provides access to pre-trained models, tools for custom model development, and generative AI capabilities.

### When to Use Vertex AI

- You want to build AI-powered applications
- You need access to large language models (LLMs) for text generation
- You're developing chatbots, content generation, or summarization tools
- You want to train custom machine learning models
- You need computer vision or natural language processing capabilities

### Key Features

- **Generative AI Studio**: Access to PaLM 2, Gemini, and other foundation models
- **Model Garden**: Pre-trained models for various tasks
- **AutoML**: Train custom models without extensive ML expertise
- **Vertex AI Workbench**: Jupyter-based environment for data science
- **Vertex AI Pipelines**: Orchestrate ML workflows
- **Model Monitoring**: Track model performance in production

### Getting Started with Generative AI

1. In the Google Cloud Console, navigate to **Vertex AI** → **Generative AI Studio**
2. Choose a model to test:
   - **Gemini Pro**: Google's most capable multimodal model
   - **PaLM 2**: Text generation and chat
   - **Imagen**: Image generation
3. In the playground, test prompts and adjust parameters:
   - **Temperature**: Controls randomness (0 = deterministic, 1 = creative)
   - **Top-k** and **Top-p**: Control diversity of responses
   - **Max output tokens**: Limit response length

### Using Vertex AI in Your Application

Example using Python SDK:

```python
from vertexai.preview.generative_models import GenerativeModel

# Initialize Vertex AI
import vertexai
vertexai.init(project="your-project-id", location="northamerica-northeast1")

# Load the model
model = GenerativeModel("gemini-pro")

# Generate content
response = model.generate_content(
    "Explain what Google Cloud Platform is in simple terms"
)

print(response.text)
```

For chat:

```python
# Start a chat session
chat = model.start_chat()

# Send messages
response = chat.send_message("Hello! How can you help me?")
print(response.text)

response = chat.send_message("Tell me about Cloud Storage")
print(response.text)
```

### Important Notes

- Vertex AI is available in limited regions - use `us-central1` or `northamerica-northeast1`
- Pricing is based on input and output characters/tokens
- Use **safety settings** to filter harmful content
- **Grounding** with Google Search can provide more accurate, up-to-date responses
- Set **quotas** to control costs
- Use **function calling** to integrate AI with your application's functions
- Test thoroughly in the playground before production deployment
- Consider **fine-tuning** models with your own data for better performance

## Next Steps

Now that you understand these core GCP services, here are some suggested learning paths:

1. **Start Simple**: Create a Compute Engine VM or deploy a simple app to Cloud Run
2. **Add Storage**: Create a Cloud Storage bucket and practice uploading/downloading files
3. **Add a Database**: Set up a Cloud SQL PostgreSQL database and connect it to an application
4. **Experiment with AI**: Try Gemini Pro in Generative AI Studio
5. **Build Something**: Combine these services - for example, a Cloud Run app that stores files in Cloud Storage and uses Cloud SQL for data

## Cost Management Tips

- **Use the Free Tier**: Many services offer free tier usage for learning (e2-micro VM, Cloud Storage, Cloud SQL, etc.)
- **Stop Resources When Not in Use**: Stop Compute Engine VMs and Cloud SQL instances to save money
- **Set Up Budget Alerts**: Configure budgets in Billing to track spending and get alerts
- **Right-Size Resources**: Start small and scale up only when needed
- **Use Committed Use Discounts**: For production workloads running 24/7, get up to 57% discount
- **Clean Up**: Delete resources you're no longer using, especially in development/testing
- **Use Preemptible/Spot VMs**: For batch processing, use preemptible VMs at up to 80% discount
- **Choose the Right Region**: Some regions are more expensive than others

## Getting Help

- **Google Cloud Documentation**: [https://cloud.google.com/docs](https://cloud.google.com/docs)
- **Cloud Console Help**: Click the "?" icon in the top navigation
- **LaunchPad Team**: Reach out if you need assistance or have questions
- **Google Cloud Support**: Available through the console if you have a support plan
