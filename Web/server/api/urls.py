from django.urls import path
from .views import SignupUser, LoginUser

urlpatterns = [
  path('signup/', SignupUser.as_view()),
  path('login/', LoginUser.as_view()),
]