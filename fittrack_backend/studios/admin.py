from django.contrib import admin
from .models import Studio, StudioClass


class StudioClassInline(admin.TabularInline):
    model = StudioClass
    extra = 1


@admin.register(Studio)
class StudioAdmin(admin.ModelAdmin):
    list_display = ("name", "suburb", "city", "accepting_members", "total_classes")
    list_filter = ("suburb", "city",)
    search_fields = ("name", "suburb", "city")
    inlines = [StudioClassInline]

    def total_classes(self, obj):
        return obj.classes.count()


@admin.register(StudioClass)
class StudioClassAdmin(admin.ModelAdmin):
    list_display = ("name", "studio")
    list_filter = ("studio",)