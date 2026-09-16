---
title: AWS - Understanding Core Services
description: A beginner's guide to essential AWS services
translationKey: tutorials/aws-core-services
showToc: true
draft: false
tags:
    - AWS
    - EC2
    - S3
    - RDS
    - Bedrock
categories:
    - Tutorials
    - AWS
---

This guide introduces you to the core AWS services you'll commonly use in your projects. Each section explains what the service does, when to use it, and how to get started.

## EC2 (Elastic Compute Cloud)

### What is EC2?

EC2 instances are virtual machines running in the AWS cloud. You have full control over the operating system (Linux or Windows), can choose the instance size (CPU and memory), and install any software you need.

### When to Use EC2

- You need complete control over the operating system and software configuration
- You're running applications that require specific OS configurations
- You need persistent compute resources that run continuously
- You want to migrate existing on-premises servers to the cloud

### Getting Started

1. In the AWS console, navigate to **EC2** and click "Launch Instance"
2. Give your instance a name
3. Choose an Amazon Machine Image (AMI) - this is your operating system:
   - **Amazon Linux 2023**: AWS-optimized Linux, good default choice
   - **Ubuntu Server**: Popular Linux distribution
   - **Windows Server**: For Windows applications
4. Choose an instance type based on your needs:
   - **t3.micro** or **t3.small**: Good for development and small workloads (free tier eligible)
   - **t3.medium**: For light production workloads
   - **m5 or c5 series**: For production workloads requiring more resources
5. Create or select a key pair for SSH access (Linux) or RDP access (Windows)
6. Configure network settings - by default, AWS creates a security group allowing SSH/RDP access
7. Configure storage - start with the default (8-30 GB) and increase if needed
8. Click "Launch instance"

### Important Notes

- EC2 instances are charged by the hour when running - stop them when not in use to save costs
- Use **Elastic IPs** if you need a static IP address
- Keep your instances updated with security patches
- Security groups act as firewalls - only open ports you actually need
- Consider using **Auto Scaling Groups** for production workloads that need high availability

## S3 (Simple Storage Service) and EFS (Elastic File System)

### What are S3 and EFS?

Both are storage services, but they serve different purposes:

**S3 (Simple Storage Service)** is object storage - perfect for storing files, backups, images, videos, and application data. Think of it as an infinitely scalable file storage system accessible via API or web interface.

**EFS (Elastic File System)** is a network file system that can be mounted directly on EC2 instances, similar to a shared network drive. Multiple EC2 instances can access the same EFS file system simultaneously.

### When to Use S3

- Storing files, images, videos, or documents
- Hosting static websites
- Backing up data or archiving old files
- Storing application logs and data
- Storing data that needs to be accessed via HTTP/HTTPS

### When to Use EFS

- Multiple EC2 instances need to access the same files simultaneously
- You need traditional file system operations (like you would on a local drive)
- You're running applications that expect a file system (not object storage)
- You need to share data between containers or instances

### Getting Started with S3

1. In the AWS console, navigate to **S3** and click "Create bucket"
2. Give your bucket a globally unique name (lowercase, no spaces)
3. Select a region - **ca-central-1** (Canada Central) is recommended
4. Keep "Block all public access" enabled unless you specifically need public access
5. Enable versioning if you want to keep multiple versions of files
6. Click "Create bucket"

To upload files:

- Click on your bucket name
- Click "Upload" and drag/drop files or click "Add files"
- Click "Upload"

### Getting Started with EFS

1. In the AWS console, navigate to **EFS** and click "Create file system"
2. Click "Customize" for more options
3. Give your file system a name
4. Choose a storage class:
   - **Standard**: For frequently accessed data
   - **One Zone**: Lower cost, stored in a single availability zone
5. Enable automatic backups (recommended for production)
6. Configure network access - select your VPC and subnets
7. Click "Create"

To mount EFS on an EC2 instance (DNF-based systems, like Amazon Linux, or RHEL clones):

```bash
# Install NFS client
sudo yum install -y nfs-utils  # Amazon Linux
sudo apt-get install -y nfs-common  # Ubuntu

# Create mount point
sudo mkdir /mnt/efs

# Mount the file system (replace fs-xxxxx with your EFS ID)
sudo mount -t nfs4 -o nfsvers=4.1 fs-xxxxx.efs.ca-central-1.amazonaws.com:/ /mnt/efs
```

### Important Notes

**S3:**

- S3 bucket names must be globally unique across all of AWS
- Use **S3 lifecycle policies** to automatically move old data to cheaper storage tiers (Glacier)
- Enable **versioning** to protect against accidental deletions
- Use **S3 Intelligent-Tiering** to automatically optimize costs based on access patterns

**EFS:**

- EFS is more expensive than S3 - use it only when you need a true file system
- EFS scales automatically - you only pay for what you use
- Use **EFS Lifecycle Management** to move infrequently accessed files to a cheaper storage class

## RDS (Relational Database Service)

### What is RDS?

RDS is a managed database service that supports multiple database engines. AWS handles backups, patching, scaling, and high availability, so you can focus on your application.

### Supported Database Engines

- **PostgreSQL**: Open-source, feature-rich, great for most applications
- **MySQL**: Popular open-source database
- **MariaDB**: MySQL-compatible, community-developed
- **Oracle**: Enterprise database (requires license)
- **SQL Server**: Microsoft's database (requires license)
- **Amazon Aurora**: AWS's high-performance MySQL/PostgreSQL-compatible database

### When to Use RDS

- You need a relational database with SQL support
- You want automated backups and point-in-time recovery
- You need high availability with automatic failover
- You don't want to manage database patching and maintenance
- You're building applications that require ACID transactions

### Getting Started with PostgreSQL

1. In the AWS console, navigate to **RDS** and click "Create database"
2. Choose **Standard Create** for more control
3. Select **PostgreSQL** as the engine
4. Choose the latest version unless you have specific requirements
5. Select a template:
   - **Free tier**: For learning and development (limited to db.t3.micro)
   - **Dev/Test**: For non-production workloads
   - **Production**: Enables Multi-AZ for high availability
6. Set your DB instance identifier (name)
7. Set master username and password - **save these securely!**
8. Choose instance size:
   - **db.t3.micro**: Free tier eligible, good for learning
   - **db.t3.small/medium**: For development and small applications
   - **db.m5 or db.r5**: For production workloads
9. Configure storage:
   - Start with 20-50 GB
   - Enable storage autoscaling to automatically increase when needed
10. Configure connectivity:
    - Choose your VPC
    - Select "Yes" for public access if you need to connect from outside AWS (development only)
    - Create a new security group or select an existing one
11. Click "Create database"

### Connecting to Your Database

After creation (takes 5-10 minutes), you'll find your connection details:

- **Endpoint**: `your-db-name.xxxxx.ca-central-1.rds.amazonaws.com`
- **Port**: `5432` (PostgreSQL default)
- **Username**: What you set during creation
- **Password**: What you set during creation

Connection string example:  
`postgresql://username:password@your-db-name.xxxxx.ca-central-1.rds.amazonaws.com:5432/postgres`

### Important Notes

- Automated backups are enabled by default - configure retention period (1-35 days)
- Enable **Multi-AZ deployment** for production databases (provides automatic failover)
- Use **Read Replicas** to scale read-heavy workloads
- RDS can be expensive - stop your database when not in use (dev/test only)
- Monitor your database with **CloudWatch** to track performance
- Use **Parameter Groups** to customize database settings

## Elastic Beanstalk

### What is Elastic Beanstalk?

Elastic Beanstalk is a platform for deploying and managing web applications without worrying about the infrastructure. You upload your code, and AWS handles deployment, capacity provisioning, load balancing, auto-scaling, and monitoring.

### When to Use Elastic Beanstalk

- You're deploying a web application or API
- You want to focus on code, not infrastructure management
- You need automatic scaling based on traffic
- You want quick deployment with minimal configuration
- You're building a standard web application (not microservices)

### Supported Platforms

- Node.js
- Python
- Ruby
- PHP
- Java
- .NET (Core and Framework)
- Go
- Docker (single or multi-container)

### Getting Started

1. In the AWS console, navigate to **Elastic Beanstalk** and click "Create application"
2. Give your application a name
3. Select a platform:
   - Choose your language/runtime (e.g., Python 3.11, Node.js 20)
   - AWS will select the recommended platform version
4. For "Application code", you have options:
   - **Sample application**: AWS provides a simple "Hello World" app to test
   - **Upload your code**: Upload a ZIP file of your application
   - **Use existing version**: If you've deployed before
5. Click "Create application"

AWS will now:

- Create an EC2 instance
- Set up a security group
- Create a load balancer (if needed)
- Configure auto-scaling
- Deploy your application

### Deploying Updates

To deploy new versions:

1. ZIP your application code
2. Go to your Elastic Beanstalk application
3. Click "Upload and deploy"
4. Select your ZIP file and give the version a label
5. Click "Deploy"

Or use the AWS CLI:

```bash
# Install EB CLI
pip install awsebcli

# Initialize your application
eb init

# Deploy your application
eb deploy
```

### Important Notes

- Elastic Beanstalk uses EC2, so you're still charged for underlying resources
- Use **environment types**:
  - **Web server environment**: For web applications
  - **Worker environment**: For background job processing
- Use **saved configurations** to replicate environments
- Enable **managed updates** for automatic platform patching
- Configure **health checks** to ensure your application is running correctly
- Use **environment variables** to configure your application without changing code

## Bedrock

### What is AWS Bedrock?

AWS Bedrock provides access to foundation models (large AI models) from leading AI companies through a single API. It allows you to build and scale AI applications using pre-trained models without managing infrastructure.

### When to Use Bedrock

- You want to build AI-powered applications
- You need access to large language models (LLMs) for text generation
- You're developing chatbots, content generation, or summarization tools
- You want to use AI without training your own models
- You need image generation or multimodal AI capabilities

### Available Models

- **Amazon Titan**: AWS's own foundation models for text and embeddings
- **Claude (Anthropic)**: Powerful models for conversation and analysis
- **Jurassic (AI21 Labs)**: Models optimized for text generation
- **Stable Diffusion (Stability AI)**: Image generation models
- **Llama (Meta)**: Open-source foundation models

### Getting Started

1. In the AWS console, navigate to **Amazon Bedrock**
2. Go to "Model access" in the left menu
3. Click "Manage model access"
4. Select the models you want to access (Claude and Titan are good starting points)
5. Click "Request model access" - some models are instant, others may require approval
6. Once approved, go to "Playgrounds" to test models:
   - **Text**: For text generation and conversation
   - **Chat**: For interactive chatbot testing
   - **Image**: For image generation

### Using Bedrock in Your Application

Example using AWS SDK for Python (boto3):

```python
import boto3
import json

# Create Bedrock client
bedrock = boto3.client('bedrock-runtime', region_name='ca-central-1')

# Prepare the request
prompt = "Explain what AWS Bedrock is in simple terms"

body = json.dumps({
    "prompt": f"\n\nHuman: {prompt}\n\nAssistant:",
    "max_tokens_to_sample": 500,
    "temperature": 0.7,
})

# Call Claude model
response = bedrock.invoke_model(
    modelId='anthropic.claude-v2',
    body=body
)

# Parse response
response_body = json.loads(response['body'].read())
print(response_body['completion'])
```

### Important Notes

- Bedrock is **not available in all regions** - check availability (currently limited regions)
- Pricing is based on input and output tokens - monitor your usage
- Use **Guardrails** to filter harmful content and implement safety controls
- Consider using **Knowledge Bases** to provide your AI with custom data
- Store API credentials securely - use IAM roles when possible
- Some models require special approval and may have usage limits
- Test in the playground before integrating into your application

## Next Steps

Now that you understand these core AWS services, here are some suggested learning paths:

1. **Start Simple**: Launch an EC2 instance or deploy a simple app to Elastic Beanstalk
2. **Add Storage**: Create an S3 bucket and practice uploading/downloading files
3. **Add a Database**: Set up an RDS PostgreSQL database and connect it to an application
4. **Experiment with AI**: Get access to Bedrock models and try the playground
5. **Build Something**: Combine these services - for example, an app on Elastic Beanstalk that stores files in S3 and uses RDS for data

## Cost Management Tips

- **Use the Free Tier**: Many services offer free tier usage for learning
- **Stop Resources When Not in Use**: Stop EC2 instances and RDS databases to save money
- **Set Up Billing Alerts**: Configure CloudWatch billing alarms to track spending
- **Right-Size Resources**: Start small and scale up only when needed
- **Use Cost Explorer**: Analyze your spending patterns and identify savings opportunities
- **Clean Up**: Delete resources you're no longer using, especially in development/testing
- **Consider Reserved Instances**: For production workloads running 24/7, Reserved Instances offer significant savings

## Getting Help

- **AWS Documentation**: [https://docs.aws.amazon.com](https://docs.aws.amazon.com)
- **AWS Console Help**: Click the "?" icon in the top navigation
- **LaunchPad Team**: Reach out if you need assistance or have questions
- **AWS Support**: Available through the console if you have a support plan
