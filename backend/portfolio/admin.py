from django.contrib import admin

from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "category", "featured", "order", "date"]
    list_editable = ["category", "featured", "order"]
    list_filter = ["category", "featured"]
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ["title", "subtitle", "description"]
