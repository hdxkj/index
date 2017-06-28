from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/<name>')
def hello(name):
    if name == 'ethan':
        return render_template('index.html', name=name)
    else:
        return render_template('index.html', name='world')

if __name__ == "__main__":
    app.run()



@app.route('/register', methods=['POST', 'GET']):
def register():
    if request.method == 'GET':
        return 'please register!'
    elif request.method == 'POST':
        user = request.form['user']
        return 'hello', user

@app.route('/home', methods=['GET']):
def index():
    return 'hello world!'

@app.route('/register', methods=['POST', 'GET']):
def register():
    if request.method == 'GET':
        return 'please register!'
    elif request.method == 'POST':
        user = request.form['user']
        return redirect('/home')


