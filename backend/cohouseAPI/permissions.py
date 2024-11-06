from rest_framework import permissions

class IsTenant(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'tenant'
    
class IsLandlord(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'landlord'
    
class IsAgent(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'agent'
    
class IsLandlordOrAgent(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role.lower() in ('landlord', 'agent')