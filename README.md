# Hon. Suleiman Salihu Usman — Official Website

Personal branding website for Honourable Suleiman Salihu Usman, NDC House of Representatives aspirant from Zamfara State, Nigeria.

Built with **React 19 + Vite + TypeScript + Tailwind CSS v4 + Framer Motion**.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Serve with `npm run preview` to test locally.

## Deploy to Netlify

### Option A — One-click (recommended)

1. Push this folder to a GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Connect your GitHub repo.
4. Netlify auto-detects `netlify.toml` — build command and publish directory are already set.
5. Click **Deploy site**.

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
npm run build
netlify deploy --prod --dir=dist
```

### Forms (Contact / Volunteer / Newsletter)

This site uses **Netlify Forms** — no backend required. On first deploy, Netlify's build crawler detects the hidden form definitions in `index.html` and starts capturing submissions automatically. View submissions in your Netlify dashboard under **Forms**.

---

## Project Structure

```
src/
├── animations/     Framer Motion variants
├── components/
│   ├── common/     Reusable UI cards and counters
│   ├── forms/      NetlifyForm wrapper
│   └── ui/         shadcn/ui base components
├── constants/      Site-wide config (name, nav, social links)
├── data/           All content — edit here, not in components
├── hooks/          useSEO, useAnimatedCounter
├── layouts/        MainLayout (navbar + footer)
├── pages/          One file per route
└── utils/          cn() helper
public/
└── images/         All photos and illustrations
```

## Editing Content

All content lives in `src/data/`. No need to touch components:

| File | Controls |
|------|----------|
| `about.ts` | Biography, values, timeline |
| `vision.ts` | Vision areas |
| `programs.ts` | Programs list |
| `projects.ts` | Community impact projects |
| `news.ts` | News articles |
| `gallery.ts` | Gallery images |
| `testimonials.ts` | Testimonials |
| `statistics.ts` | Stats counters |
| `src/constants/siteConfig.ts` | Name, phone, email, social links, nav |
