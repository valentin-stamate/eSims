from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, UserInformation, Semester, ClassRow, SemesterResult


class ApiUserAdmin(UserAdmin):
  list_display = ('username', 'email', 'is_admin')
  search_fields = ('username', 'email')
  readonly_fields = ('date_joined', 'last_login')

  filter_horizontal = ()
  list_filter = ()
  fieldsets = ()


class UserInformationAdmin(admin.ModelAdmin):
  list_display = ['registration', 'full_name', 'email']


class SemesterAdmin(admin.ModelAdmin):
  list_display = ['id', 'student', 'year', 'semester', 'group', 'domain']


class ClassRowAdmin(admin.ModelAdmin):
  list_display = ['semester', 'year', 'semester_number', 'class_name']


admin.site.register(User, ApiUserAdmin)
admin.site.register(UserInformation, UserInformationAdmin)
admin.site.register(Semester, SemesterAdmin)
admin.site.register(ClassRow, ClassRowAdmin)
admin.site.register(SemesterResult)
