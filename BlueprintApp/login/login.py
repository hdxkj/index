# -*- coding: utf-8 -*-

from flask import Blueprint, url_for, render_template, request, flash, redirect, make_response, session
import json #解析json所用库

import pymongo
db = pymongo.MongoClient('localhost', 27017).test


#定义蓝图
login_bp = Blueprint(
    'login', 
    __name__,
    template_folder='../templates',
)

@login_bp.route('/login')
def index():
    #for i in db.person.find():
    #    print i
    #return ("success")
    return render_template("/login/index.html")
   


@login_bp.route('/login/loginCheck', methods=['POST'])
def loginCheck():
    username = request.form.get('username')
    password = request.form.get('password')
    idNum = ""
    userList = db.person.find({},{"name":username,"password":password})
    for username in userList:
        print username
        idNum = username["_id"]
        print idNum
    return(idNum)
   
   
    



'''
@login_bp.route('/checkLogin', methods=['POST'])
def checkLogin():
    # password = request.form.get('password')
    # username = request.args.get('username')
 
    data = json.loads(request.form.get('data'))
    username = data['username']
    password = data['username']
    print (username)
    print (password)
    return "46575"
'''