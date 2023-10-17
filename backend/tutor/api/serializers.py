from rest_framework.serializers import ModelSerializer
from tutor.models import *

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = "__all__"      

class CourseStructSerializer(ModelSerializer):
    class Meta:
        model = Course_structure
        fields = "__all__"

    
class TutorSerializer(ModelSerializer):
    course = CourseSerializer()
    class Meta:
        model = Tutor
        fields = "__all__"

class VideoUploadSerializer(ModelSerializer):
    class Meta:
        model = Video_upload
        fields = '__all__'

