# -*- coding: utf-8 -*-

from flask import Flask, render_template
from admin import admin_bp
from login import login_bp

app = Flask(__name__)
app.secret_key = 'The quick brown fox jumps over the lazy dog'

app.register_blueprint(admin_bp)
app.register_blueprint(login_bp)


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404
    
@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5200, debug=True)
