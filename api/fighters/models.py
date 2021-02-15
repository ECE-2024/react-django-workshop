from django.db import models

FIGHTER_TYPE_CHOICES = [(0, "Water"), (1, "Earth"), (2, "Fire"), (3, "Air")]

# Create your models here.
class Fighter(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    health = models.IntegerField()
    attack = models.IntegerField()
    speed = models.IntegerField()
    fighter_type = models.IntegerField(choices=FIGHTER_TYPE_CHOICES)
    weakeness = models.IntegerField(choices=FIGHTER_TYPE_CHOICES)
    datetime_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-datetime_created"]
