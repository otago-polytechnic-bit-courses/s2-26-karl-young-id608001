from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="profile",
    )
    display_name = models.CharField(max_length=100)
    joined_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.display_name

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

# A booking can be for one StudioClass and a StudioClass can have many bookings
class Booking(models.Model):
    class Status(models.TextChoices):
        CONFIRMED = "confirmed", "Confirmed"
        WAITLISTED = "waitlisted", "Waitlisted"
        CANCELLED = "cancelled", "Cancelled"

    member = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bookings")
    studio_class = models.ForeignKey(
        "StudioClass", on_delete=models.CASCADE, related_name="bookings"
    )
    status = models.CharField(
        max_length=20, choices=Status.choices, default=Status.CONFIRMED
    )
    booked_at = models.DateTimeField(auto_now_add=True)
    checked_in_at = models.DateTimeField(default=timezone.now)
    attended = models.BooleanField(default=False)
    notes = models.CharField(max_length=400, blank=True, default="")

    def __str__(self):
        return f"{self.member.username} - {self.studio_class.name}"


class StudioClass(models.Model):
    studio = models.ForeignKey(
        Studio,
        on_delete=models.CASCADE,
        related_name="classes",
    )
    name = models.CharField(max_length=200)
    duration = models.IntegerField(default=60)
    people_per_class = models.PositiveIntegerField(default=30)
    members = models.ManyToManyField(User, through="Booking", related_name="classes_booked")



    def __str__(self):
        return f"{self.name} ({self.studio.name}, {self.studio.city})"

    class Meta:
          verbose_name = "Class"
          verbose_name_plural = "Classes"

    