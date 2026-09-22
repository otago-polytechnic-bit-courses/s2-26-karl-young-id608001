from rest_framework import permissions

# To overwrite IsAuthenticatedOrReadOnly's message
class MessageForIsAuthenticated(permissions.IsAuthenticatedOrReadOnly):
    message = "Authentication credentials were not provided."

class IsOwnerOrStaff(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        if not request.user.is_authenticated:
            return False
        return obj.owner == request.user or request.user.is_staff