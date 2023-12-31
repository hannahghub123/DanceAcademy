# Generated by Django 4.2.5 on 2023-10-20 13:57

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0016_remove_tutor_course_tutor_course"),
    ]

    operations = [
        migrations.CreateModel(
            name="Resume_List",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "res_file",
                    cloudinary.models.CloudinaryField(
                        blank=True,
                        max_length=255,
                        null=True,
                        verbose_name="Resume uploads",
                    ),
                ),
                ("up_time", models.DateTimeField()),
                (
                    "tutors",
                    models.ManyToManyField(
                        blank=True, related_name="resume", to="tutor.tutor"
                    ),
                ),
            ],
        ),
    ]
