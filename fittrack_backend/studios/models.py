from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Studio(models.Model):
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="studios",
    )
    name = models.CharField(max_length=200)
    suburb = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    accepting_members = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.suburb}, {self.city})"

    class Meta:
        verbose_name = "Studio"
        verbose_name_plural = "Studios"


class StudioClass(models.Model):
    studio = models.ForeignKey(
        Studio,
        on_delete=models.CASCADE,
        related_name="classes",
    )
    name = models.CharField(max_length=200)
    duration = models.IntegerField(default=60)
    people_per_class = models.PositiveIntegerField(default=30)
    bookings = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.name} ({self.studio.name}, {self.studio.city})"

    class Meta:
          verbose_name = "Class"
          verbose_name_plural = "Classes"

    