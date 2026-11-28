from datetime import datetime

from django.shortcuts import render
from django.templatetags.static import static

from .models import Education, Experience, Project, Resume, SiteProfile, SkillCategory
from .portfolio_data import (
    ABOUT_DATA,
    EDUCATION_DATA,
    EXPERIENCE_DATA,
    NAV_LINKS,
    PERSONAL_DATA,
    RESUMES_DATA,
    SKILLS_DATA,
    SOCIALS_DATA,
)


def index(request):
    """Render the portfolio landing page from database models with safe static defaults."""
    profile = SiteProfile.objects.first()
    if profile:
        personal = {
            "name": profile.name,
            "short_name": profile.short_name,
            "title": profile.title,
            "subtitle": profile.subtitle,
            "email": profile.email,
            "phone": profile.phone,
            "location": profile.location,
            "availability_label": profile.availability_label,
            "available": profile.available,
            "hero_metrics": profile.hero_metrics,
        }
        socials = {
            "github": profile.github_url,
            "linkedin": profile.linkedin_url,
            "email": f"mailto:{profile.email}",
            "phone": f"tel:{profile.phone.replace(' ', '')}",
        }
        about = {
            "paragraphs": profile.about_paragraphs,
            "highlights": profile.about_highlights,
        }
    else:
        personal = PERSONAL_DATA
        socials = SOCIALS_DATA
        about = ABOUT_DATA

    db_resumes = list(Resume.objects.filter(is_active=True))
    if db_resumes:
        resumes = [
            {
                "slug": r.slug,
                "label": r.label,
                "short_label": r.short_label,
                "focus": r.focus,
                "filename": r.filename,
                "href": r.external_url or static(r.static_path),
            }
            for r in db_resumes
        ]
    else:
        resumes = [
            {**r, "href": static(r["static_path"])}
            for r in RESUMES_DATA
        ]

    db_skills = list(SkillCategory.objects.all())
    skills = (
        [{"category": s.category, "items": s.items} for s in db_skills]
        if db_skills
        else SKILLS_DATA
    )

    projects = list(Project.objects.all())
    categories = ["All"] + list(dict.fromkeys(p.category for p in projects if p.category))
    projects_data = [
        {
            "id": p.pk,
            "slug": p.slug,
            "title": p.title,
            "subtitle": p.subtitle,
            "category": p.category,
            "outcome": p.outcome,
            "description": p.description,
            "architecture": p.architecture,
            "details": p.details,
            "stack": p.stack,
            "github_url": p.github_url,
            "live_url": p.live_url,
            "date": p.date,
            "featured": p.featured,
        }
        for p in projects
    ]

    db_experience = list(Experience.objects.all())
    experience = (
        [
            {
                "type": e.entry_type,
                "icon": e.icon,
                "title": e.title,
                "org": e.org,
                "date": e.date,
                "desc": e.description,
            }
            for e in db_experience
        ]
        if db_experience
        else EXPERIENCE_DATA
    )

    db_education = list(Education.objects.all())
    education = (
        [
            {
                "degree": e.degree,
                "field": e.field,
                "school": e.school,
                "location": e.location,
                "period": e.period,
                "grade": e.grade,
                "highlight": e.highlight,
            }
            for e in db_education
        ]
        if db_education
        else EDUCATION_DATA
    )

    return render(
        request,
        "portfolio/index.html",
        {
            "projects": projects,
            "categories": categories,
            "projects_data": projects_data,
            "resumes": resumes,
            "personal": personal,
            "socials": socials,
            "about": about,
            "skills": skills,
            "experience": experience,
            "education": education,
            "nav_links": NAV_LINKS,
            "current_year": datetime.now().year,
        },
    )
