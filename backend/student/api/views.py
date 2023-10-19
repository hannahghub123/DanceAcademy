from rest_framework.views import APIView
from student.models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from tutor.api.serializers import *

class SignupView(APIView):
    def post(self,request):
        username=request.data.get("username")
        name=request.data.get("name")
        score=request.data.get("score")
        email=request.data.get("email")
        password=request.data.get("password")
        phone=request.data.get("phone")

        Student.objects.create(username=username,name=name,score=score,email=email,phone=phone,password=password)
        stdobj = Student.objects.get(username=username)
        serialized = StudentSerializer(stdobj)

        return Response(serialized.data)
    

class LoginView(APIView):
    def post(self,request):
        username=request.data.get("username")
        password=request.data.get("password")
        try:
            stdobj = Student.objects.get(username=username, password=password)
            refresh = RefreshToken.for_user(stdobj)
            serialized = StudentSerializer(stdobj)
            return Response({"message":"success","data":serialized.data, "refresh":str(refresh),"access":str(refresh.access_token)})
                
        except:

            return Response({"message":"Invalid credentials"})
            
        
class ImageSetView(APIView):
    def post(self, request):
        id=request.data.get("id")
        image=request.data.get("image")
        # print(image,"Kuiii",id)

        sobj= Student.objects.get(id=id)
        sobj.image=image
        sobj.save()

        serialized = StudentSerializer(sobj)
        return Response({"message":"success","data":serialized.data})

class ProfileEditView(APIView):
    def post(self,request):
        id = request.data.get("id")
        print(id,"id vannu>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        username=request.data.get("username")
        name=request.data.get("name")
        score = request.data.get("score")
        courseid = request.data.get("course")
        email=request.data.get("email")
        password=request.data.get("password")
        phone=request.data.get("phone")
        # cobj = Course.objects.filter(id=courseid)
        print("heyy std edit profilee>>>>>>>>>>",id,username,name,score,email,phone,password,"???????")

        try:
            stdobj = Student.objects.get(id=id)
            stdobj.username = username
            stdobj.name = name
            stdobj.score = score
            stdobj.course = Course.objects.get(id=courseid)  
            stdobj.email = email
            stdobj.phone = phone
            stdobj.password = password
            stdobj.save()

            c_serialized = CourseSerializer(stdobj.course)
            serialized = StudentSerializer(stdobj)

            return Response({"data": serialized.data, "course": c_serialized.data})
        except Student.DoesNotExist:
            return Response({"error": "Student not found"})






        