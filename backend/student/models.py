from django.db import models
from tutor.models import *

# Create your models here.
 
class Student(models.Model):
    username = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, default=None)
    phone = models.PositiveIntegerField()
    password = models.CharField(max_length=50, default=None)
    score = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to="student-images",null=True,blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE,null=True,blank=True,default=1)

    def __str__(self):
        return f"{self.username}"