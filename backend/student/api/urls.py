from django.urls import path
from .views import *

urlpatterns = [
    path("stdsignup/",SignupView.as_view(),name="signup"),
    path("stdlogin/",LoginView.as_view(),name="login"),
    path("image-set/",ImageSetView.as_view(),name="image-set"),
    path("std-edit/",ProfileEditView.as_view(),name="std-edit"),
]