from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
from django.core.files.base import ContentFile
from rest_framework.permissions import (
    IsAuthenticated,
);
from .utils.book_converter import get_book_pages
from .permissions import IsOwnerOrReadOnly
from .utils.book_converter import (
    convert_pdf_to_images,
)
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

    @action(
        detail=True,
        methods=["get"],
    )

    def pages(self, request, pk=None):
        book = self.get_object()

        pages = get_book_pages(book)

        return Response({
            "id": book.id,
            "title": book.title,
            "pages": pages,
        })
    
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

class BookUploadView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            filename = request.headers.get("X-Filename")
            title = request.headers.get("X-Title")
            author = request.headers.get("X-Author")
            genre = request.headers.get("X-Genre")

            if not filename:
                return Response(
                    {"error": "Missing filename"},
                    status=400,
                )

            print("Filename:", filename)
            print("Title:", title)
            print("Author:", author)
            print("Genre:", genre)
            print("Body size:", len(request.body))

            book = Book.objects.create(
                owner=request.user,
                title=title or filename,
                author=author or "",
                genre=genre or "",
            )

            book.file.save(
                filename,
                ContentFile(request.body),
                save=True,
            )

            return Response({
                "success": True,
                "id": book.id,
                "title": book.title,
            })

        except Exception as e:
            print("UPLOAD ERROR:", repr(e))

            return Response(
                {"error": str(e)},
                status=500,
            )