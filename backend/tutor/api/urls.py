from django.urls import path
from .views import *

urlpatterns = [
    path("signup/",SignupView.as_view(),name="signup"),
    path("login/",LoginView.as_view(),name="login"),
    path("tprofedit/",ProfileEditView.as_view(),name="edit-profile"),
    path("courses/",CourseView.as_view(),name="course"),
    path("course-details/<int:id>",CourseDetailsView.as_view(),name="course-details"),
    path("course-struct/<int:id>",CourseStructView.as_view(),name="course-struct"),
    path("image-set/",ImageSetView.as_view(),name="image-setting"),
    path("tdetails/<int:id>",TutorView.as_view(),name="tutor-view")
]