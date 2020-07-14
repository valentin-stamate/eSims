# Generated by Django 3.0.7 on 2020-07-14 06:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserInformation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=30, verbose_name='Name')),
                ('registration', models.CharField(max_length=30)),
                ('phone', models.CharField(max_length=13)),
                ('email', models.CharField(max_length=30)),
                ('birth', models.DateField()),
                ('mother_firstname', models.CharField(max_length=20)),
                ('father_firstname', models.CharField(max_length=20)),
                ('nationality', models.CharField(max_length=20)),
                ('citizenship', models.CharField(max_length=20)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SemesterResult',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year_of_study', models.IntegerField()),
                ('semester', models.IntegerField()),
                ('average_grade', models.FloatField()),
                ('points', models.IntegerField()),
                ('credits', models.IntegerField()),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('year_of_study', models.IntegerField()),
                ('semester', models.IntegerField()),
                ('group', models.CharField(max_length=10)),
                ('domain', models.CharField(max_length=50)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Classes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('semester', models.IntegerField()),
                ('student_class', models.CharField(max_length=30, verbose_name='class')),
                ('class_grade', models.FloatField(verbose_name='final grade')),
                ('class_credits', models.FloatField(verbose_name='credits')),
                ('date', models.DateField()),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
