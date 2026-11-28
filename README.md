# Malla Bala Raju — Portfolio

> **Live site:** [malla-portfolio-django.onrender.com](https://malla-portfolio-django.onrender.com/)  
> **GitHub Pages redirect (`main`):** [mallabalaraju.github.io/my-portfolio](https://mallabalaraju.github.io/my-portfolio/)

Personal engineering portfolio for **Malla Bala Raju** (B.Tech CSE, Lovely Professional University, 2023–2027), built with **Django 6**, **Tailwind CSS v3.4 CLI**, and **Vanilla JavaScript**, deployed on **Render** from the `django-rewrite` branch.

---

## Features

- **Obsidian & Signal Mint UI** (`#090D11` background, `#10B981` primary, `#38BDF8` technical accent) compiled cleanly via Tailwind CLI.
- **Dual Targeted Resumes**:
  - **DevOps & Cloud Resume** (`Malla_Bala_Raju_DevOps_Resume.pdf`)
  - **Full-Stack & Data Resume** (`Malla_Bala_Raju_FullStack_Resume.pdf`)
  - Accessible from the Navbar `Resumes` menu, Hero CTAs, and Contact section (inline View + PDF Download).
- **7 Filterable Projects** backed by Django ORM (`Project` model) with category filters (`All`, `DevOps & Cloud`, `Full-Stack`, `Data & ML`), architecture flow diagrams, and an interactive detail modal.
- **One-Click Contact Copy + Toast**: Copy email or phone directly from the Contact section.
- **Accessibility & SEO**: Skip-to-content link, `prefers-reduced-motion` guards, keyboard modal controls, Open Graph + Twitter Card tags with a `1200×630` preview image, and JSON-LD `Person` schema.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python 3.14, Django 6.1, Gunicorn |
| Database | SQLite (`backend/db.sqlite3`, auto-seeded from `initial_data.json` on build) |
| Static Serving | WhiteNoise (`CompressedManifestStaticFilesStorage`) |
| Styling | Tailwind CSS v3.4 CLI + custom CSS tokens (`input.css`) |
| Client Interactions | Vanilla JavaScript (`main.js`) |
| Hosting | Render (`render.yaml` Blueprint on `django-rewrite`) + GitHub Pages redirect (`main`) |

---

## Project Structure

```text
my_portfolio/
├── index.html                           # GitHub Pages redirect on `main`
├── render.yaml                          # Render Blueprint (build + Gunicorn start)
├── README.md
└── backend/
    ├── manage.py
    ├── requirements.txt
    ├── tailwind.config.js               # Tailwind theme & content paths
    ├── .env.example
    ├── config/
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    └── portfolio/
        ├── models.py                    # Project model
        ├── admin.py                     # Django Admin registration
        ├── views.py                     # Landing page view + modal JSON payload
        ├── portfolio_data.py            # Profile, dual resumes, skills, experience, education
        ├── fixtures/
        │   └── initial_data.json        # Seeded projects (7 entries)
        ├── migrations/
        ├── templates/portfolio/
        │   ├── base.html
        │   ├── index.html
        │   └── partials/                # _navbar, _hero, _about, _skills, _projects, _experience, _education, _contact, _footer
        └── static/portfolio/
            ├── css/                     # input.css -> tailwind.css (minified)
            ├── files/                   # Two resume PDFs
            ├── img/                     # og-image.png (1200x630)
            └── js/                      # main.js
```

---

## Run Locally (Windows PowerShell)

```powershell
# 1. Clone and switch to the Django branch
git clone https://github.com/MallaBalaRaju/my-portfolio.git
cd my-portfolio
git checkout django-rewrite

# 2. Create virtual environment & install Python packages
python -m venv backend\.venv
.\backend\.venv\Scripts\pip install -r backend\requirements.txt

# 3. Copy environment defaults
Copy-Item backend\.env.example backend\.env

# 4. Build Tailwind CSS (requires Node.js)
npx tailwindcss -c backend/tailwind.config.js -i backend/portfolio/static/portfolio/css/input.css -o backend/portfolio/static/portfolio/css/tailwind.css --minify

# 5. Migrate, seed projects, collect static files, and start server
.\backend\.venv\Scripts\python backend\manage.py migrate
.\backend\.venv\Scripts\python backend\manage.py loaddata initial_data
.\backend\.venv\Scripts\python backend\manage.py collectstatic --no-input
.\backend\.venv\Scripts\python backend\manage.py runserver
```

Open `http://127.0.0.1:8000/`.

---

## Updating Content & Resumes

| What to Update | Where |
|---|---|
| Bio, skills, experience, education, resume labels | `backend/portfolio/portfolio_data.py` |
| Projects (cards, architecture flow, stack, URLs) | `backend/portfolio/fixtures/initial_data.json` (or `/admin/` locally) |
| **DevOps & Cloud Resume PDF** | Replace `backend/portfolio/static/portfolio/files/Malla_Bala_Raju_DevOps_Resume.pdf` |
| **Full-Stack & Data Resume PDF** | Replace `backend/portfolio/static/portfolio/files/Malla_Bala_Raju_FullStack_Resume.pdf` |

After replacing PDFs or updating `initial_data.json` / templates, commit and push to `django-rewrite` — Render redeploys automatically.

---

## Deployment Notes

- **`django-rewrite` branch**: Built and served by Render using `render.yaml` (`pip install`, Tailwind CLI `--minify`, `migrate`, conditional `loaddata initial_data`, `collectstatic`, and `gunicorn`).
- **`main` branch**: Triggers `.github/workflows/deploy.yml` to publish `index.html` as a redirect from `https://mallabalaraju.github.io/my-portfolio/` to `https://malla-portfolio-django.onrender.com/`.

---

## License

MIT
