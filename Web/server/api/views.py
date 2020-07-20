from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication

from .models import UserInformation, Semester, ClassRow
from .serializers import UserSignupSerializer, UserDataSerializer, SemesterClassRowSerializer, SemesterSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated

class SignupUser(APIView):

  def post(self, request):
    user_serializer = UserSignupSerializer(data=request.data)

    if user_serializer.is_valid():
        user = user_serializer.save()
        user.save()
        token = Token.objects.get(user=user)
        return Response(data={'token': token.key}, status=status.HTTP_201_CREATED)

    return Response(status=status.HTTP_204_NO_CONTENT)


class LoginUser(APIView):

  def post(self, request):
    return Response("ana are mere")


class GetUserBasicData(APIView):
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated]

  def get(self, request):
    context = {'username': request.user.username, 'email': request.user.email}
    return Response(data=context)


class GetUserData(APIView):
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated]

  def get(self, request):
    user = request.user
    user_data_instance = UserInformation.objects.get(student=user)

    user_data_serializer = UserDataSerializer(user_data_instance)

    return Response(user_data_serializer.data)


class GetSemesters(APIView):
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated]

  def get(self, request):
    student = request.user

    semester_data = []
    for semester in Semester.objects.filter(student=student):

      semester_data.append(SemesterSerializer(semester).data)

    return Response(data=semester_data)


class SemesterClassGrades(APIView):
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated]

  def post(self, request):

    # TODO
    # find a more secure way to get semesters cuz everyone logged in can get them

    semester_key = request.data['semester-key']
    semester = Semester.objects.get(id=semester_key)

    class_rows = []
    for row in ClassRow.objects.filter(semester=semester):
      class_rows.append(SemesterClassRowSerializer(row).data)

    return Response(data=class_rows)
