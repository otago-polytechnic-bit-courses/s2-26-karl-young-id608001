from django.urls import path
from .views import ShedViewSet
from . import views

urlpatterns = [
    path("sheds/", ShedViewSet.as_view({"get": "list", "post": "create"})),
    path("sheds/<int:id>/", views.shed_detail),
    path("sheds/<int:id>/tools/", views.tools),
    path("login/", views.login),
]