from rest_framework.serializers import ModelSerializer
from student.models import *
from tutor.api.serializers import *

class StudentSerializer(ModelSerializer):
    course = CourseSerializer() 
    class Meta:
        model = Student
        fields = "__all__"


class CoursePaymentSerializer(ModelSerializer):
    class Meta:
        model = CoursePayment
        fields = "__all__"