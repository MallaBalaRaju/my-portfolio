from django.contrib import admin

from .models import Project, RepoOverride


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "featured", "order", "date"]
    list_editable = ["featured", "order"]
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ["title", "subtitle", "description"]


@admin.register(RepoOverride)
class RepoOverrideAdmin(admin.ModelAdmin):
    list_display = ["repo_name", "hidden", "featured", "order"]
    list_editable = ["hidden", "featured", "order"]
    search_fields = ["repo_name", "note"]
