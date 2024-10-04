
# Azure ARM Template for Storage Account and Web App Deployment

This project provides an ARM template to deploy the following Azure resources:

1. **Azure Storage Account** (Free Tier)
2. **Azure Web App** (Free Tier)

## Structure

- **`azuredeploy.json`**: ARM template for deploying resources.
- **`azuredeploy.parameters.json`**: Parameters file for the ARM template.
- **`README.md`**: Documentation on how to use this deployment.

## Prerequisites

- An active Azure subscription.
- Permission to create resources in the selected resource group.

## Deployment Steps
   Make sure you're logged into your Azure account and have the correct subscription set up, then run:
   
- `az deployment group create --resource-group <your-resource-group> --template-file azuredeploy.json --parameters azuredeploy.parameters.json`


## Parameters

The ARM template uses parameters to customise the deployment. The parameters are defined in the `azuredeploy.parameters.json` file:

- **`storageAccountName`**: The name of the storage account (e.g. "mystoragemayerhofer").
- **`webAppName`**: Name of the web application (e.g. "myappmayerhofer").
- **`location`**: Azure region where resources will be deployed (e.g. "northeurope").
- **`appServicePlanName`**: Name of the App Service Plan for the web application (e.g. "myserviceplan").
