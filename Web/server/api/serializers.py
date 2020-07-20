from rest_framework import serializers
from .models import User, UserInformation, Semester, ClassRow


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


class SemesterSerializer(serializers.ModelSerializer):

  class Meta:
    model = Semester
    fields = ['id', 'year', 'year_of_study', 'semester', 'group', 'domain']


class SemesterClassRowSerializer(serializers.ModelSerializer):

  class Meta:
    model = ClassRow
    fields = ['semester_number', 'class_name', 'class_grade', 'class_credits', 'date']


