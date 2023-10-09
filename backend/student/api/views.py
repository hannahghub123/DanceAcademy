from rest_framework.views import APIView
from student.models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

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
            
        


        

        