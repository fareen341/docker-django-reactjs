# Generated by Django 2.2.12 on 2022-06-10 03:53

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('OnlineShopApp', '0003_brand_cart_color_contact_orders_product_size'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Student',
        ),
        migrations.DeleteModel(
            name='Teacher',
        ),
        migrations.AlterField(
            model_name='product',
            name='date',
            field=models.DateField(default=datetime.datetime(2022, 6, 10, 3, 53, 42, 779978, tzinfo=utc)),
        ),
    ]
