from django.urls import path
from .views import *

urlpatterns = [
    path("stdsignup/",SignupView.as_view(),name="signup"),
    path("stdlogin/",LoginView.as_view(),name="login"),
]