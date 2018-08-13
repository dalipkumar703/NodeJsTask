NodeJs Task
A Microservice app for patching document and getting image thumbnail of 50*50.

Configure Guide
Installing
npm install -> to install all the dependencies
Getting Started
npm start -> to start the server




API Endpoints
/login -> to fetch jwt tokens

/api/json-patch/:token -> to patch any document

/api/thumbnail-generate/:token -> to get thumbnail of an image-url


Running the tests
Run "npm test" to run the tests and get test coverage results.

Built With
Express - The web framework used
Mocha - Test framework used
