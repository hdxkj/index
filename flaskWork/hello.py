#coding:utf-8
from flask import Flask, request, session, redirect, url_for, render_template, make_response, flash

#表单类的应用
from flask_wtf import FlaskForm  
from wtforms import StringField,SubmitField  
from wtforms.validators import Required  

app = Flask(__name__)

#定义安全密钥
app.config['SECRET_KEY'] = 'hard to guess string'
#定义表单类
class NameForm(FlaskForm):  
    name=StringField('your name',validators=[Required()])  
    submit=SubmitField('Submit')  

@app.route('/',methods=['GET','POST'])  
def index():  
    form = NameForm()  
    if form.validate_on_submit():  
        old_name=session.get('name')  
        if old_name is not None and old_name != form.name.data:  
            flash('name has been changed')  
            return redirect(url_for('index'))  
        session['name']=form.name.data  
        return render_template('index.html',form=form)  
    return render_template('index.html',form=form) 

@app.route('/test')
def test():
    #user_agent = request.headers.get('User-Agent')
    #return "<p>Your browser is %s</p>" % user_agent
    return render_template('index.html')

@app.route('/cdx', methods=['GET', 'POST'])
def cdx():
    return redirect(url_for('index'))
    return render_template('index.html')

@app.route('/user/<name>')
def user(name):
    
    return '<h1>hello, %s!</h1>' % name

@app.route('/Redirect')
def Redirect():
    return url_for('user', name='href')
    #return redirect('http://www.example.com')

#自定义错误页面
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500 

@app.route('/set_cookie')  
def set_cookie():  
    response=make_response('Hello World');  
    response.set_cookie('Name','Hyman')  
    return response  
@app.route('/get_cookie')  
def get_cookie():  
    name=request.cookies.get('Name')  
    return name
@app.route('/del_cookie')  
def del_cookie():  
    response=make_response('delete cookie')  
    response.set_cookie('Name','',expires=0)  
    return response  
@app.route('/del_cookie2')  
def del_cookie2():  
    response=make_response('delete cookie2')  
    response.delete_cookie('Name')  
    return response    


if __name__ == '__main__':
    app.debug = True
    app.run()