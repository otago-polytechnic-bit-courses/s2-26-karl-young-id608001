from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import (BookViewSet, BookUploadView)

router = DefaultRouter()
router.register("books", BookViewSet)

urlpatterns = [
    path(
        "books/upload/",
        BookUploadView.as_view(),
        name="book-upload",
    ),
]

urlpatterns += router.urls