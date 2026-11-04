# Malla Bala Raju — Portfolio

> **Live site:** [mallabalaraju.github.io/my-portfolio](https://mallabalaraju.github.io/my-portfolio/)

A fast, accessible, single-page portfolio targeting **Full-Stack Developer** and **DevOps/Cloud** roles.  
Built with React 18, Vite, Tailwind CSS, and Framer Motion — deployed automatically to GitHub Pages via GitHub Actions.

---

<!-- ⚠️ Replace the placeholder below with a real screenshot once the site is updated -->
<!-- ![Portfolio screenshot](./public/og-image.png) -->

## ✨ Features

- **Targeted positioning** — leads with Full-Stack + DevOps/Cloud, backed by NPTEL Cloud Computing certification and Docker usage
- **Skill categories** — Cloud & DevOps · Frontend · Backend · Data Science & ML · Languages & Tools
- **Project cards** — one-line outcome, full tech stack, GitHub link, live-demo link (or ⚠ flag when missing)
- **Download Resume** button in navbar and hero
- **SEO-ready** — OG tags, Twitter Card, JSON-LD Person schema, canonical URL, `theme-color`
- **Accessible** — skip-to-content link, ARIA labels, keyboard focus rings, `prefers-reduced-motion` guard on all Framer Motion animations
- **Performance** — lazy-loaded below-fold sections (`React.lazy` + `Suspense`), optimised font weights only
- **GitHub Actions CI/CD** — lint → build → deploy on every push to `main`

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 + custom CSS variables |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Linting | ESLint + jsx-a11y + react-hooks |
| Formatting | Prettier |
| Deployment | GitHub Pages via GitHub Actions |

## 🚀 Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/MallaBalaRaju/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server  (http://localhost:5173/my-portfolio/)
npm run dev
```

## 🏗 Build & Preview

```bash
npm run build      # outputs to ./dist
npm run preview    # serves ./dist locally at http://localhost:4173/my-portfolio/
```

## 🔍 Lint & Format

```bash
npm run lint       # ESLint (0 warnings allowed in CI)
npm run format     # Prettier write
```

## 📦 Deploy

Deployment is **automatic** — push to `main` and GitHub Actions will:

1. Run `npm run lint`
2. Run `npm run build`
3. Deploy `./dist` to the `gh-pages` environment

You can also trigger a deploy manually from **Actions → Deploy Portfolio to GitHub Pages → Run workflow**.

> [!NOTE]
> `vite.config.js` has `base: '/my-portfolio/'` to match the GitHub Pages sub-path.

## 📝 Customise Content

All content lives in one file: [`src/data/portfolio.js`](./src/data/portfolio.js)

| Export | What it controls |
|--------|-----------------|
| `personal` | Name, title, subtitle, contact info |
| `socials` | GitHub, LinkedIn, email, resume path |
| `about` | Bio paragraphs + highlight cards |
| `skills` | Skill categories and items |
| `projects` | Project cards (add `live:` URL when you deploy a project) |
| `experience` | Certifications and training |
| `education` | Degree and school records |

## ⚠️ Items Still Needed

- [ ] `public/og-image.png` — 1200×630 preview image for OG/Twitter cards
- [ ] `public/favicon.svg` — replace the inline data-URI fallback
- [ ] `live:` URLs in `projects` array for each deployed project
- [ ] Correct GitHub repo URL for **Smart Resource Predictor** (currently points to profile root)

## 🏷 Suggested GitHub Repo Metadata

| Field | Value |
|-------|-------|
| **About** | Full-Stack & DevOps portfolio — React, Vite, Tailwind CSS, Framer Motion. B.Tech CSE @ LPU 2023–2027. |
| **Website** | https://mallabalaraju.github.io/my-portfolio/ |
| **Topics** | `react` `vite` `tailwindcss` `portfolio` `framer-motion` `github-pages` `devops` `full-stack` |

## 📄 License

MIT
