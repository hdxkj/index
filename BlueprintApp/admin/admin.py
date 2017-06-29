# -*- coding: utf-8 -*-

from flask import Blueprint, url_for, render_template, request, flash, redirect

admin_bp = Blueprint(
    'admin', 
    __name__,
    template_folder='../templates',
)


@admin_bp.route('/admin', methods=['GET'])
def index():
    return render_template('admin/index.html')


