from rest_framework import viewsets
from .models import Studio, StudioClass
from .serializers import StudioSerializer, StudioDetailSerializer, StudioClassSerializer

# view - Receives a request and returns a response; Django's MVT "controller"
class StudioViewSet(viewsets.ModelViewSet): # ModelViewSet Generates list, retrieve, create, update, and delete endpoints from a queryset and serializer
    queryset = Studio.objects.all()

    def get_serializer_class(self): # Lets a ViewSet choose a different serializer depending on the action
        if self.action == "retrieve":
            return StudioDetailSerializer
        return StudioSerializer


class StudioClassViewSet(viewsets.ModelViewSet):
    queryset = StudioClass.objects.all()
    serializer_class = StudioClassSerializer