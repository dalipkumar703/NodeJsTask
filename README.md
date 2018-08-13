<h2><b>NodeJs Task</b></h2> <br>
A Microservice app for patching document and getting image thumbnail of 50*50.<br>

<h3><b>Configure Guide</b></h3> <br>
Installing App from Github<br>
1. Git Pull(command: git pull https://github.com/dalipkumar703/NodeJsTask.git master )<br>
2. npm update<br>

Installing App from Docker<br>
 DOCKER URL- (https://hub.docker.com/r/dalipkumar703/app/)<br>
docker run image<br>
Getting Started<br>
npm start -> To start the server (then check http://localhost:3000)<br>
npm build -> To converting ES6<br>




<h3><b>API Endpoints</b></h3><br>
POST /login -> Create jwt tokens. Pass "name" and "password" in body with header content-type "application/x-www-form-urlencoded"

POST /api/json-patch/:token? -> Apply patch operation. Pass below object in body with head content-type application/json.
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

POST /api/thumbnail-generate/:token? -> Generate thumbnail of an img. Pass below object in body with header content-type application/json.
{
	"img":"https://pbs.twimg.com/media/DjwHDWxVAAA5eYQ.jpg"
}


<h3><b>Running the tests</b></h3><br>
Run "npm test" to run the tests and get test coverage results.<br>
Built With<br>
Express - The web framework used<br>
Mocha - Test framework used
