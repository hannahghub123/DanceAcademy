# Generated by Django 4.1.7 on 2023-10-14 06:58

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0010_course_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="course",
            name="status",
            field=models.CharField(
                choices=[
                    ("Course Available", "Course Available"),
                    ("Seats Filled", "Seats Filled"),
                ],
                default="Course Available",
                max_length=50,
            ),
        ),
        migrations.AlterField(
            model_name="tutor",
            name="v_upload",
            field=models.ManyToManyField(blank=True, to="tutor.video_upload"),
        ),
    ]
