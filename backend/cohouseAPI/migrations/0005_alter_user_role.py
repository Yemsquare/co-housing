# Generated by Django 5.1.2 on 2024-11-09 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cohouseAPI', '0004_alter_property_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('tenant', 'Tenant'), ('landlord', 'Landlord'), ('agent', 'Agent'), ('admin', 'Admin')], max_length=10),
        ),
    ]
