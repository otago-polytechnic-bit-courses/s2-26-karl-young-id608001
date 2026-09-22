from rest_framework import permissions

# To overwrite IsAuthenticatedOrReadOnly's message
class MessageForIsAuthenticated(permissions.IsAuthenticatedOrReadOnly):
    message = "Authentication credentials were not provided."
