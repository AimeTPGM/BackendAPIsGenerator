const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var template = {
	"dependencies" : "const express = require('express')\nconst bodyParser = require('body-parser')\nconst app = express()\napp.use(bodyParser.json())\n",
	"httpAction" : "app.<httpAction>('<param>', function (req, res) {\nres.send('<httpAction> method!');\n})\n",
	"comment" : "/**\n* Req: <httpAction>\n* params:\n* return:\n**/\n",
	"httpListen" : "app.listen(<param>, function () {\nconsole.log('App listening on port <param>!')"
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

	res.send([programmingLanguage, projectName, result]);
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})