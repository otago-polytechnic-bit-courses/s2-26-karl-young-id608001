from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = [
            "id",
            "title",
            "author",
            "genre",
            "file",
            "file_type",
            "cover_image",
            "upload_date",
        ]


class BookDetailSerializer(serializers.ModelSerializer):
    owner = serializers.CharField(
        source="owner.profile.display_name",
        read_only=True
    )

    class Meta:
        model = Book
        fields = [
            "id",
            "owner",
            "title",
            "author",
            "genre",
            "file",
            "file_type",
            "cover_image",
            "upload_date",
        ]