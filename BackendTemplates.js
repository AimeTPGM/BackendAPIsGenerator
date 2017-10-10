var nodeJSTemplate = {
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

module.exports = {
  nodeJSTemplate: nodeJSTemplate
}