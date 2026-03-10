---
title: GCP - Get Connected
description: How to get connected to Google Cloud Platform
translationKey: tutorials/gcp-get-connected
draft: false
tags:
    - GCP
    - IAM
    - CLI
categories:
    - GCP
    - Tutorials
---

## Web Browser

Once you've received, and accepted, the invitation to the GCCO LaunchPad GCP organization (carbon.science.cloud-nuage.canada.ca), you'll need to visit the Google Cloud Console to get started.

The URL is: [https://console.cloud.google.com](https://console.cloud.google.com)

1. You'll be presented with the Google Cloud Console homepage
2. Use the project selector at the top of the page to see all the GCP projects (the main "container" that we delegate to each of our experiments) that you have access to
3. Click on a project to switch to it and view its resources
4. By default, you'll have the `Editor` role assigned, which allows you to create and manage most resources but not modify IAM permissions

### Notes

- GCP provides excellent **global** views and search capabilities across all your projects
  - Use the search bar at the top to find resources across all regions and projects
  - The "Resources" view shows resources from all regions you have access to
- GCP has one region in Canada: **northamerica-northeast1** (Montréal)
  - While you can use any region, try to keep your resources in the Canadian region when possible for data residency and performance
  - You can also use **northamerica-northeast2** (Toronto) which was added more recently
- You can have multiple Google Cloud Console tabs/windows open simultaneously without issues
- If you need to create custom Roles or modify permissions, you'll need to work with the LaunchPad team

## Command-line (CLI)

### Installing Google Cloud CLI

The Google Cloud CLI (`gcloud`) is a set of tools to create and manage Google Cloud resources.

#### Linux

```bash
# Add the Cloud SDK distribution URI as a package source
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

# Import the Google Cloud public key
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

# Update and install the Cloud SDK
sudo apt-get update && sudo apt-get install google-cloud-cli
```

#### macOS

```bash
# Using Homebrew
brew install --cask google-cloud-sdk
```

#### Windows

Download and run the installer from: [https://cloud.google.com/sdk/docs/install](https://cloud.google.com/sdk/docs/install), or contact your departmental IT team to request it to be installed.

### Configuring Google Cloud CLI

1. In the terminal type in `gcloud init`
2. Follow the prompts to authenticate:
   - Choose "Log in with a new account"
   - This will open your browser for authentication
3. Sign in with your credentials for the carbon.science.cloud-nuage.canada.ca organization
4. Select the project you'd like to work with from the list
5. Choose a default region and zone when prompted:
   - Region: `northamerica-northeast1` (Montréal)
   - Zone: `northamerica-northeast1-a` (or b, or c)

#### Other Commands

To list all available projects:  
`gcloud projects list`

To switch to a different project:  
`gcloud config set project PROJECT_ID`

To view your current configuration:  
`gcloud config list`

To set a default region:  
`gcloud config set compute/region northamerica-northeast1`

To set a default zone:  
`gcloud config set compute/zone northamerica-northeast1-a`

#### Using gsutil for Cloud Storage

The `gsutil` tool is included with the Cloud SDK and is used for working with Cloud Storage.

List buckets:  
`gsutil ls`

Copy files to Cloud Storage:  
`gsutil cp myfile.txt gs://my-bucket/`

Copy files from Cloud Storage:  
`gsutil cp gs://my-bucket/myfile.txt .`

Sync directories:  
`gsutil rsync -r local-dir gs://my-bucket/remote-dir`

### Authentication for Applications

For application authentication, use Application Default Credentials (ADC):

```bash
gcloud auth application-default login
```

This allows your local applications to authenticate using your user credentials for development and testing.
