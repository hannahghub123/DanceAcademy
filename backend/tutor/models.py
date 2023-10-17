from django.db import models

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

class Video_upload(models.Model):
    v_upload = models.FileField(upload_to="video-uploads",max_length=500,null=True,blank=True)
    up_time = models.DateTimeField()
    desc = models.CharField(max_length=50)


class Tutor(models.Model):
    username = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    expertise = models.PositiveIntegerField(blank=True, null=True)
    email = models.CharField(max_length=50, default=None)
    phone = models.PositiveIntegerField()
    password = models.CharField(max_length=50, default=None)
    is_approved = models.BooleanField(default=False)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="tutor-uploads", max_length=500,null=True,blank=True)
    v_upload = models.ManyToManyField(Video_upload,blank=True)

    def __str__(self):
        return f"{self.username}"
    
