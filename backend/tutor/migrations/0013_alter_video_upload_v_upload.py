# Generated by Django 4.2.5 on 2023-10-17 07:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0012_alter_tutor_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="video_upload",
            name="v_upload",
            field=models.FileField(
                blank=True, max_length=500, null=True, upload_to="video-uploads"
            ),
        ),
    ]