# Generated by Django 4.2.5 on 2023-10-27 08:37

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("student", "0007_coursepayment"),
    ]

    operations = [
        migrations.AddField(
            model_name="student",
            name="status",
            field=models.BooleanField(default=False),
        ),
    ]
