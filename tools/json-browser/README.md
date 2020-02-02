# JSON Browser

This is a tool to view and browse json in a useful way. Good for those who need to analyse a lot of data stored in a JSON format.

Hosted at http://json-browser.holistic-toolbox.com
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
To deploy this tool you must ensure you have the firebase CLI set up on your machine.
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
- allow a URL query to provide the JSON string so you can be linked here from another app