from rest_framework import serializers
from .models import Color, Product, Cart, Contact, Orders, Student
from django.contrib.auth.models import User


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    # color = serializers.CharField(source='color.color')
    color_name = serializers.CharField(source='color')
    prod_size = serializers.CharField(source='size')
    prod_brand = serializers.CharField(source='brand')

    class Meta:
        model = Product
        fields = ('id','product_group_name', 'color_name', 'display_product', 'product_name', 
        'regular_price', 'sale_price','sale_last_date','product_image','product_img1','product_img2',
        'product_img3','date','product_desc','prod_size', 'product_belongs', 'prod_brand')
    
    # def to_representation(self, instance):
    #     rep = super(ProductSerializer, self).to_representation(instance)
    #     rep['color'] = instance.color
    #     return rep

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model =Cart
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model =Contact
        fields = '__all__'

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    
    # def create(self, validated_data):
    #     return User.objects.create_user(**validated_data)
