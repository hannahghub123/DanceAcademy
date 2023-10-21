from django.db import models
import cloudinary
from cloudinary.models import CloudinaryField

# Create your models here.

# class Course_category(models.Model):
#     title = models.CharField(max_length=100)
#     description = models.CharField(max_length=250)

#     def __str__(self):
#         return f"{self.title}"

class Course(models.Model):
    COURSE_STATUS_CHOICES = (
        ("Course Available","Course Available"),
        ("Seats Filled","Seats Filled")
    )
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    status = models.CharField(max_length=50,choices=COURSE_STATUS_CHOICES,default="Course Available")
    image = models.CharField(max_length=500,default="img")

    def __str__(self):
        return f"{self.title}"

class Course_structure(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    duration = models.PositiveIntegerField()
    fees = models.PositiveIntegerField()


class Tutor(models.Model):
    username = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    expertise = models.PositiveIntegerField(blank=True, null=True)
    email = models.CharField(max_length=50, default=None)
    phone = models.PositiveIntegerField()
    password = models.CharField(max_length=50, default=None)
    is_approved = models.BooleanField(default=False)
    course = models.ManyToManyField(Course)
    image = models.ImageField(upload_to="tutor-uploads", max_length=500,null=True,blank=True)
    # v_upload = models.ManyToManyField(Video_upload,blank=True)

    def __str__(self):
        return f"{self.username}"
    

class Video_upload(models.Model):
    v_upload = CloudinaryField("Video uploads",max_length=500,null=True,blank=True,  folder='DanceAcademy/video-uploads')
    up_time = models.DateTimeField()
    desc = models.CharField(max_length=50)
    tutors = models.ManyToManyField(Tutor, related_name='videos', blank=True)

    def __str__(self):
        return f"Video Upload {self.id}"
    
class Resume_List(models.Model):
    res_file = CloudinaryField("Resume uploads",max_length=500,null=True,blank=True,  folder='DanceAcademy/resume-uploads')
    up_time = models.DateTimeField()
    tutors = models.ManyToManyField(Tutor, related_name='resume', blank=True)

    def __str__(self):
        return f"Resume Upload {self.id}"

    
