# Generated by Django 5.1.2 on 2024-11-11 15:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cohouseAPI', '0006_rename_owner_property_owner_id_alter_user_role'),
    ]

    operations = [
        migrations.RenameField(
            model_name='property',
            old_name='owner_id',
            new_name='owner',
        ),
    ]
