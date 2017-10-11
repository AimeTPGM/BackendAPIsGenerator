# Backend APIs Generator

*This project is on improvement and contributions are all welcome! :)*

This is a tool for generating a simple file of backend APIs. The project is constructed as follow:

```
|_ index.js                 // main
|_ BackendTemplates.js      // storing templates of different programming laguages, framework and syntax
|_ generator.js             // for generating code from template
|_ result
|____ server.js             // result of NodeJS ExpressJS from the generator
|____ server.py             // result of Python Flask from the generator
|____ RestAPIs.java	        // result of REST file in Java Spring JAX-RS from the generator
```

## Installation

```
$git clone https://github.com/AimeTPGM/BackendAPIsGenerator.git

$node index.js
```

the app will be running on localhost:3000

## Usage

you can use [Postman - Google Chrome Extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) for sending http POST request to the server

or

you can develop your own client-side for sending http POST request to the server

the generator is available on ``` http://localhost:3000/gen/ ```

with JSON request body as following format

```
"programmingLanguage" : "NodeJSExpressJS",    // selected programming language and framework (see the available options below)

"keywords" : [
	{
		"keyword" : "get",
		"param" : "user"
	},
	{
	    "keyword" : "post",
	    "param" : "user/new"
	},
	{
	    "keyword" : "listen",
	    "param" : "3000"
	}
]
```

### available programming language and framework

"NodeJSExpressJS" => for generating NodeJS ExpressJS backend

"PythonFlask" => for generating Python Flask backend

"JavaSpringJAXRS" => for generating a file that provides RESTful APIs in JAVA Spring Framework (this is a java file that can be used in created JAX-RS project like [this one](https://github.com/AimeTPGM/HelloWorldJavaMicroService). You can check it in HelloWorldJavaMicroService/src/main/java/main/rest/

## To use the generated Backend files

After the generating, files in result can be use as a part in a particular project, for example;

if you would like to make a NodeJS ExpressJS server from the generated file

```

$mkdir MyServer

$cp ~/path/to/BackendAPIsGenerator ~/path/to/MyServer

$cd ~/path/to/MyServer

$npm init

```

then it will lead you to build package.json file. After that use the following commands:

```
$npm install nodejs --save

$npm install express --save

$npm install body-parser --save

```

then you can run the server by using:

```

node server.js

```

it will display ``` App listening on port 3000! ``` then you can go through server.js file for editing the backend server as you want!

for others example, I'll add it soon :)

# Enjoy Hacking!