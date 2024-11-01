from django.contrib import admin
from .models import User, AgentListing, Document, Message, Roommate, TenancyAgreement, Property

# Register your models here.
admin.site.register(User)
admin.site.register(AgentListing)
admin.site.register(Document)
admin.site.register(TenancyAgreement)
admin.site.register(Property)
admin.site.register(Message)
admin.site.register(Roommate)
