const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()

var template = {
	"dependencies" :  "const express = require('express')" + "\n" +
									  "const bodyParser = require('body-parser')" + "\n" +
										"const app = express()" + "\n" +
										"app.use(bodyParser.json())" + "\n\n",
	"httpAction" :  "app.<httpAction>('<param>', function (req, res) {" + "\n" +
									"  console.log('<httpAction> – <param>')" + "\n" +
									"  res.send('<httpAction> method!');" + "\n" +
									"})" + "\n",
	"comment" : "\n/**" + "\n" + 
							"* Description: " + "\n" +
							"* Req: <httpAction>" + "\n" +
							"* Params:" + "\n" +
							"* Return:" + "\n" +
							"**/" + "\n",
	"httpListen" :  "app.listen(<param>, function () {" + "\n" +
									"  console.log('App listening on port <param>!')" + "\n" +
									"})"
}

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
	res.send([programmingLanguage, projectName, ""+result]);
})

/**
* test server
* Req: GET
* params:              
* return:
**/
app.get('/sentFile', function (req, res) {
	console.log('GET - /sentFile')
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
	// res.send(programmingLanguage);
})

/**
* test server
* Req: GET
* params:              
* return:
**/
app.post('/gen', function (req, res) {
	console.log('POST - /gen')
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
})



app.listen(3001, function () {
  console.log('App listening on port 3001!')
})