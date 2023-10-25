from django.urls import path
from .views import *

urlpatterns = [
    path("signup/",SignupView.as_view(),name="signup"),
    path("resume-upload/",ResumeUploadView.as_view(),name="resume-upload"),
    path("login/",LoginView.as_view(),name="login"),
    path("tprofedit/",ProfileEditView.as_view(),name="edit-profile"),
    path("courses/",CourseView.as_view(),name="course"),
    path("course-details/<int:id>",CourseDetailsView.as_view(),name="course-details"),
    path("course-struct/<int:id>",CourseStructView.as_view(),name="course-struct"),
    path("course-structure/",CourseStructureView.as_view(),name="course-structure"),
    path("image-set/",ImageSetView.as_view(),name="image-setting"),
    path("tdetails/<int:id>",TutorView.as_view(),name="tutor-view"),
    path("video-upload/<int:id>",VideoUploadView.as_view(),name="video-upload"),
    path("video-lists/",VideoListsView.as_view(),name="video-lists"),

]