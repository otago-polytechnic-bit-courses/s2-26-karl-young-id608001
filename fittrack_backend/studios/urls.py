from rest_framework.routers import DefaultRouter
from .views import StudioViewSet, StudioClassViewSet

# Router	- Generates a full set of URL patterns from a ViewSet
# DefaultRouter -	A router that also provides a browseable API root view
router = DefaultRouter()
router.register("studios", StudioViewSet)
router.register("classes", StudioClassViewSet)

urlpatterns = router.urls