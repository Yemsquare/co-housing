# Generated by Django 5.1.3 on 2024-11-17 08:40

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cohouseAPI', '0007_rename_owner_id_property_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='room',
            field=models.JSONField(default=list),
        ),
        migrations.AlterField(
            model_name='property',
            name='owner',
            field=models.ForeignKey(limit_choices_to={'role__in': ('landlord', 'agent', 'admin')}, on_delete=django.db.models.deletion.CASCADE, related_name='properties', to=settings.AUTH_USER_MODEL),
        ),
    ]
