# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from . import docs
 
def index(request):
    user1 = docs.User(
        username='Perchouli',
        website='http://dmyz.org', 
        tags = ['Web','Django','JS']
    )
    user1.save()
    Oid = user1.id
    return HttpResponse(Oid)