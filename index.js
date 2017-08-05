const express = require('express')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

/**
* test server
* Req: GET
* params:
* return:
**/
app.get('/', function (req, res) {
	console.log('GET - /')
	res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})