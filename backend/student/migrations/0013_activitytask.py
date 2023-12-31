# Generated by Django 4.2.5 on 2023-11-09 19:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0024_alter_course_image"),
        ("student", "0012_alter_sessionassign_course_struct"),
    ]

    operations = [
        migrations.CreateModel(
            name="ActivityTask",
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
                ("task", models.CharField(max_length=1000)),
                (
                    "status",
                    models.CharField(
                        choices=[("Completed", "Completed"), ("Pending", "Pending")],
                        default="Assigned",
                        max_length=50,
                    ),
                ),
                (
                    "course_structure",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="tutor.course_structure",
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
