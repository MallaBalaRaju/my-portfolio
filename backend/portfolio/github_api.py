import html as html_lib
import os
import re

import requests
from django.conf import settings
from django.core.cache import cache

CACHE_TTL_SECONDS = 900
STALE_TTL_SECONDS = 86400
REQUEST_TIMEOUT_SECONDS = 5

FALLBACK_REPOS = [
    {
        "id": 1,
        "name": "my-portfolio",
        "description": (
            "A modern, premium personal portfolio showcasing my full-stack web "
            "development and data science projects. Built with React, and Tailwind CSS."
        ),
        "html_url": "https://github.com/MallaBalaRaju/my-portfolio",
        "stars": 1,
        "language": "JavaScript",
        "updated_at": "",
    },
    {
        "id": 2,
        "name": "LuxeShop-ECommerce",
        "description": (
            "Cloud-native e-commerce app utilizing DevOps essentials: Terraform for "
            "IaC, Docker for containerization, and Kubernetes (EKS) for orchestration."
        ),
        "html_url": "https://github.com/MallaBalaRaju/LuxeShop-ECommerce",
        "stars": 0,
        "language": "JavaScript",
        "updated_at": "",
    },
    {
        "id": 3,
        "name": "CloudDataGuard",
        "description": "",
        "html_url": "https://github.com/MallaBalaRaju/CloudDataGuard",
        "stars": 0,
        "language": "Python",
        "updated_at": "",
    },
    {
        "id": 4,
        "name": "PhishScope",
        "description": "",
        "html_url": "https://github.com/MallaBalaRaju/PhishScope",
        "stars": 0,
        "language": "TypeScript",
        "updated_at": "",
    },
    {
        "id": 5,
        "name": "djangocicd",
        "description": "practice",
        "html_url": "https://github.com/MallaBalaRaju/djangocicd",
        "stars": 0,
        "language": "Python",
        "updated_at": "",
    },
    {
        "id": 6,
        "name": "DATA-VISULIZATION",
        "description": "",
        "html_url": "https://github.com/MallaBalaRaju/DATA-VISULIZATION",
        "stars": 11,
        "language": "",
        "updated_at": "",
    },
]


def _fetch_via_rest_api(username):
    """Fetch public non-fork repositories using the GitHub REST API."""
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "malla-portfolio-django",
    }
    token = os.getenv("GITHUB_TOKEN", "").strip()
    if token:
        headers["Authorization"] = f"Bearer {token}"

    url = f"https://api.github.com/users/{username}/repos?sort=updated&per_page=100"
    response = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT_SECONDS)
    response.raise_for_status()

    return [
        {
            "id": r["id"],
            "name": r["name"],
            "description": r.get("description") or "",
            "html_url": r["html_url"],
            "stars": r.get("stargazers_count", 0),
            "language": r.get("language") or "",
            "updated_at": r.get("updated_at", ""),
        }
        for r in response.json()
        if not r.get("fork")
    ]


def _fetch_via_profile_html(username):
    """Fallback parser for github.com/<username>?tab=repositories when REST API rate-limits."""
    url = f"https://github.com/{username}?tab=repositories"
    response = requests.get(
        url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)"},
        timeout=REQUEST_TIMEOUT_SECONDS,
    )
    response.raise_for_status()

    items = re.findall(r'<li[^>]*class="col-12[^"]*"[^>]*>(.*?)</li>', response.text, re.S)
    repos = []
    for idx, block in enumerate(items, start=1):
        if "Forked from" in block:
            continue
        name_match = re.search(r'itemprop="name codeRepository"[^>]*>\s*([^<\s]+)', block)
        if not name_match:
            continue

        name = html_lib.unescape(name_match.group(1).strip())
        desc_match = re.search(r'itemprop="description"[^>]*>(.*?)</p>', block, re.S)
        lang_match = re.search(r'itemprop="programmingLanguage">([^<]+)<', block)
        star_match = re.search(
            rf'href="/{re.escape(username)}/[^"]+/stargazers"[^>]*>(.*?)</a>',
            block,
            re.S,
        )

        description = (
            html_lib.unescape(re.sub(r"\s+", " ", desc_match.group(1)).strip())
            if desc_match
            else ""
        )
        language = html_lib.unescape(lang_match.group(1).strip()) if lang_match else ""
        stars = 0
        if star_match:
            star_text = re.sub(r"<[^>]+>", "", star_match.group(1)).replace(",", "").strip()
            if star_text.isdigit():
                stars = int(star_text)

        repos.append(
            {
                "id": idx,
                "name": name,
                "description": description,
                "html_url": f"https://github.com/{username}/{name}",
                "stars": stars,
                "language": language,
                "updated_at": "",
            }
        )

    if not repos:
        raise ValueError("No repositories parsed from GitHub profile HTML")
    return repos


def fetch_public_repos():
    """Fetch non-fork public GitHub repositories with rate-limit fallback and caching."""
    username = settings.GITHUB_USERNAME
    cache_key = f"github_repos_{username}"
    stale_key = f"github_repos_stale_{username}"

    cached = cache.get(cache_key)
    if cached is not None:
        return cached

    repos = None
    for fetcher in (_fetch_via_rest_api, _fetch_via_profile_html):
        try:
            repos = fetcher(username)
            break
        except Exception:
            continue

    if repos is not None:
        cache.set(cache_key, repos, CACHE_TTL_SECONDS)
        cache.set(stale_key, repos, STALE_TTL_SECONDS)
        return repos

    stale = cache.get(stale_key)
    if stale is not None:
        return stale

    if username.lower() == "mallabalaraju":
        return FALLBACK_REPOS
    return []
