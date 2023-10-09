from rest_framework.serializers import ModelSerializer
from student.models import *

class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"