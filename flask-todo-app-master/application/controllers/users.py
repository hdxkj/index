# -*- coding: utf-8 -*-

import flask
from flask import request, redirect, flash, render_template, url_for
from application.extensions import db
from application.models import User


users_bp = flask.Blueprint(
    'users',
    __name__,
    template_folder='../templates'
)


@users_bp.route('/')
def index():
    content = '<ul>'
    users = User.query.all()  # 查询所有数据
    if not users:
        return "<p>No users exist! <a href='/adduser'>Add users first.</a></p>"

    for user in users:
        content += '<li>' + user.username + ', ' + user.email + '</li>'

    content += '</ul>'
    content += "<p><a href='/filter'>filter</a></p>"
    content += "<p><a href='/sort'>sort</a></p>"
    content += "<p><a href='/update'>update</a></p>"
    content += "<p><a href='/pagination'>pagination</a></p>"

    return content


@users_bp.route('/adduser')
def add_user():
    user1 = User('ethan', 'ethan@example.com')
    user2 = User('admin', 'admin@example.com')
    user3 = User('guest', 'guest@example.com')
    user4 = User('joe', 'joe@example.com')
    user5 = User('michael', 'michael@example.com')

    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)

    db.session.commit()

    return "<p>add succssfully! <a href='/'>Home</a></p>"


@users_bp.route('/update')
def update():
    user = User.query.filter_by(username='admin').first()
    if user is not None:
        user.email = 'admin@demo.com'
        db.session.add(user)
        db.session.commit()

    return "<p>update succssfully!"


@users_bp.route('/filter')
def filter():
    content = '<ul>'

    # filter 参数是布尔表达式
    user1 = User.query.filter(User.username=='ethan').first()

    # filter_by 参数是键值对
    user2 = User.query.filter_by(username='joe').first()

    content += '<li>' + user1.username + ', ' + user1.email + '</li>' + \
        '<li>' + user2.username + ', ' + user2.email + '</li>' + '</ul>'

    return content


@users_bp.route('/sort')
def sort():
    content = '<ul>'
    users = User.query.order_by(User.username)    # 升序排序
    # users = User.query.order_by(desc(User.username))  # 降序排序

    for user in users:
        content += '<li>' + user.username + ', ' + user.email + '</li>'

    content += '</ul>'

    return content


@users_bp.route('/pagination')
def pagination():
    content = '<ul>'

    page = 4
    per_page = 1

    offset = (page - 1) * per_page

    # 分页方法
    users = User.query.offset(offset).limit(per_page)
    # 等同于下面的 slice 方法
    # users = User.query.slice(3, 4)

    for user in users:
        content += '<li>' + user.username + ', ' + user.email + '</li>'

    content += '</ul>'

    return content
