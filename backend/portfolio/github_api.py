import requests
from django.conf import settings
from django.core.cache import cache

CACHE_TTL_SECONDS = 300


def fetch_public_repos():
    """Fetch non-fork public GitHub repositories for GITHUB_USERNAME, cached for 5 minutes."""
    username = settings.GITHUB_USERNAME
    cache_key = f"github_repos_{username}"
    cached = cache.get(cache_key)
    if cached is not None:
        return cached

    url = f"https://api.github.com/users/{username}/repos?sort=updated&per_page=100"
    response = requests.get(
        url,
        headers={"Accept": "application/vnd.github+json"},
        timeout=5,
    )
    response.raise_for_status()

    repos = [
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
    cache.set(cache_key, repos, CACHE_TTL_SECONDS)
    return repos
