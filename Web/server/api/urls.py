from django.urls import path
from .views import SignupUser, GetUserBasicData, GetUserData, \
  GetSemesters, SemesterClassGrades
from rest_framework.authtoken import views

urlpatterns = [
  path('signup/', SignupUser.as_view()),
  path('login/', views.obtain_auth_token),
  path('get/user-basic-data/', GetUserBasicData.as_view()),
  path('get/user-data/', GetUserData.as_view()),
  path('get/semesters', GetSemesters.as_view()),
  path('get/semester-class-grades', SemesterClassGrades.as_view()),

]