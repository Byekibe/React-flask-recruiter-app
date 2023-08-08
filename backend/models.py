import mysql.connector
from mysql.connector import errorcode
import os

user = os.getenv("USER")
host = os.getenv("HOST")
password = os.getenv("PASSWORD")
db = os.getenv("DATABASE")

def create_connection():
  try:
      conn = mysql.connector.connect(user=user, host=host, password=password, database=db)
  except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
      print("Something is wrong with your user name or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
      print("Database does not exist")
    else:
      print(err)

  return conn


# def create_register_table(cursor):
#     try:
#         cursor.execute("""
#                        CREATE TABLE registration(
#                           id INT NOT NULL AUTO_INCREMENT, 
#                           username VARCHAR(100) NOT NULL UNIQUE,
#                           email VARCHAR(100) UNIQUE,
#                           password VARCHAR(250) NOT NULL
#                           PRIMARY KEY (id)
#                        )""")
#     except mysql.connector.Error as err:
#         print("Failed creating database: {}".format(err))
#         exit(1)

def insert_into_registration(cursor, username, email, password, conn):
  try:
    query = ("INSERT INTO registration (username, email, password) VALUES (%s, %s, %s)")
    query_vals = (username, email, password)
    cursor.execute(query, query_vals)
    conn.commit()
    print("Inserted successfully")
  except mysql.connector.Error as err:
    print(err.errno)
    return err.errno
  
def email_checker(cursor, email):
  try:
    query = ("SELECT email FROM registration WHERE email=%s")
    query_vals = (email,)
    cursor.execute(query, query_vals)
    my_result = cursor.fetchall()
  except mysql.connector.Error as err:
    return err.errno

  return { "result": my_result}



# CREATE TABLE registration(id INT NOT NULL AUTO_INCREMENT, username VARCHAR(100) NOT NULL UNIQUE,email VARCHAR(100) UNIQUE,password VARCHAR(250) NOT NULLPRIMARY KEY (id))