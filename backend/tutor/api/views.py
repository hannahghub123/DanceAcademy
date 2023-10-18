from rest_framework.views import APIView
from tutor.models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.utils import timezone
from rest_framework import status

import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config(
    cloud_name="dhclqk43b",
    api_key="518455332798936",
    api_secret="B9sKOi_eENWKswo6l2j_kCaBxIs",
)

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
    
class CourseDetailsView(APIView):
    def get(self,request,id):
        cobj = Course.objects.get(id=id) 
        serialized = CourseSerializer(cobj)

        return Response(serialized.data)
    
class TutorView(APIView):
    def get(self,request,id):
        cobj = Course.objects.get(id=id) 
        tobj = Tutor.objects.filter(course=cobj)
        print(tobj,"$tutor obj",cobj)
        serialized = TutorSerializer(tobj,many=True)

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


# class VideoUploadView(APIView):
#     def post(self, request):

#         try:
            # video_file = request.FILES.get("video")  # Replace with how you obtain the video file
            # video = Video_upload(v_upload=video_file, up_time=timezone.now(), desc="Description here")
            # video.save()
            # print(video_file,"$$$$$$$$$$$$$$$$$$$")
            # print(video,"##########")

            # tutor_id = request.data.get('id')
            # tutor = Tutor.objects.get(id=tutor_id)
            # tutor.v_upload.add(video)
            # print(tutor.v_upload,"??????????????????/////////////")

            # video = request.FILES.get('video')
            # if video:
                # Upload the video to Cloudinary
                # upload_result = cloudinary.uploader.upload(video)
                # video_url = upload_result['secure_url']
                # return Response({'video_url': video_url})


            # serialized = TutorSerializer(tutor)
            # return Response({"message": "success", "data": serialized.data})
        # except Tutor.DoesNotExist:
        #     return Response({"message": "Tutor not found."}, status=status.HTTP_404_NOT_FOUND)


from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from cloudinary.uploader import upload


class VideoUploadView(APIView):
    # parser_classes = (FileUploadParser,)

    def post(self, request,id):
        # if 'file' not in request.data:
        #     return Response({'error': 'No file part'})

        file = request.data.get("video")

        tobj = Tutor.objects.get(id=id)
        print(tobj,"?????????????tobj ")

        if file.content_type.split('/')[0] != 'video':
            return Response({'error': 'File must be a video'})

        # Create a Video_upload instance with the Cloudinary URL
        result = upload(file, resource_type="video",folder="DanceAcademy/video-uploads")

        video_upload = Video_upload(
            v_upload=result['secure_url'],  # Store the Cloudinary URL
            up_time=timezone.now(),
            desc=request.data.get('description', '') 
        )
        
        video_upload.save()
        video_upload.tutors.add(tobj)
        return Response({'url': video_upload.v_upload})



import cloudinary
from cloudinary import api
from rest_framework.response import Response
from rest_framework.views import APIView

class VideoListsView(APIView):
    def get(self, request):

        # List all video resources in the specified folder
        resources = api.resources(type="upload", prefix="DanceAcademy/", resource_type="video")
        print(resources,"///////////")
        video_urls = []

        for resource in resources["resources"]:
            video_urls.append(resource["secure_url"])

        # Now, video_urls contains the secure URLs of videos in the specified folder
        for url in video_urls:
            print(url)

        return Response({"message":"success","video_urls":video_urls})

        


