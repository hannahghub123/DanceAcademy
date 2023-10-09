from django.urls import path
from .views import *

urlpatterns = [
    path("signup/",SignupView.as_view(),name="signup"),
    path("login/",LoginView.as_view(),name="login"),
    path("tprofedit/",ProfileEditView.as_view(),name="editprofile"),
    path("course-cat/",CourseCatView.as_view(),name="coursecat"),
    path("course/<int:id>",CourseView.as_view(),name="course"),
    path("course-struct/<int:id>",CourseStructView.as_view(),name="coursestruct"),
    path("image-set/",ImageSetView.as_view(),name="image-setting"),
]