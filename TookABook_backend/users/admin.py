from django.contrib import admin
from .models import Book, Profile


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("display_name", "user", "joined_on")
    search_fields = ("display_name", "user__username", "user__email")
    readonly_fields = ("joined_on",)


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "author",
        "owner",
        "genre",
        "upload_date",
    )
    list_filter = (
        "genre",
        "file_type",
    )
    search_fields = (
        "title",
        "author",
        "owner__username",
    )
    readonly_fields = ("upload_date",)
    ordering = ("-upload_date",)
