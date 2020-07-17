from django.urls import path
from .views import SignupUser, LoginUser, GetUserBasicData

urlpatterns = [
  path('signup/', SignupUser.as_view()),
  path('login/', LoginUser.as_view()),
  path('home/', GetUserBasicData.as_view()),
]