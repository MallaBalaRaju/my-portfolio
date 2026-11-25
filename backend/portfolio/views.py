from datetime import datetime

from django.shortcuts import render

from .models import Project
from .portfolio_data import (
    ABOUT_DATA,
    EDUCATION_DATA,
    EXPERIENCE_DATA,
    NAV_LINKS,
    PERSONAL_DATA,
    SKILLS_DATA,
    SOCIALS_DATA,
)


def index(request):
    """Render the portfolio landing page with DB projects and profile content."""
    projects = list(Project.objects.all())
    projects_data = [
        {
            "id": p.pk,
            "slug": p.slug,
            "title": p.title,
            "subtitle": p.subtitle,
            "outcome": p.outcome,
            "description": p.description,
            "details": p.details,
            "stack": p.stack,
            "github_url": p.github_url,
            "live_url": p.live_url,
            "date": p.date,
            "featured": p.featured,
        }
        for p in projects
    ]

    return render(
        request,
        "portfolio/index.html",
        {
            "projects": projects,
            "projects_data": projects_data,
            "personal": PERSONAL_DATA,
            "socials": SOCIALS_DATA,
            "about": ABOUT_DATA,
            "skills": SKILLS_DATA,
            "experience": EXPERIENCE_DATA,
            "education": EDUCATION_DATA,
            "nav_links": NAV_LINKS,
            "current_year": datetime.now().year,
        },
    )
