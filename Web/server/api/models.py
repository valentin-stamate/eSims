import random

from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import UserManager
from django.db.models.signals import post_save
from django.conf import settings
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


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

  id = models.AutoField(primary_key=True)
  registration = models.CharField(max_length=30)
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

  id = models.AutoField(primary_key=True)
  year = models.IntegerField()
  year_of_study = models.IntegerField()
  semester = models.IntegerField()
  group = models.CharField(max_length=10)
  domain = models.CharField(max_length=50)


class ClassRow(models.Model):
  semester = models.ForeignKey(Semester, on_delete=models.CASCADE)

  id = models.AutoField(primary_key=True)
  year = models.IntegerField()
  semester_number = models.IntegerField()
  class_name = models.CharField(verbose_name="class", max_length=30)
  class_grade = models.FloatField(verbose_name="final grade")
  class_credits = models.FloatField(verbose_name="credits")
  date = models.DateField(blank=True, null=True)


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
    first_sem = Semester(student=instance, year=int(random.uniform(2000, 3000)),
                         year_of_study=int(random.uniform(2000, 3000)),
                         semester=1, group="B4/ Semianul B", domain="Informatica")
    second_sem = Semester(student=instance, year=int(random.uniform(2000, 3000)),
                          year_of_study=int(random.uniform(2000, 3000)),
                          semester=2, group="B4/ Semianul B", domain="Informatica")

    first_sem.save()
    second_sem.save()

    ClassRow(semester=first_sem, year=2015, semester_number=1, class_name="Matematica", class_grade=8, class_credits=5).save()
    ClassRow(semester=first_sem, year=2015, semester_number=1, class_name="Introducere In Programare", class_grade=7,
             class_credits=6).save()
    ClassRow(semester=first_sem, year=2015, semester_number=1, class_name="Structuri De Date", class_grade=10,
             class_credits=6).save()
    ClassRow(semester=first_sem, year=2015, semester_number=1, class_name="Engleza", class_grade=9,
             class_credits=4).save()

    ClassRow(semester=second_sem, year=2016, semester_number=2, class_name="Programare Orientata Obiect", class_grade=10,
             class_credits=6).save()
    ClassRow(semester=second_sem, year=2016, semester_number=2, class_name="Proiectarea Algoritmilor", class_grade=10,
             class_credits=5).save()
    ClassRow(semester=second_sem, year=2016, semester_number=2, class_name="Programare Competitiva", class_grade=8,
             class_credits=4).save()
    ClassRow(semester=second_sem, year=2016, semester_number=2, class_name="Engleza", class_grade=9,
             class_credits=4).save()



# year = models.IntegerField()
#   year_of_study = models.IntegerField()
#   semester = models.IntegerField()
#   group = models.CharField(max_length=10)
#   domain = models.CharField(max_length=50)
