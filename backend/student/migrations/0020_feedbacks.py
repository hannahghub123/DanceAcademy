# Generated by Django 4.2.5 on 2023-11-18 05:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0025_rename_course_structure_coursestructure_and_more"),
        ("student", "0019_alter_activityassign_status"),
    ]

    operations = [
        migrations.CreateModel(
            name="Feedbacks",
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
                ("feedback", models.CharField(max_length=2000)),
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
                (
                    "upload",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="student.taskupload",
                    ),
                ),
            ],
        ),
    ]
