from django.db import models


class SiteProfile(models.Model):
    """Primary portfolio profile, hero metrics, socials, and About section content."""

    name = models.CharField(max_length=120)
    short_name = models.CharField(max_length=20, default="MBR")
    title = models.CharField(max_length=160)
    subtitle = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    location = models.CharField(max_length=120)
    availability_label = models.CharField(max_length=160)
    available = models.BooleanField(default=True)
    github_url = models.URLField()
    linkedin_url = models.URLField()
    hero_metrics = models.JSONField(default=list)
    about_paragraphs = models.JSONField(default=list)
    about_highlights = models.JSONField(default=list)

    class Meta:
        verbose_name = "Site Profile"
        verbose_name_plural = "Site Profile"

    def __str__(self):
        return f"{self.name} ({self.title})"


class Resume(models.Model):
    """Targeted resume entries displayed in Navbar and Contact sections."""

    slug = models.SlugField(unique=True)
    label = models.CharField(max_length=80)
    short_label = models.CharField(max_length=50)
    focus = models.CharField(max_length=200)
    filename = models.CharField(max_length=160)
    static_path = models.CharField(max_length=255, blank=True)
    external_url = models.URLField(blank=True, help_text="Optional external PDF URL; overrides static_path when set.")
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "label"]

    def __str__(self):
        return self.label


class SkillCategory(models.Model):
    """Grouped technical skills displayed in the Skills section."""

    category = models.CharField(max_length=80, unique=True)
    items = models.JSONField(default=list)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Skill Categories"
        ordering = ["order", "category"]

    def __str__(self):
        return self.category


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


class Experience(models.Model):
    """Training, certifications, and activities timeline entries."""

    ENTRY_TYPES = [
        ("certificate", "Certificate"),
        ("training", "Training"),
        ("activity", "Activity"),
    ]
    ICON_CHOICES = [
        ("Award", "Award"),
        ("Briefcase", "Briefcase"),
        ("BookOpen", "BookOpen"),
    ]

    entry_type = models.CharField(max_length=20, choices=ENTRY_TYPES, default="certificate")
    icon = models.CharField(max_length=20, choices=ICON_CHOICES, default="Award")
    title = models.CharField(max_length=160)
    org = models.CharField(max_length=120)
    date = models.CharField(max_length=40)
    description = models.TextField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "title"]

    def __str__(self):
        return f"{self.title} — {self.org}"


class Education(models.Model):
    """Academic background entries."""

    degree = models.CharField(max_length=120)
    field = models.CharField(max_length=160, blank=True)
    school = models.CharField(max_length=160)
    location = models.CharField(max_length=120)
    period = models.CharField(max_length=60)
    grade = models.CharField(max_length=40)
    highlight = models.CharField(max_length=120, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Education"
        ordering = ["order"]

    def __str__(self):
        return f"{self.degree} — {self.school}"
