from flask import Flask
import flask 
import json

app= Flask(
    __name__,
    static_url_path="",
    template_folder="../UI/templates/",
    static_folder = "../UI/static/",
    )

  
app.secret_key="duw283rgdwq"

@app.route("/")
@app.route("/homepage")
def home():
    f = open('data.json')
    data = json.load(f)
    for i in data:
        print(i)
    f.close()
    return flask.render_template("homepage.html",data=data)