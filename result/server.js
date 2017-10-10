const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())


/**
* Description: 
* Req: get
* Params:
* Return:
**/
app.get('/test', function (req, res) {
  console.log('get – /test')
  res.send('get method!');
})

/**
* Description: 
* Req: post
* Params:
* Return:
**/
app.post('/lol', function (req, res) {
  console.log('post – /lol')
  res.send('post method!');
})


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})