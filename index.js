const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
var templates = require("./BackendTemplates")

var nodeJSTemplates = templates.nodeJSTemplate

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

	if (programmingLanguage == "NodeJS+ExpressJS"){
		var result = nodeJSTemplates.dependencies;
		for(var key in keywords){

			var httpAction = "";

			if(keywords[key].keyword == 'listen'){
				httpAction = nodeJSTemplates.httpListen;
			}
			else{
				httpAction = nodeJSTemplates.httpAction;
			}

			httpAction = nodeJSTemplates.comment.replace("<httpAction>", keywords[key].keyword) 
				+ httpAction.replace(
				/<httpAction>/g,keywords[key].keyword).replace(
				/<param>/g, keywords[key].param)
			result += httpAction;
		}
		var toWriteFile = result;
		fs.writeFile('server.js', toWriteFile);

		var filePath =  "server.js";
		fs.exists(filePath, function(exists){
	      if (exists) {     
	        // Content-type is very interesting part that guarantee that
	        // Web browser will handle response in an appropriate manner.
	        res.writeHead(200, {
	          "Content-Type": "application/octet-stream",
	          "Content-Disposition" : "attachment; filename=server.js"});
	        fs.createReadStream(filePath).pipe(res);
	      } else {
	        res.writeHead(400, {"Content-Type": "text/plain"});
	        res.end("ERROR File does NOT Exists");
	      }
	    });

	}
	
})



app.listen(3001, function () {
  console.log('App listening on port 3001!')
})