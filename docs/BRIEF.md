# Brief: Create the Wealth OS Marketing Site Repo

Use this document when asking Cursor (or another developer) to create the **separate public repository** for the Wealth OS marketing/content site at **wealthos.in**. The app lives at **app.wealthos.in** and stays in the existing private monorepo.

---

## 1. Purpose

- **Marketing and content site** for wealthos.in (landing, blog, FAQ, pricing, etc.).
- **Separate public GitHub repo** — no app code, no backend; all content is public.
- **Content in Markdown (MD/MDX) files** — simple, version-controlled, SEO-friendly. Non-engineers will edit via PRs; a manager reviews and merges.

---

## 2. Tech Stack

- **Framework:** Next.js 15 (App Router), TypeScript.
- **Content:** Markdown or MDX files in a `content/` directory (e.g. `content/blog/`, `content/pages/`).
- **Rendering:** Static (SSG) — build-time generation from MD files for speed and SEO.
- **Styling:** Tailwind CSS + **exact same design system as app.wealthos.in** (see section 9). Use ShadCN/UI components and the same CSS variables so wealthos.in and app.wealthos.in look and feel identical.
- **No CMS, no database** — content is files in the repo only.

---

## 3. Repo Structure (Minimum)

```
content/
  blog/           # e.g. 2025-01-29-my-post.md
  pages/          # e.g. faq.md, pricing.md (if you want flat pages)
app/
  (routes)        # Next.js App Router: page.tsx, layout.tsx, blog/[slug]/page.tsx, etc.
public/
.github/
  CODEOWNERS      # See section 6
lib/ or utils/    # e.g. read MD files, parse front matter, generate metadata
```

- **Front matter** in every MD file: `title`, `description`, `slug` (optional if derived from filename), `date` (for blog), `image` (optional). Use these for `<title>`, meta description, Open Graph, and sitemap.

---

## 4. SEO Requirements

- **Meta:** Every page has `<title>` and `<meta name="description">` from front matter (or sensible defaults).
- **Open Graph:** Basic OG tags for sharing (title, description, image).
- **Sitemap:** Generate `sitemap.xml` from the list of content (blog posts + static pages).
- **Semantic HTML:** Use `<article>`, `<main>`, headings in order. No content loaded only client-side for critical text (so crawlers see it).

---

## 5. Content Editing Workflow (GitHub)

- **Branch protection on `main`:** Require a pull request and at least one approval before merge. No direct pushes to `main`.
- **Editors:** Given Write access; they create branches, edit MD files under `content/`, open PRs.
- **Manager:** Reviews and merges PRs that only touch content.
- **Developers:** Only they should approve changes to code/config (see CODEOWNERS).

---

## 6. CODEOWNERS (Example)

Create `.github/CODEOWNERS`:

```
# Content: manager/marketing team approves
/content/  @your-github-org/marketing-manager

# Code and config: only developers approve
/app/      @your-github-org/developers
/lib/      @your-github-org/developers
/components/  @your-github-org/developers
*.json     @your-github-org/developers
*.ts       @your-github-org/developers
*.tsx      @your-github-org/developers
```

Replace `@your-github-org/marketing-manager` and `@your-github-org/developers` with real GitHub usernames or team slugs. In branch protection for `main`, enable **“Require review from Code Owners”** so PRs that touch code paths need a developer approval.

---

## 7. Public Repo Safety

- **No secrets in the repo.** No `.env` with keys or tokens. Use `.env.example` or `env.template` listing only variable names (e.g. `NEXT_PUBLIC_SITE_URL`) with no real values.
- **All config in repo** must be safe for public (e.g. `next.config.js`, `package.json`). Any API keys or secrets only in the deployment platform’s environment (e.g. Vercel).
- **.gitignore:** Include `.env`, `.env.local`, `.env.*.local`, and common OS/editor folders.

---

## 8. App / Marketing Links

- **Marketing site base URL:** https://wealthos.in (or https://www.wealthos.in — pick one canonical).
- **App sign-in / sign-up:** Link to **https://app.wealthos.in** from CTAs (e.g. “Get started”, “Sign in”).

---

## 9. Styling: Match app.wealthos.in Exactly

The marketing site must use the **same look and feel** as the app (app.wealthos.in). Copy the following from the app's codebase (or replicate exactly).

### 9.1 Global CSS variables (ShadCN-style)

In `app/globals.css` (or equivalent), define the same `:root` variables. Values are **HSL without the `hsl()` wrapper** (Tailwind adds it via the theme):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 9.2 Tailwind config

- **Theme:** Extend `colors` so each name uses `hsl(var(--name))` (e.g. `background: 'hsl(var(--background))'`, `primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' }`, etc. for background, foreground, card, primary, secondary, muted, accent, destructive, border, input, ring).
- **Border radius:** `borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' }`.
- **Plugins:** `tailwindcss-animate`.
- **darkMode:** `'class'` (optional; app supports it but uses light by default).

### 9.3 Font

- **Inter** from Next.js: `import { Inter } from 'next/font/google';` then `const inter = Inter({ subsets: ['latin'] });`. Use `className={inter.className}` on `<body>` in the root layout.

### 9.4 Components and utilities

- **ShadCN/UI:** Use the same component set as the app where needed: Button, Card, Input, etc. Install via `npx shadcn@latest init` and add components (e.g. `button`, `card`). Ensure the ShadCN theme matches the CSS variables above (default ShadCN theme uses the same variable names).
- **cn() utility:** `lib/utils.ts` with `import { clsx, type ClassValue } from 'clsx'; import { twMerge } from 'tailwind-merge'; export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }`. Use for merging class names in components.
- **Dependencies:** `tailwindcss-animate`, `class-variance-authority`, `clsx`, `tailwind-merge`, and the same Radix UI primitives used by the ShadCN components you add (e.g. `@radix-ui/react-slot` for Button).

### 9.5 Summary

- Same **CSS variables** (globals.css).
- Same **Tailwind theme** (semantic colors from vars, radius, tailwindcss-animate).
- Same **font:** Inter.
- Same **component system:** ShadCN/UI + `cn()`.

Result: headers, buttons, cards, and typography on wealthos.in will match app.wealthos.in so the brand feels unified.

---

## 10. Deliverables

1. **New public GitHub repo** with the above structure, Next.js 15 + TypeScript, Tailwind, and content in `content/` as MD/MDX.
2. **Homepage** (e.g. `app/page.tsx`) that reads from content or static copy; **blog** list and **blog/[slug]** pages reading from `content/blog/`.
3. **SEO:** Meta tags, OG, and sitemap from content.
4. **README** with: how to run locally (`npm install`, `npm run dev`), how to add a blog post (add MD file under `content/blog/` with front matter), and pointer to this workflow (PR + review, CODEOWNERS).
5. **.github/CODEOWNERS** as in section 6 (with placeholders replaced by actual users/teams).
6. **Branch protection** instructions in README or a short `CONTRIBUTING.md`: protect `main`, require PR + 1 approval, require Code Owners review when CODEOWNERS applies.
7. **Styling:** Exact match to app.wealthos.in (section 9): same globals.css variables, Tailwind config, Inter font, ShadCN/UI and `cn()`.

---

## 11. Optional (Can Add Later)

- MDX for richer content (e.g. custom components in posts).
- Tina CMS or Decap CMS for a web UI that edits the same MD files (still in repo).
- RSS feed for the blog.
- Analytics (e.g. Vercel Analytics or a privacy-friendly script) via env-controlled config.

---

**Summary for the prompt to Cursor:**

“Create a new **public** Next.js 15 (App Router) + TypeScript repo for the Wealth OS marketing site at wealthos.in. Content lives in **Markdown files** under `content/` (e.g. `content/blog/`, `content/pages/`). Use front matter for title, description, date; generate static pages and sitemap for SEO. No CMS, no secrets in repo. Use the exact same styling as app.wealthos.in (section 9: same CSS variables, Tailwind config, Inter font, ShadCN/UI and cn()). Include `.github/CODEOWNERS` and README with branch protection (require PR + review on `main`). App link: https://app.wealthos.in. Follow MARKETING_SITE_REPO_BRIEF.md.”
