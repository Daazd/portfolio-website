# Daazd Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, deployed to GitHub Pages.

## Live Site

🌐 [https://daazd.github.io/portfolio-website/](https://daazd.github.io/portfolio-website/)

## Tech Stack

- **Next.js 16** — App Router, static export
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **GitHub Pages** — Static hosting
- **GitHub Actions** — Automated CI/CD deployment

## Features

- 🌙 Dark theme with cyan/blue gradient aesthetics
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⭐ 5 featured projects with screenshots and tech tags
- 📦 Dynamic "All Projects" section powered by the GitHub API
- 🛠️ Skills section organized by category
- 🚀 Auto-deploy to GitHub Pages on push to `main`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is generated in the `./out` directory (static export).

## Structure

```
src/
  app/
    components/
      Navbar.tsx
      Hero.tsx
      Skills.tsx
      FeaturedProjects.tsx
      AllProjects.tsx
      ProjectCard.tsx
      Footer.tsx
    globals.css
    layout.tsx
    page.tsx
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the `main` branch. The workflow:

1. Checks out the code
2. Installs Node.js 20 and dependencies (`npm ci`)
3. Builds the static export (`npm run build`)
4. Uploads the `./out` directory as a Pages artifact
5. Deploys to GitHub Pages

See `.github/workflows/deploy.yml` for the full workflow configuration.
