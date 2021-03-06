# Generated by Django 3.1.6 on 2021-02-15 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fighter',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=100)),
                ('health', models.IntegerField()),
                ('attack', models.IntegerField()),
                ('speed', models.IntegerField()),
                ('fighter_type', models.IntegerField(choices=[(0, 'Water'), (1, 'Earth'), (2, 'Fire'), (3, 'Air')])),
                ('weakeness', models.IntegerField(choices=[(0, 'Water'), (1, 'Earth'), (2, 'Fire'), (3, 'Air')])),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-datetime_created'],
            },
        ),
    ]
