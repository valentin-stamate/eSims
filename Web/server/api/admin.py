from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, UserInformation, Semester, Classes, SemesterResult


class ApiUserAdmin(UserAdmin):
  list_display = ('username', 'email', 'is_admin')
  search_fields = ('username', 'email')
  readonly_fields = ('date_joined', 'last_login')

  filter_horizontal = ()
  list_filter = ()
  fieldsets = ()


class UserInformationAdmin(admin.ModelAdmin):
  list_display = ['registration', 'full_name', 'email']


admin.site.register(User, ApiUserAdmin)
admin.site.register(UserInformation, UserInformationAdmin)
admin.site.register(Semester)
admin.site.register(Classes)
admin.site.register(SemesterResult)
