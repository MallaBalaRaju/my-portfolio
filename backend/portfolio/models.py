from django.db import models


class Project(models.Model):
    """Portfolio project entry rendered in Selected Work and its detail modal."""

    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=120)
    subtitle = models.CharField(max_length=200)
    category = models.CharField(max_length=40, default="Full-Stack")
    outcome = models.TextField(blank=True)
    description = models.TextField()
    architecture = models.JSONField(default=list)
    details = models.JSONField(default=list)
    stack = models.JSONField(default=list)
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    date = models.CharField(max_length=20)
    featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "-featured"]

    def __str__(self):
        return self.title
