from datetime import datetime

from django.shortcuts import render

from .github_api import fetch_public_repos
from .models import Project, RepoOverride
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
    """Render the portfolio landing page with DB projects and curated GitHub repos."""
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

    overrides = {o.repo_name: o for o in RepoOverride.objects.all()}

    try:
        raw_repos = fetch_public_repos()
        repos = []
        for r in raw_repos:
            ov = overrides.get(r["name"])
            if getattr(ov, "hidden", False):
                continue
            repos.append(
                {
                    **r,
                    "note": getattr(ov, "note", "") or r["description"],
                    "featured": getattr(ov, "featured", False),
                    "order": getattr(ov, "order", 0),
                }
            )
        repos.sort(key=lambda r: (not r["featured"], r["order"], -r["stars"]))
    except Exception:
        repos = []

    return render(
        request,
        "portfolio/index.html",
        {
            "projects": projects,
            "projects_data": projects_data,
            "repos": repos,
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
