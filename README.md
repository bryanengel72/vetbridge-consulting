# VetBridge Consulting

Marketing site for [vetbridgeconsulting.com](https://vetbridgeconsulting.com): veterinary practice systems integration, Kansas City and San Diego.

## Stack

- Vite + React 19 + TypeScript
- Hand-written CSS in `src/index.css` (Tailwind is imported for layout utilities only)
- Fonts: Montserrat (display) and Nunito Sans (body) from Google Fonts
- Contact form sends through [EmailJS](https://www.emailjs.com/) from the browser
- Vercel Analytics (cookieless)

## Pages

| URL | Entry |
|---|---|
| `/` | `index.html` → `src/index.tsx` |
| `/san-diego` | `san-diego.html` → `src/sandiego.tsx` (rewrite in `vercel.json`) |

Both render `src/App.tsx`; city-specific copy and phone numbers live in `src/city.ts`.

## Run locally

Requires Node.js.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs to dist/
```

The dev server listens on localhost only.

## Deploy

Pushing to `main` deploys to production on Vercel. Security headers (CSP and friends) are set in `vercel.json`. If you add a new third-party script, font or API, add its origin to the `Content-Security-Policy` there. If you change the inline script in the `<head>` of either HTML file, update its `sha256-` hash in the policy as well.
