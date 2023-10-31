from rest_framework.views import APIView
from student.models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from tutor.api.serializers import *

from cloudinary import api

class SignupView(APIView):
    def post(self,request):
        username=request.data.get("username")
        name=request.data.get("name")
        # score=request.data.get("score")
        email=request.data.get("email")
        password=request.data.get("password")
        repassword=request.data.get("repassword")
        phone=request.data.get("phone")
        
        if password==repassword:
            Student.objects.create(username=username,name=name,email=email,phone=phone,password=password)
            stdobj = Student.objects.get(username=username)
            serialized = StudentSerializer(stdobj)

            return Response({"message":"success" ,"data":serialized.data})
        
        else:
            return Response({"error":"passwords doesn't match"})
    

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
        
class StudentDetailsView(APIView):
    def get(self,request):
        studentobj = Student.objects.all()
        serialized = StudentSerializer(studentobj,many=True)

        return Response(serialized.data)
            
        
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
        course = request.data.get("course")
        email=request.data.get("email")
        password=request.data.get("password")
        phone=request.data.get("phone")
        cobj = Course.objects.get(id=course)
        print("heyy std edit profilee>>>>>>>>>>",id,username,name,score,email,phone,password,"???????",course,"???????????????")

        try:
            stdobj = Student.objects.get(id=id)
            stdobj.username = username
            stdobj.name = name
            stdobj.score = score
            stdobj.course = cobj 
            stdobj.email = email
            stdobj.phone = phone
            stdobj.password = password
            stdobj.save()

            # c_serialized = CourseSerializer(stdobj.course), "course": c_serialized.data}
            serialized = StudentSerializer(stdobj)
            print(serialized.data,"hi data")
            return Response({"data": serialized.data} )
        except Student.DoesNotExist:
            return Response({"error": "Student not found"})

class VideoListView(APIView):
    def post(self,request):
        tutor_id = request.data.get("id")
        print(tutor_id,":???????>>>>>>>>>>>>")
        try:
            tobj = Tutor.objects.get(id=tutor_id)
        except Tutor.DoesNotExist:
            return Response({"error":"Tutor not found"})
        

        videos = Video_upload.objects.filter(tutors=tobj)
        print(videos,"####@@@@@@@in stddd")

        video_urls = [
            {
                'v_upload':video.v_upload.url,
                'up_time':video.up_time,
                'desc':video.desc,
            }
            for video in videos
        ]


        return Response({"message":"success","video_urls":video_urls})


class CoursePaymentView(APIView):
    def post(self,request):
        studentId = request.data.get("studentId")
        structId = request.data.get("structId")
        tutorName = request.data.get("tutorName")
        razorpayId = request.data.get("razorpayId")

        stdobj = Student.objects.get(id=studentId)
        structobj = Course_structure.objects.get(id=structId)
        tobj = Tutor.objects.get(name=tutorName)

        payobj = CoursePayment.objects.create(
            studentId=stdobj,
            structId=structobj,
            tutorId=tobj,
            razorpayId=razorpayId
        )

        print(payobj,"MJJJJJJJJJJJ")

        serialized = CoursePaymentSerializer(payobj)
        return Response(serialized.data)

class PayDetailsView(APIView):
    def post(self,request):
        tutorId = request.data.get("id")

        payobj = CoursePayment.objects.filter(tutorId_id=tutorId)
        print(payobj.values(),"#########3")

        serialized = CoursePaymentSerializer(payobj,many=True)

        return Response({"paydata":serialized.data})
    
class StatusBlockview(APIView):
    def post(self,request):
        id = request.data.get("id")
        stdobj = Student.objects.get(id=id)
        curr_status = stdobj.status
        
        if curr_status == False:
            stdobj.status = True
        # else:
        #     stdobj.status = True

        print(stdobj.status,"$$$$$$$$$",stdobj.name)
        stdobj.save()

        serialized = StudentSerializer(stdobj)

        return Response({"message":"status-block updated","data":serialized.data})
    
class StatusUnblockview(APIView):
    def post(self,request):
        id = request.data.get("id")
        stdobj = Student.objects.get(id=id)
        curr_status = stdobj.status
        
        if curr_status == True:
            stdobj.status = False
        # else:
        #     stdobj.status = True

        print(stdobj.status,"$$$$$$$$$",stdobj.name)
        stdobj.save()

        serialized = StudentSerializer(stdobj)

        return Response({"message":"status-unblock updated","data":serialized.data})

        
        