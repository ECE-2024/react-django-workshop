# Generated by Django 3.1.6 on 2021-02-15 16:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fighters', '0004_auto_20210215_0130'),
    ]

    operations = [
        migrations.RenameField(
            model_name='fighter',
            old_name='weakeness',
            new_name='weakness',
        ),
    ]
