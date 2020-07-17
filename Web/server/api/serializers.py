from rest_framework import serializers
from .models import User, UserInformation


class UserSignupSerializer(serializers.ModelSerializer):

  class Meta:
    model = User
    fields = ['username', 'email', 'password']
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User(
      username=validated_data['username'],
      email=validated_data['email'],
    )

    user.set_password(validated_data['password'])
    user.save()

    return user


class UserLoginSerializer(serializers.ModelSerializer):

  class Meta:
    model = User

  def create(self, validated_data):
    return ("")


class UserDataSerializer(serializers.ModelSerializer):

  class Meta:
    model = UserInformation
    fields = ['registration', 'full_name', 'phone', 'email',
              'birth', 'mother_firstname', 'father_firstname',
              'nationality', 'citizenship']

    # registration = models.CharField(max_length=30, primary_key=True)
    # full_name = models.CharField(verbose_name='name', max_length=30, blank=True)
    # phone = models.CharField(max_length=13, blank=True)
    # email = models.CharField(max_length=30)
    # birth = models.DateField(blank=True, null=True)
    # mother_firstname = models.CharField(max_length=20, blank=True)
    # father_firstname = models.CharField(max_length=20, blank=True)
    # nationality = models.CharField(max_length=20, blank=True)
    # citizenship = models.CharField(max_length=20, blank=True)