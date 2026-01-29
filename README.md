# Wealth OS Marketing Site

Public marketing and content site for **wealthos.in**. The app lives at **[app.wealthos.in](https://app.wealthos.in)** and is in a separate private repo.

## Tech stack

- **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**
- **Runtime / package manager:** [Bun](https://bun.sh/) (Node-compatible; faster installs and runtime)
- **Content:** Markdown files in `content/` (e.g. `content/blog/`, `content/pages/`)
- **Rendering:** Static (SSG) at build time for speed and SEO
- No CMS, no database — content is files in the repo only

## Run locally

[Install Bun](https://bun.sh/) (`curl -fsSL https://bun.sh/install | bash`), then:

```bash
bun install
bun run dev
```

Commit `bun.lockb` after the first `bun install` for reproducible installs (and Docker builds).

Open [http://localhost:3000](http://localhost:3000).

Alternatively, use **Make**: `make install`, `make dev`, or `make help` for all targets.

## Add a blog post

1. Create a new Markdown file under `content/blog/`, e.g. `content/blog/2025-01-30-my-post.md`.
2. Add front matter at the top:

```yaml
---
title: My Post Title
description: Short description for SEO and listings.
slug: 2025-01-30-my-post   # optional; derived from filename if omitted
date: 2025-01-30
image: /og-blog.jpg        # optional, for Open Graph
---
```

3. Write your content in Markdown below the front matter.
4. Open a pull request. A reviewer will merge after approval.

## Add or edit a page

- Put Markdown files in `content/pages/` (e.g. `content/pages/faq.md`, `content/pages/pricing.md`).
- Use the same front matter: `title`, `description`, `slug` (optional).
- Pages are available at `/pages/<slug>`.

## Content workflow (GitHub)

- **Branch protection on `main`:** Require a pull request and at least one approval before merge. No direct pushes to `main`.
- **Editors:** Create branches, edit MD files under `content/`, open PRs. A manager reviews and merges content-only changes.
- **Developers:** Only they should approve changes to code/config. See **CODEOWNERS** below.

### Branch protection (recommended settings for `main`)

In **Settings → Branches → Branch protection rules** for `main`:

1. **Require a pull request before merging**
   - Require at least 1 approval
2. **Require review from Code Owners** (when CODEOWNERS applies)
3. Do **not** allow bypassing the above
4. Optionally: require status checks to pass if you add CI

This ensures:
- Content edits get at least one approval (e.g. from the marketing manager).
- Code/config changes require a review from the owners listed in `.github/CODEOWNERS`.

## CODEOWNERS

`.github/CODEOWNERS` defines who must approve changes:

- **`/content/`** — e.g. `@your-github-org/marketing-manager` (content/marketing team)
- **`/app/`, `/lib/`, `/components/`, `*.json`, `*.ts`, `*.tsx`** — e.g. `@your-github-org/developers`

Replace `@your-github-org/marketing-manager` and `@your-github-org/developers` with real GitHub usernames or team slugs. With “Require review from Code Owners” enabled, PRs that touch code paths will need a developer approval.

## SEO

- Every page has `<title>` and `<meta name="description">` from front matter (or defaults).
- Open Graph tags (title, description, image) for sharing.
- `sitemap.xml` is generated from blog posts and static pages at `/sitemap.xml`.

## Links

- **Marketing site:** [wealthos.in](https://wealthos.in)
- **App (sign-in / sign-up):** [app.wealthos.in](https://app.wealthos.in)

## Public repo safety

- No secrets in the repo. Use `.env.example` for variable names only; set real values in your deployment platform (e.g. Vercel).
- `.gitignore` includes `.env`, `.env.local`, `.env.*.local`.

## Build

```bash
bun run build
bun start
```

(Or `bun run build` then `bun run start`.)

---

For full requirements and structure, see `docs/BRIEF.md`.
