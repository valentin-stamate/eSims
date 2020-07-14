from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from .serializers import UserSignupSerializer
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
  authentication_classes = [TokenAuthentication]

  def post(self, request):
    print(request.auth)
    return Response("ana are mere")
