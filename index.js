const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()

var template = {
	"dependencies" : "const express = require('express') const bodyParser = require('body-parser') const app = express() app.use(bodyParser.json())",
	"httpAction" : "app.<httpAction>('<param>', function (req, res) { console.log('<httpAction> – <param>')res.send('<httpAction> method!');})",
	"comment" : "/** * Req: <httpAction> * params: * return: **/",
	"httpListen" : "app.listen(<param>, function () {console.log('App listening on port <param>!')})"
}

app.use(bodyParser.json())

/**
* test server
* Req: GET
* params:              
* return:
**/
app.post('/generator', function (req, res) {
	console.log('POST - /generator')
	var programmingLanguage = req.body.programmingLanguage;
	var projectName = req.body.project;
	var keywords = []

	var result = template.dependencies;
	for(var key in req.body.keywords){

		var httpAction = "";

		if(req.body.keywords[key].keyword == 'listen'){
			httpAction = template.httpListen;
		}
		else{
			httpAction = template.httpAction;
		}

		httpAction = template.comment.replace("<httpAction>", req.body.keywords[key].keyword) 
			+ httpAction.replace(
			/<httpAction>/g,req.body.keywords[key].keyword).replace(
			/<param>/g, req.body.keywords[key].param)
		result += httpAction;
	}
	var toWriteFile = result;
	fs.writeFile('server.js', toWriteFile);
	res.send(result);
})

/**
* test server
* Req: GET
* params:              
* return:
**/
app.get('/sentFile', function (req, res) {
	console.log('GET - /sentFile')
	res.send(programmingLanguage);
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})