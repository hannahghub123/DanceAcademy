# Generated by Django 4.2.5 on 2023-10-25 09:23

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0019_course_structure_description_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="course_structure",
            name="levels",
            field=models.CharField(
                choices=[
                    ("Beginner Level Lessons", "Beginner Level Lessons"),
                    ("Intermediate Level Lessons", "Intermediate Level Lessons"),
                ],
                default="Beginner Level Lessons",
                max_length=50,
            ),
        ),
        migrations.AddField(
            model_name="course_structure",
            name="num_of_classes",
            field=models.PositiveIntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="course_structure",
            name="title",
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]
