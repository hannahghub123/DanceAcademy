# Generated by Django 4.2.5 on 2023-10-25 06:47

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0017_resume_list"),
    ]

    operations = [
        migrations.AlterField(
            model_name="video_upload",
            name="desc",
            field=models.CharField(max_length=220),
        ),
    ]