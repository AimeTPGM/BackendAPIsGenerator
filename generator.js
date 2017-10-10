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
	}
	

}