from django.urls import path
from .views import SignupUser, LoginUser, GetUserBasicData, GetUserData, \
  GetSemesters, SemesterClassGrades

urlpatterns = [
  path('signup/', SignupUser.as_view()),
  path('login/', LoginUser.as_view()),
  path('get/user-basic-data/', GetUserBasicData.as_view()),
  path('get/user-data/', GetUserData.as_view()),
  path('get/semesters', GetSemesters.as_view()),
  path('get/semester-class-grades', SemesterClassGrades.as_view()),

]