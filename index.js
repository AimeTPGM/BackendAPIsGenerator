const express = require('express')
const bodyParser = require('body-parser')
const app = express()

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
	console.log(programmingLanguage)
	res.send(programmingLanguage);
})

/**
* test server
* Req: GET
* params:              
* return:
**/
app.get('/sentFile', function (req, res) {
	console.log('GET - /sentFile')
	
	var programmingLanguage = req.body.programmingLanguage;
	console.log(programmingLanguage)
	res.send(programmingLanguage);
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})