# Generated by Django 2.2.12 on 2022-06-18 05:52

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('OnlineShopApp', '0005_auto_20220610_0450'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='date',
            field=models.DateField(default=datetime.datetime(2022, 6, 18, 5, 52, 21, 710097, tzinfo=utc)),
        ),
    ]