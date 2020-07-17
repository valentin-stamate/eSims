from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import UserManager
from django.db.models.signals import post_save
from django.conf import settings
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib import admin


class User(AbstractUser):

  username = models.CharField(verbose_name='registration', max_length=30, unique=True)
  email = models.EmailField(verbose_name='email', max_length=60, unique=True)
  date_joined = models.DateTimeField(verbose_name='date joined', auto_now=True)
  last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
  is_admin = models.BooleanField(default=False)
  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=False)
  is_superuser = models.BooleanField(default=False)

  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['email']  # for new users

  objects = UserManager()

  def __str__(self):
    return self.username

  def has_perm(self, perm, obj=None):
    return self.is_admin

  def has_module_perms(self, app_label):
    return True


class UserInformation(models.Model):
  student = models.ForeignKey(User, on_delete=models.CASCADE)

  # id = models.AutoField()
  registration = models.CharField(max_length=30, primary_key=True)
  full_name = models.CharField(verbose_name='name', max_length=30, blank=True)
  phone = models.CharField(max_length=13, blank=True)
  email = models.CharField(max_length=30)
  birth = models.DateField(blank=True, null=True)
  mother_firstname = models.CharField(max_length=20, blank=True)
  father_firstname = models.CharField(max_length=20, blank=True)
  nationality = models.CharField(max_length=20, blank=True)
  citizenship = models.CharField(max_length=20, blank=True)

  def __str__(self):
    return self.registration


class Semester(models.Model):
  student = models.ForeignKey(User, on_delete=models.CASCADE)

  year = models.IntegerField()
  year_of_study = models.IntegerField()
  semester = models.IntegerField()
  group = models.CharField(max_length=10)
  domain = models.CharField(max_length=50)
  

class Classes(models.Model):
  student = models.ForeignKey(User, on_delete=models.CASCADE)

  year = models.IntegerField()
  semester = models.IntegerField()
  student_class = models.CharField(verbose_name="class", max_length=30)
  class_grade = models.FloatField(verbose_name="final grade")
  class_credits = models.FloatField(verbose_name="credits")
  date = models.DateField()


class SemesterResult(models.Model):
  student = models.ForeignKey(User, on_delete=models.CASCADE)

  year_of_study = models.IntegerField()
  semester = models.IntegerField()
  average_grade = models.FloatField()
  points = models.IntegerField()
  credits = models.IntegerField()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
  if created:
    Token.objects.create(user=instance)
    UserInformation(student=instance, registration=instance.username, email=instance.email).save()



