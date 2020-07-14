from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
  def create_user(self, username, email, password=None):
    if not email:
      raise ValueError("User must have an email address")
    if not username:
      raise ValueError("User mush have a password")

    user = self.model(
      username=username,
      email=self.normalize_email(email)
    )

    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, username, email, password):
    user = self.create_user(
      username=username,
      email=self.normalize_email(email),
      password=password
    )

    user.is_admin = True
    user.is_staff = True
    user.is_superuser = True
    user.save(using=self._db)




