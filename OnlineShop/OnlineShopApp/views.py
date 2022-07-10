import json
from django.http import HttpResponse
from django.shortcuts import render, redirect
from rest_framework.response import Response
from .models import Product, Cart, Contact, Orders, Student
from .serializers import CartSerializer, ContactSerializer, OrdersSerializer, ProductSerializer, StudentSerializer, UserSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import logout, authenticate, login
from django.views.decorators.csrf import csrf_exempt

from rest_framework.authentication import BasicAuthentication


class StudentModelViewSet(viewsets.ModelViewSet):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer

class ProductModelViewSet(viewsets.ModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer

class CartModelViewSet(viewsets.ModelViewSet):
    queryset=Cart.objects.all()
    serializer_class=CartSerializer

class ContactModelViewSet(viewsets.ModelViewSet):
    queryset=Contact.objects.all()
    serializer_class=ContactSerializer

class OrdersModelViewSet(viewsets.ModelViewSet):
    queryset=Orders.objects.all()
    serializer_class=OrdersSerializer

class UserModelViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    # authentication_classes=[JWTAuthentication]
    
    authentication_classes=[BasicAuthentication]
    permission_classes=[IsAuthenticated]
    # def get_queryset(self):
    #     return User.objects.filter(user=self.request.username)

class LoginViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsAuthenticated]


@csrf_exempt
def Loginuser(request):
    response_data = {}
    if request.method=="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')
        #check if user has correct credential
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            # A backend authenticated the credentials
            
            response_data['result'] = 'valid user'
            response_data['message'] = 'valid user msg'
            return HttpResponse(json.dumps(response_data), content_type="application/json")
        else:
            # No backend authenticated the credentials
            response_data['result'] = 'invalid user'
            response_data['message'] = 'invalid user msg'
            return HttpResponse(json.dumps(response_data), content_type="application/json")
   

