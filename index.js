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
	fs.writeFile('/home/fptrainnie/StaticJavis/server.js', toWriteFile);
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
	var filePath =  "/home/fptrainnie/StaticJavis/server.js";
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

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})