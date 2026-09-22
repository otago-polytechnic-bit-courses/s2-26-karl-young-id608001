from rest_framework import serializers
from .models import Shed, Tool


class ToolCount:
    tool_count = serializers.SerializerMethodField() 

    def get_tool_count(self, obj):
            return obj.tools.count()


class ShedSerializer(serializers.ModelSerializer, ToolCount):
    tool_count = serializers.SerializerMethodField() 
    class Meta:
        model = Shed
        fields = ["id", "name", "suburb", "city", "tool_count"]


class ToolSerializer(serializers.ModelSerializer, ToolCount):
    class Meta:
        model = Tool
        fields = ["id", "shed", "name", "description"]



class ShedDetailSerializer(serializers.ModelSerializer):
    tools = ToolSerializer(many=True, read_only=True)

    class Meta:
        model = Shed
        fields = ["id", "name", "suburb", "city", "tools"]


