from rest_framework.viewsets import ModelViewSet
from .models import Fighter
from .serializers import FighterSerializer


class FightersViewSet(ModelViewSet):
    queryset = Fighter.objects.all()
    serializer_class = FighterSerializer
