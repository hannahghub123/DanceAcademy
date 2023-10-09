from django.db import models

# Create your models here.
 
class Student(models.Model):
    username = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, default=None)
    phone = models.PositiveIntegerField()
    password = models.CharField(max_length=50, default=None)
    score = models.PositiveIntegerField(default=0)
    
