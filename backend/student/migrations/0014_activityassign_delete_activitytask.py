# Generated by Django 4.2.5 on 2023-11-10 04:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("student", "0013_activitytask"),
    ]

    operations = [
        migrations.CreateModel(
            name="ActivityAssign",
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
                ("task", models.CharField(max_length=1000)),
                (
                    "session_assign",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="student.sessionassign",
                    ),
                ),
            ],
        ),
        migrations.DeleteModel(
            name="ActivityTask",
        ),
    ]