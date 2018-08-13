NodeJs Task
A Microservice app for patching document and getting image thumbnail of 50*50.

Configure Guide
Installing App from Github
1. Git Pull(command: git pull https://github.com/dalipkumar703/NodeJsTask.git master )
2. npm update

Installing App from Docker

Getting Started
npm start -> To start the server
npm build -> To converting ES6



API Endpoints
POST /login -> Create jwt tokens. Pass "name" and "password" in body with header content-type "application/x-www-form-urlencoded"

POST /api/json-patch/:token -> Apply patch operation. Pass below object in body with head content-type application/json.
{
	"doc":{
		"name":"Dalip",
		"profession":"Software Developer
		"nationality":"Indian"
	},
	"patch":[
		{ "op": "replace", "path": "/name", "value": "Dalip Thakkar" }
		]
}

POST /api/thumbnail-generate/:token -> Generate thumbnail of an img. Pass below object in body with header content-type application/json.
{
	"img":"https://pbs.twimg.com/media/DjwHDWxVAAA5eYQ.jpg"
}


Running the tests
Run "npm test" to run the tests and get test coverage results.
Replace "mocha" with "nyc mocha" in package.json at the key value of test for generating test coverage.("test":"mocha"->"test":"nyc mocha")
Built With
Express - The web framework used
Mocha - Test framework used
