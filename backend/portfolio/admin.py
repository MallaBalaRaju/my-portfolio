from django.contrib import admin
from django.contrib.auth.models import Group

from .models import Education, Experience, Project, Resume, SiteProfile, SkillCategory

admin.site.unregister(Group)
admin.site.site_header = "Malla Bala Raju — Portfolio Admin"
admin.site.site_title = "MBR Portfolio Admin"
admin.site.index_title = "Manage All Portfolio Content"


@admin.register(SiteProfile)
class SiteProfileAdmin(admin.ModelAdmin):
    list_display = ["name", "title", "email", "available"]
    fieldsets = (
        ("Identity & Hero", {"fields": ("name", "short_name", "title", "subtitle", "availability_label", "available", "hero_metrics")}),
        ("Contact & Links", {"fields": ("email", "phone", "location", "github_url", "linkedin_url")}),
        ("About Section", {"fields": ("about_paragraphs", "about_highlights")}),
    )


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ["label", "short_label", "is_active", "order"]
    list_editable = ["is_active", "order"]
    prepopulated_fields = {"slug": ("label",)}
    search_fields = ["label", "focus", "filename"]


@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ["category", "order"]
    list_editable = ["order"]
    search_fields = ["category"]


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "category", "featured", "order", "date"]
    list_editable = ["category", "featured", "order"]
    list_filter = ["category", "featured"]
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ["title", "subtitle", "description"]


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ["title", "org", "entry_type", "date", "order"]
    list_editable = ["order"]
    list_filter = ["entry_type"]
    search_fields = ["title", "org", "description"]


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ["degree", "school", "grade", "period", "order"]
    list_editable = ["order"]
    search_fields = ["degree", "field", "school"]
