from django.db import models


class Project(models.Model):
    """Portfolio project entry rendered in Selected Work and its detail modal."""

    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=120)
    subtitle = models.CharField(max_length=200)
    outcome = models.TextField(blank=True)
    description = models.TextField()
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


class RepoOverride(models.Model):
    """Admin curation rules applied to live GitHub repositories."""

    repo_name = models.CharField(max_length=100, unique=True)
    hidden = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)
    note = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "repo_name"]

    def __str__(self):
        return self.repo_name
