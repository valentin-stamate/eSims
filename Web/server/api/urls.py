from django.urls import path
from .views import SignupUser, LoginUser, GetUserBasicData, GetUserData

urlpatterns = [
  path('signup/', SignupUser.as_view()),
  path('login/', LoginUser.as_view()),
  path('get/user-basic-data/', GetUserBasicData.as_view()),
  path('get/user-data/', GetUserData.as_view()),
]