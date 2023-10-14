from rest_framework.views import APIView
from tutor.models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

class SignupView(APIView):
    def post(self,request):
        username=request.data.get("username")
        name=request.data.get("name")
        expertise = request.data.get("expertise")
        qualification = request.data.get("qualification")
        email=request.data.get("email")
        password=request.data.get("password")
        phone=request.data.get("phone")

        print("heyy tutor>>>>>>>>>>")

        Tutor.objects.create(username=username,name=name,expertise=expertise,qualification=qualification,email=email,phone=phone,password=password)
        tobj = Tutor.objects.get(username=username)
        serialized = TutorSerializer(tobj)

        return Response(serialized.data)
    

class LoginView(APIView):
    def post(self,request):
        
        email=request.data.get("email")
        password=request.data.get("password")
        try:
            tobj = Tutor.objects.get(email=email, password=password)
            refresh = RefreshToken.for_user(tobj)
            serialized = TutorSerializer(tobj)
            id = tobj.id
            print(tobj.id,">>>>>>>>>>>>>>>>>>...iddddd")
            if tobj.is_approved:
                return Response({"id":id,"message":"success","data":serialized.data, "refresh":str(refresh),"access":str(refresh.access_token)})
            else:
                return Response({"id":id,"message":"not approved"})
                
        except:

            return Response({"message":"Invalid credentials"})
        

class ProfileEditView(APIView):
    def post(self,request):
        id = request.data.get("id")
        print(id,"id vannu>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        username=request.data.get("username")
        name=request.data.get("name")
        expertise = request.data.get("expertise")
        qualification = request.data.get("qualification")
        email=request.data.get("email")
        password=request.data.get("password")
        phone=request.data.get("phone")

        print("heyy tutor edit profilee>>>>>>>>>>",id,username,name,expertise,qualification,email,phone,password)

        tobj = Tutor.objects.get(id=id)
        print("??????????????",tobj.name)
        tobj.username = username
        tobj.name = name
        tobj.expertise = expertise
        tobj.qualification = qualification
        tobj.email = email
        tobj.phone = phone
        tobj.password = password
        tobj.save()
        serialized = TutorSerializer(tobj)

        return Response(serialized.data)
            
    
class CourseView(APIView):
    def get(self,request):
        cobj = Course.objects.all()
        serialized = CourseSerializer(cobj,many=True)

        return Response(serialized.data)
    
class CourseStructView(APIView):
    def get(self,request,id):
        cobj = Course.objects.get(id=id)
        print(id,cobj,"MMMMMMMMMMMMMMMM")
        structobj = Course_structure.objects.filter(course=cobj)
        serialized = CourseStructSerializer(structobj,many=True)

        return Response(serialized.data)
    
class ImageSetView(APIView):
    def post(self,request):
        id=request.data.get("id")
        image=request.data.get("image")
        print(image,"Kuiii",id)

        tobj= Tutor.objects.get(id=id)
        tobj.image=image
        tobj.save()

        serialized = TutorSerializer(tobj)
        return Response({"message":"success","data":serialized.data})

