# Syafri Surya Portfolio

Modern Next.js portfolio rebuilt from the original React implementation while preserving the same sections, content, dark/light mode, animations, spacing, and visual style.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- `next/image` for optimized local assets

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # local development
npm run build      # production build
npm run start      # run production build locally
npm run lint       # ESLint
npm run type-check # TypeScript validation
```

## Environment

Copy `.env.example` to `.env.local` when overriding production values:

```bash
NEXT_PUBLIC_SITE_URL=https://syafrisurya.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_d87741p
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_ics8m2l
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=HZVK84zdM2K-TY6HQ
```

`NEXT_PUBLIC_SITE_URL` is used for canonical, sitemap, robots, and structured data URLs.

## SEO

The App Router metadata API configures:

- title and description
- canonical URL
- Open Graph metadata
- Twitter Card metadata
- robots directives
- sitemap.xml
- robots.txt
- web app manifest
- JSON-LD `Person` structured data

## Deployment

This project is ready for Vercel:

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Run the default Vercel build command: `npm run build`.
