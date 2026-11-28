# Backend TODOs

- **Smart Resource Predictor (`pk: 5`, `slug: smart-resource-predictor`)**:
  - `github_url` in [initial_data.json](portfolio/fixtures/initial_data.json) is intentionally `""` until its dedicated repository URL is added.
  - Because Render runs on ephemeral SQLite, add permanent `github_url` and `live_url` updates directly to [initial_data.json](portfolio/fixtures/initial_data.json) and push to `django-rewrite`.
