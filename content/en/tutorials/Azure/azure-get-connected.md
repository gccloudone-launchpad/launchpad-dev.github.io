---
title: Azure - Get Connected
description: How to get connected to Microsoft Azure
translationKey: tutorials/azure-get-connected
draft: false
tags:
    - Azure
    - RBAC
    - CLI
categories:
    - Tutorials
    - Azure
---

## Web Browser

Once you've received, and accepted, the invitation to the GCCO LaunchPad Azure tenant (163Oxygen), you'll need to visit the Azure portal to get started.

The URL is: [https://portal.azure.com/163oxygen.onmicrosoft.com](https://portal.azure.com/163oxygen.onmicrosoft.com)

1. You'll be presented with the Azure portal homepage
2. Navigate to "Subscriptions" to see all the Azure subscriptions (the main "container" that we delegate to each of our experiments) that you have access to
3. Click on a subscription to view its resources and manage services within it
4. By default, you'll have the `Contributor` role assigned, which allows you to create and manage resources but not modify access permissions

### Notes

- Azure provides several **global** views and search capabilities across all your subscriptions
  - Use the global search bar at the top to find resources across all regions and subscriptions
  - The "All resources" view shows resources from all regions you have access to
- Azure has two regions in Canada: **Canada Central** and **Canada East**
  - While you can use any region, try to keep your resources in Canadian regions when possible for data residency and performance
  - Canada Central (Toronto) is typically the primary Canadian region
- If you need to create custom Roles or modify permissions, you'll need to work with with LaunchPad team.
  
## Command-line (CLI)

### Installing Azure CLI

The Azure Command-Line Interface (CLI) is a cross-platform command-line tool to connect to Azure and execute administrative commands on Azure resources. It allows the execution of commands through a terminal using interactive command-line prompts or a script.

For interactive use, you first launch a shell such as cmd.exe on Windows, or Bash on Linux or macOS, and then issue a command at the shell prompt. To automate repetitive tasks, you assemble the CLI commands into a shell script using the script syntax of your chosen shell, and then you execute the script.

The Azure CLI (`az`) is available for Windows, macOS, and Linux.

#### Linux

```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

#### macOS

```bash
brew update && brew install azure-cli
```

#### Windows

Download and run the MSI installer from: [https://aka.ms/installazurecliwindows](https://aka.ms/installazurecliwindows), or contact your departmental IT team to request it to be installed.

### Configuring Azure CLI

1. To login to our tenant, using a device code (useful when running commands on a remote system)  
    `az login --tenant 8c1a4d93-d828-4d0e-9303-fd3bd611c822 --use-device-code`
2. This will provide a code and URL to visit to authenticate
3. Sign in with your credentials for the 163Oxygen tenant
4. Once authenticated, the CLI will display a list of subscriptions you have access to; select the one you'd like to work in

#### Other Commands

To set a default subscription:  
`az account set --subscription "<SubscriptionName or SubscriptionID>"`  

To view your current subscription:  
`az account show`  

To list all available subscriptions:  
`az account list --output table`

To set default location (region):  
`az configure --defaults location=canadacentral`

Set default output format:  
`az configure --defaults output=json`  
Other useful output formats include: `table`, `yaml`, `tsv`, `jsonc`

### Installing AzCopy

AzCopy is a command-line utility that you can use to copy data to and from containers and file shares in Azure Storage accounts, via easy-to-use commands that are optimized for high performance and throughput.

### Linux

```bash
# Download AzCopy
wget https://aka.ms/downloadazcopy-v10-linux

# Extract the archive
tar -xvf downloadazcopy-v10-linux

# Move AzCopy to your bin directory
sudo cp ./azcopy_linux_amd64_*/azcopy /usr/local/bin/

# Make it executable
sudo chmod +x /usr/local/bin/azcopy
```

#### macOS

```bash
# Download AzCopy
wget https://aka.ms/downloadazcopy-v10-mac

# Extract the archive
tar -xvf downloadazcopy-v10-mac

# Move AzCopy to your bin directory
sudo cp ./azcopy_darwin_amd64_*/azcopy /usr/local/bin/

# Make it executable
sudo chmod +x /usr/local/bin/azcopy
```

#### Windows

- Download the ZIP file from: [https://aka.ms/downloadazcopy-v10-windows](https://aka.ms/downloadazcopy-v10-windows)
- Extract the ZIP and add the AzCopy executable to your PATH.
