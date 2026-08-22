from rest_framework import serializers
from .models import Studio, StudioClass

# Shows one studio
class StudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Studio
        fields = ["id", "name", "suburb", "city", "accepting_members", "created_at"]


# shows one class
class StudioClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudioClass
        fields = ["id", "studio", "name", "duration", "people_per_class", "bookings"]


# Nested to show one of each 
class StudioDetailSerializer(serializers.ModelSerializer):
    classes = StudioClassSerializer(many=True, read_only=True)

    class Meta:
        model = Studio
        fields = ["id", "name", "suburb", "city", "accepting_members", "created_at", "classes"]