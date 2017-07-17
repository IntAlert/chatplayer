# ChatPlayer


Built on react-boilerplate

# Development
1. `npm start`

# Deployment
1. `az login`
2. `npm run build`
3. `git push azure master`

# Deployment from scratch
cf. https://docs.microsoft.com/en-us/azure/app-service-web/app-service-web-get-started-nodejs
1. `az login`
2. Configure a deployment user: `az appservice web deployment user set --user-name ***`
3. Enter deployment user password
4. Create a resource group: `az group create --name ChatPlayerRG --location westeurope`
5. Create FREE Azure App Service plan: `az appservice plan create --name quickStartPlan --resource-group ChatPlayerRG --sku FREE`
6. Create a web app: `az appservice web create --name chatplayer --resource-group ChatPlayerRG --plan quickStartPlan`
7. Configure local Git deployment: `az appservice web source-control config-local-git --name chatplayer --resource-group ChatPlayerRG --query url --output tsv`
8. Add Git Remote: `git remote add azure https://chatplayer@chatplayer.scm.azurewebsites.net/chatplayer.git`
9. Update Application Settings: `az appservice web config appsettings update --name chatplayer --resource-group ChatPlayerRG --settings NODE_ENV=production`