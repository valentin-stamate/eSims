from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from app.models import User
from django.contrib.auth import authenticate, login

class TestView(TemplateView):
  template_name = "index.html"

  def get(self, request):
    context = locals()

    context['var1'] = request.user.is_authenticated

    return render(request, self.template_name, context)
