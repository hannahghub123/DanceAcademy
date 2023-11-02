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
    status = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.username}"
    
class CoursePayment(models.Model):
    studentId = models.ForeignKey(Student, on_delete=models.CASCADE)
    structId = models.ForeignKey(Course_structure, on_delete=models.CASCADE)
    tutorId = models.ForeignKey(Tutor, on_delete=models.CASCADE)
    razorpayId = models.CharField( max_length=250)

class MyNotes(models.Model):
    notes = models.CharField(max_length=1000,default=None)
    student = models.ForeignKey(Student, on_delete=models.CASCADE) 

    def __str__(self):
        return f"Notes - {self.student.name}"
