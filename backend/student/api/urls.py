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
    path("notes-data/",NotesDataView.as_view(),name="notes-data"),
    path("getnotes-data/",GetNotesDataView.as_view(),name="get-notes-data"),
    path("add-notes/",AddNotesView.as_view(),name="add-notes"),
    path("edit-notes/",EditNotesView.as_view(),name="edit-notes"),
    path("delete-notes/",DeleteNotesView.as_view(),name="delete-notes"),
    path("session-assign/",SessionAssignView.as_view(),name="session-assign"),
    path("session-details/",SessionDetailsView.as_view(),name="session-details"), 
    path("send-sessionMail/",SessionSendMailView.as_view(),name="send-sessionMail"), 
]