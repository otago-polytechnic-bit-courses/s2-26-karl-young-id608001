from rest_framework import serializers
from .models import Shed, Tool


class ToolCount(serializers.Serializer):
    tool_count = serializers.SerializerMethodField() 

    def get_tool_count(self, obj):
            return obj.tools.count()


class ShedSerializer(ToolCount, serializers.ModelSerializer):
    class Meta:
        model = Shed
        fields = ["id", "name", "suburb", "city", "tool_count"]


class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = ["id", "shed", "name", "description"]



class ShedDetailSerializer(ToolCount, serializers.ModelSerializer):
    tools = ToolSerializer(many=True, read_only=True)
    class Meta:
        model = Shed
        fields = ["id", "name", "suburb", "city", "tools", "tool_count"]


