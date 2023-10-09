from rest_framework.serializers import ModelSerializer
from tutor.models import *

class TutorSerializer(ModelSerializer):
    class Meta:
        model = Tutor
        fields = "__all__"

class CourseCatSerializer(ModelSerializer):
    class Meta:
        model = Course_category
        fields = "__all__"

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = "__all__"      

class CourseStructSerializer(ModelSerializer):
    class Meta:
        model = Course_structure
        fields = "__all__"
