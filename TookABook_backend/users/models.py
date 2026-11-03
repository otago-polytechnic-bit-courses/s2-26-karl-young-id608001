from django.db import models
from django.contrib.auth.models import User

class Genre(models.TextChoices):
    FICTION = "fiction", "Fiction"
    FANTASY = "fantasy", "Fantasy"
    SCIENCE_FICTION = "sci_fi", "Science Fiction"
    MYSTERY = "mystery", "Mystery"
    THRILLER = "thriller", "Thriller"
    HORROR = "horror", "Horror"
    ROMANCE = "romance", "Romance"
    BIOGRAPHY = "biography", "Biography"
    HISTORY = "history", "History"
    EDUCATIONAL = "educational", "Educational"
    OTHER = "other", "Other"
    
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


class Book(models.Model):
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="books"
    )

    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255, blank=True)

    genre = models.CharField(
            max_length=100,
            choices=Genre.choices,
            blank=True
        )
    
    file = models.FileField(upload_to="books/")
    upload_date = models.DateTimeField(auto_now_add=True)
    file_type = models.CharField(max_length=50, blank=True)
    cover_image = models.ImageField(
      upload_to="covers/",
      blank=True,
      null=True
      )
    
    def __str__(self):
        return self.title