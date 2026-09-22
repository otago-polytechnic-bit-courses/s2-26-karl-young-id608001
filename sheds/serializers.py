from rest_framework import serializers
from .models import Shed, Tool

# Shows one studio
class ShedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shed
        fields = ["id", "name", "suburb", "city", "created_at"]


# shows one class
class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = ["id", "shed", "name", "description"]


# Nested to show one of each 
class ShedDetailSerializer(serializers.ModelSerializer):
    tools = ToolSerializer(many=True, read_only=True)

    class Meta:
        model = Shed
        fields = ["id", "name", "suburb", "city", "created_at"]