# Generated by Django 4.2.5 on 2023-09-26 07:57

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Tutor",
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
                ("username", models.CharField(max_length=50)),
                ("name", models.CharField(max_length=100)),
                ("qualification", models.CharField(max_length=100)),
                ("expertise", models.IntegerField(blank=True, null=True)),
                ("email", models.CharField(default=None, max_length=50)),
                ("phone", models.PositiveIntegerField()),
                ("password", models.CharField(default=None, max_length=50)),
                ("is_approved", models.BooleanField(default=False)),
            ],
        ),
    ]
