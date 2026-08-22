from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user

class BlockDeletionIfBooked(permissions.BasePermission):
    message = 'Cannot delete classes that have bookings!'
    def has_object_permission(self, request, view, obj ):
        if request.method == "DELETE" and obj.bookings > 0:
            return False
        return True
    
            