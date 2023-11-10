from rest_framework.serializers import ModelSerializer
from student.models import *
from tutor.api.serializers import *

class StudentSerializer(ModelSerializer):
    course = CourseSerializer() 
    class Meta:
        model = Student
        fields = "__all__"


class CoursePaymentSerializer(ModelSerializer):
    structId = CourseStructSerializer() 
    studentId = StudentSerializer() 
    tutorId = TutorSerializer() 
    class Meta:
        model = CoursePayment
        fields = "__all__"

class MyNotesSerializer(ModelSerializer):
    student = StudentSerializer() 
    class Meta:
        model = MyNotes
        fields = "__all__"

class SessionAssignSerializer(ModelSerializer):
    student = StudentSerializer() 
    tutor = TutorSerializer() 
    course_struct = CourseStructSerializer() 
    class Meta:
        model = SessionAssign
        fields = "__all__"

# class ActivityTaskSerializer(ModelSerializer):
#     student = StudentSerializer() 
#     tutor = TutorSerializer() 
#     course_structure = CourseStructSerializer() 
#     class Meta:
#         model = ActivityTask
#         fields = "__all__"