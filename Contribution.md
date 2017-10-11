# Contribution Guideline

Hello, guys! I'm glad you're here!

Please check [README](README.md) first to understand how this project works.

If you have any question, feel free to ask.

# AS-IS

This generator is able to generate 3 templates of different backend APIs, those are

- NodeJS ExpressJS
- Python Flask
- Java Spring JAX-RS

# TO-BE

We could add more backend technologies to generate a simple backend templates of that programming language and framework you selected.

# How to contribute

1. create a template of new programming language and framework you selected in BackendTemplates.js

```
var programmingLanguageFrameworkTemplate = {
	"dependencies" : "",               // for generating dependencies to be added in the server file
	"httpAction" : "",                 // for generating RESTful API; where <httpAction> will be replaced by GET, POST, PUT and DELETE and <param> will be replaced by route of that APIs
	"comment" : "",                    // for generating comment on top of each RESTful API
	"httpListen" : ""                  // for generating listen port where the app is running on; <param> will be replaced by port number
}
...
module.exports = {
	...,
	programmingLanguageFrameworkTemplate : programmingLanguageFrameworkTemplate       // export the new template
}
```

2. in index.js, method POST /gen, add another else if for the 

```
var programmingLanguageFrameworkTemplate = templates.programmingLanguageFrameworkTemplate     // import the new template
...
	else if(programmingLanguage == "ProgrammingLanguageFramework"){
		var result = generator.generate(keywords, programmingLanguageFrameworkTemplate);
		generator.writeAndSendFile(result, "output.fileType", res);
	}
...
```

where ```programmingLanguageFrameworkTemplate``` is the template you created on step 1

and ```output.fileType``` is the output file that will be written and sent in response

then send me your PR. I'll review and merge it ASAP!

# Enjoy Hacking!