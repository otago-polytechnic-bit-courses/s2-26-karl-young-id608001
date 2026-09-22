from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ShedViewSet, ToolViewSet
from . import views


router = DefaultRouter()
router.register("sheds", ShedViewSet)
router.register("tools", ToolViewSet)

urlpatterns = [
    path("login/", views.login),
    path("sheds/<int:id>/tools/", ToolViewSet.as_view({"get": "list"})),
    path("sheds/<int:id>/", views.shed_detail),  
] + router.urls