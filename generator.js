const fs = require('fs')

module.exports = {
	generate: function(keywords, template) {
		var result = template.dependencies;
		for(var key in keywords){
			var action = "";
			if(keywords[key].keyword == 'listen') 
				action = template.httpListen.replace(/<httpAction>/g,keywords[key].keyword)
							.replace(/<param>/g, keywords[key].param)
			else 
				action = template.comment.replace("<httpAction>", keywords[key].keyword) 
						+ template.httpAction.replace(/<httpAction>/g,keywords[key].keyword)
							.replace(/<param>/g, keywords[key].param)
					
			result += action;
		}
		return result;
	},

	writeAndSendFile: function(result, fileName, res){
		var toWriteFile = result;
		fs.writeFile('result/'+fileName, toWriteFile);

		var filePath =  'result/'+fileName;
		fs.exists(filePath, function(exists){
	      if (exists) {     
	        res.writeHead(200, {
	          'Content-Type': 'application/octet-stream',
	          'Content-Disposition' : 'attachment; filename=server.'+fileName});
	        fs.createReadStream(filePath).pipe(res);
	      } else {
	        res.writeHead(400, {'Content-Type': 'text/plain'});
	        res.end('ERROR File does NOT Exists');
	      }
	    });

	}
	

}