# Portfolio 2.0

The professional research portfolio of **Chinyere Chidera Okechukwu, ACA, CISA, MBA** — built with Next.js App Router, TypeScript, and a data-first content model.

## Highlights

- Accessible, responsive researcher portfolio with light and dark themes
- Structured JSON and MDX content; reusable cards, timelines and publication records
- Search, publication filters, contact form validation, metadata, structured data, sitemap and robots rules
- Static-first build designed for Netlify or any Node-compatible host

## Local development

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Content editing

- Update profiles and records in `data/`.
- Add essays or policy briefs in `content/publications/` as MDX.
- Add download files to `public/downloads/` and update `data/downloads.json`.

## Deploy to GitHub + Netlify

1. Create an empty GitHub repository, then add it as `origin` and push `main`.
2. In Netlify, select **Add new site → Import an existing project** and choose the GitHub repository.
3. Set build command to `pnpm build` and publish directory to `.next` (Netlify detects Next.js automatically with its Next runtime).
4. Set `NEXT_PUBLIC_SITE_URL=https://chinyere-chidera-okechukwu.netlify.app` in Netlify environment variables until the custom domain is connected.
5. Add the custom domain in Netlify Domain management and point DNS records as Netlify instructs.

For form delivery, set `CONTACT_RECIPIENT_EMAIL` and connect the route handler to a transactional provider before publishing. The included endpoint validates and safely accepts requests but intentionally does not email a recipient without a provider configuration.
