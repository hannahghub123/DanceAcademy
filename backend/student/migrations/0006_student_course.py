# Generated by Django 4.2.5 on 2023-10-18 14:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0015_remove_tutor_v_upload_alter_video_upload_v_upload"),
        ("student", "0005_student_image"),
    ]

    operations = [
        migrations.AddField(
            model_name="student",
            name="course",
            field=models.ForeignKey(
                blank=True,
                default=1,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="tutor.course",
            ),
        ),
    ]
