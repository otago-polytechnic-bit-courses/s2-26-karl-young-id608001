from rest_framework import viewsets
from rest_framework.permissions import (
    IsAuthenticated,
)
from .permissions import IsOwnerOrReadOnly

from .models import Book
from .serializers import (
    BookSerializer,
    BookDetailSerializer,
)


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    permission_classes = [
        IsAuthenticated,
        IsOwnerOrReadOnly,
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_serializer_class(self):
        if self.action == "retrieve":
            return BookDetailSerializer
        return BookSerializer

    def get_queryset(self):
        queryset = Book.objects.filter(owner=self.request.user)

        title = self.request.query_params.get("title")
        genre = self.request.query_params.get("genre")
        author = self.request.query_params.get("author")

        if title:
            queryset = queryset.filter(title__icontains=title)

        if genre:
            queryset = queryset.filter(genre__iexact=genre)

        if author:
            queryset = queryset.filter(author__icontains=author)

        return queryset