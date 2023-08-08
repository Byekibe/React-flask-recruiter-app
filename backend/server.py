from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
load_dotenv()
import os
from models import create_connection, insert_into_registration, email_checker

app = Flask(__name__)
CORS(app)

PORT = os.getenv("PORT")
conn = create_connection()
cursor = conn.cursor()

@app.route("/")
def home():
    print(cursor)
    cursor.close()
    print(f"Cursor: {cursor}")
    return { "msg": "Home" }

@app.route("/register", methods=["GET", "POST"])
def register():
    username=request.json.get("username")
    email=request.json.get("mail")
    password=request.json.get("password")
    # result = email_checker(cursor, email)
    # if len(result.get("result")):
    #     return { "msg": "Email exists or user name exists" }
    # else:
    result = insert_into_registration(cursor=cursor, username=username, email=email, password=password, conn=conn)
    insert_into_registration(cursor=cursor, username=username, email=email, password=password, conn=conn)
    return { "msg": result }

@app.route("/token", methods=["GET", "POST"])
def token():
    email=request.json.get("mail")
    password=request.json.get("password")
    print(email, password)
    return {"msg": "Hey"}


if __name__=="__main__":
    app.run(port=PORT, debug=True)