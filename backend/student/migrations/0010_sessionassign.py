# Generated by Django 4.2.5 on 2023-11-04 07:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0024_alter_course_image"),
        ("student", "0009_mynotes"),
    ]

    operations = [
        migrations.CreateModel(
            name="SessionAssign",
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
                ("date_time", models.DateTimeField()),
                ("video_link", models.CharField(max_length=200)),
                (
                    "notes",
                    models.CharField(
                        blank=True,
                        default="Session Assigned",
                        max_length=500,
                        null=True,
                    ),
                ),
                (
                    "course_struct",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="student.coursepayment",
                    ),
                ),
                (
                    "student",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="student.student",
                    ),
                ),
                (
                    "tutor",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="tutor.tutor"
                    ),
                ),
            ],
        ),
    ]