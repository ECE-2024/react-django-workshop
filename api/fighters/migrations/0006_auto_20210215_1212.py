# Generated by Django 3.1.6 on 2021-02-15 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fighters', '0005_auto_20210215_1155'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fighter',
            name='description',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
