# -*- coding: utf-8 -*-

from flask import Blueprint, url_for, render_template, request, flash, redirect, make_response, session

import json


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
    return render_template("/login/index.html")

@login_bp.route('/login/loginCheck', methods=['POST'])
def loginCheck():
    username = request.form.get('username')
    password = request.form.get('password')
    userList = db.person.find({"name":username})
    if True :
        for i in userList:
            i2 = dict(zip(i.values(), i.keys()))
            if str(password) == str(i2.keys()[0]) and password != "":
                useRId = str(i["userid"])
    return redirect(url_for('login.hello',  user_name = useRId))
              
    
@login_bp.route("/<user_name>")
def hello(user_name):
    return '<h1>Hello, %s!</h1>' % user_name
