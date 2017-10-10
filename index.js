const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const templates = require("./BackendTemplates")
const generator = require("./generator")

var nodeJSTemplate = templates.nodeJSTemplate
var pythonFlaskTemplate = templates.pythonFlaskTemplate

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json())

/**
* test server
* Req: POST
* params:              
* return:
**/
app.post('/gen', function (req, res) {
	console.log('POST - /gen')
	var programmingLanguage = req.body.programmingLanguage;
	var projectName = req.body.project;
	var keywords = req.body.keywords

	if (programmingLanguage == "NodeJSExpressJS"){
		var result = generator.generate(keywords, nodeJSTemplate);
		generator.writeAndSendFile(result, "py", res);
	}

	else if(programmingLanguage == "PythonFlask"){
		var result = generator.generate(keywords, pythonFlaskTemplate);
		generator.writeAndSendFile(result, "py", res);
	}
	
})



app.listen(3001, function () {
  console.log('App listening on port 3001!')
})