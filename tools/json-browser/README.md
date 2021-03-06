# JSON Browser
This is a tool to view and browse json in a useful way. Good for those who need to analyse a lot of data stored in a JSON format.

## Factsheet
| **Category**            | **Value**                                  |
|-------------------------|--------------------------------------------|
| **Project Type**        | Tool: Web App                              |
| **Live URL**            | https://json-browser.holistic-toolbox.com  |
| **Firebase Site Name**  | json-browser                               |
| **Unique Dependencies** | vue-json-pretty, vue-router, vue-clipboard |

## Functionality
Along with JSON browsing, this tool supports:
- loading JSON in from the url query `JSON`
- routing, although still one page this tool using routing to access the url query

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

## Road Map
- load JSON data from http source

## Bugs
- get shareable link doesn't work for multi line JSONs