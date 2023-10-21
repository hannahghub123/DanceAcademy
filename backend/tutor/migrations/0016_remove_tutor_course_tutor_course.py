# Generated by Django 4.2.5 on 2023-10-20 12:20

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0015_remove_tutor_v_upload_alter_video_upload_v_upload"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="tutor",
            name="course",
        ),
        migrations.AddField(
            model_name="tutor",
            name="course",
            field=models.ManyToManyField(to="tutor.course"),
        ),
    ]
