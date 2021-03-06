# Website
This is the homepage for all Holistic Toolbox tools.

## Factsheet
| **Category**            | **Value**                    |
|-------------------------|----------------------------- |
| **Project Type**        | Website: Web App             |
| **Live URL**            | https://holistic-toolbox.com |
| **Firebase Site Name**  | holistic-toolbox             |

## Development
To develop for this project:
1. Install dependencies
	```
	npm install
	```
2. Host the project locally in development mode
	```
	npm run serve
	```

## Deployment
Deployment for this project is handled by our [Github workflow](/.github/workflows/deploy-on-push-to-master) on merge into the master branch.

Manual deployment is not recommended but in case we ever need to do the following on a machine with the firebase cli installed.

1. Build the project
	```
	npm run build
	```
2. Deploy the project
	```
	firebase deploy
	```