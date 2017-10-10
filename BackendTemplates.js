var nodeJSTemplate = {
	"dependencies" :  "const express = require('express')" + "\n" +
									"const bodyParser = require('body-parser')" + "\n" +
									"const app = express()" + "\n" +
									"app.use(bodyParser.json())" + "\n\n",

	"httpAction" :  "\napp.<httpAction>('/<param>', function (req, res) {" + "\n" +
									"  console.log('<httpAction> – <param>')" + "\n" +
									"  res.send('<httpAction> method!');" + "\n" +
									"})" + "\n",
	"comment" : "\n/**" + "\n" + 
				"* Description: " + "\n" +
				"* Req: <httpAction>" + "\n" +
				"* Params:" + "\n" +
				"* Return:" + "\n" +
				"**/",

	"httpListen" :  "\n\napp.listen(<param>, function () {" + "\n" +
					"  console.log('App listening on port <param>!')" + "\n" +
					"})"
}

var pythonFlaskTemplate = {
	"dependencies" :    "from flask import Flask"+ "\n" +
						"app = Flask(__name__)",

	"httpAction" :  "@app.route(\"/<param>\")"+ "\n" +
					"def <param>()"+ "\n" +
					"\treturn",

	"comment" : "\n\n##########" + "\n" + 
				"# Description: " + "\n" +
				"# Req: <httpAction>" + "\n" +
				"# Params:" + "\n" +
				"# Return:" + "\n" +
				"##########" + "\n",

	"httpListen" :  "\n\nif __name__ == \"__main__\":" + "\n" +
					"\t  app.run(host='0.0.0.0',port = <param>, debug=True)"
}

var javaSpringJAXRSTemplate = {
	"dependencies" : 	"import javax.inject.Named;"+ "\n" +
						"import javax.ws.rs.Consumes;"+ "\n" +
						"import javax.ws.rs.GET;"+ "\n" +
						"import javax.ws.rs.POST;"+ "\n" +
						"import javax.ws.rs.Path;"+ "\n" +
						"import javax.ws.rs.Produces;"+ "\n" +
						"import javax.ws.rs.core.MediaType;"+ "\n" +
						"import javax.ws.rs.core.Response;"+ "\n" +
						"\n\n@Named"+ "\n" +
						"@Path(\"/\")"+ "\n" +
						"public class RestAPIs {",

	"httpAction" : 		"\n\t@<httpAction>"+ "\n" +
						"\t@Path(\"<param>\")"+ "\n" +
						"\t@Produces(MediaType.APPLICATION_JSON)"+ "\n" +
						"\tpublic Response <param>() {"+ "\n" +
						"\t\treturn Response.status(200).build();"+ "\n" +
						"\t}",

	"comment" : 		"\n\t/**" + "\n" + 
						"\t* Description: " + "\n" +
						"\t* Req: <httpAction>" + "\n" +
						"\t* Params:" + "\n" +
						"\t* Return:" + "\n" +
						"\t**/",

	"httpListen" : 		"\n}"

}

module.exports = {
  nodeJSTemplate: nodeJSTemplate,
  pythonFlaskTemplate: pythonFlaskTemplate,
  javaSpringJAXRSTemplate: javaSpringJAXRSTemplate
}