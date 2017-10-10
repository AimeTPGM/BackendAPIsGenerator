from flask import Flask
app = Flask(__name__)

##########
# Description: 
# Req: get
# Params:
# Return:
##########
@app.route("/test")
def test()
	return

##########
# Description: 
# Req: post
# Params:
# Return:
##########
@app.route("/lol")
def lol()
	return

if __name__ == "__main__":
	  app.run(host='0.0.0.0',port = 3000, debug=True)