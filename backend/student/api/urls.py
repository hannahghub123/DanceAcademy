from django.urls import path
from .views import *

urlpatterns = [
    path("stdsignup/",SignupView.as_view(),name="signup"),
    path("stdlogin/",LoginView.as_view(),name="login"),
    path("image-set/",ImageSetView.as_view(),name="image-set"),
    path("std-edit/",ProfileEditView.as_view(),name="std-edit"),
    path("std-details/",StudentDetailsView.as_view(),name="std-details"),
    path("video-lists/",VideoListView.as_view(),name="video list"),
    path("course-payment/",CoursePaymentView.as_view(),name="course-payment"),
    path("pay-details/",PayDetailsView.as_view(),name="pay-details"),
    path("status-block/",StatusBlockview.as_view(),name="status-block"),
    path("status-unblock/",StatusUnblockview.as_view(),name="status-unblock"),
]