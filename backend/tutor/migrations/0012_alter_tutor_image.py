# Generated by Django 4.2.5 on 2023-10-17 06:08

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tutor", "0011_alter_course_status_alter_tutor_v_upload"),
    ]

    operations = [
        migrations.AlterField(
            model_name="tutor",
            name="image",
            field=models.ImageField(
                blank=True, max_length=500, null=True, upload_to="tutor-uploads"
            ),
        ),
    ]
