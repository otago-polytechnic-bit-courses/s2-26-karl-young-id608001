from rest_framework import viewsets
from .permissions import IsOwnerOrReadOnly, BlockDeletionIfBooked
from .models import Studio, StudioClass
from .serializers import StudioSerializer, StudioDetailSerializer, StudioClassSerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly


# view - Receives a request and returns a response; Django's MVT "controller"
class StudioViewSet(viewsets.ModelViewSet): # ModelViewSet Generates list, retrieve, create, update, and delete endpoints from a queryset and serializer
    queryset = Studio.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_serializer_class(self): # Lets a ViewSet choose a different serializer depending on the action
        if self.action == "retrieve":
            return StudioDetailSerializer
        return StudioSerializer

    def get_queryset(self): 
        if self.request.query_params.get("city"):
            return self.queryset.filter(city__iexact=self.request.query_params.get("city")) # filter studios by city, case-insensitive with fieldName__iexact
        return self.queryset


class StudioClassViewSet(viewsets.ModelViewSet):
    queryset = StudioClass.objects.all()
    serializer_class = StudioClassSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, BlockDeletionIfBooked]
  
    def get_queryset(self): # a test function to filter the queryset based on the duration query parameter e.g: /api/classes/?duration=30
        if self.request.query_params.get("duration"):
            return self.queryset.filter(duration=self.request.query_params.get("duration"))
        return self.queryset