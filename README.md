# Verdant Estates

A responsive real estate consultancy website built with Next.js App Router, React and TypeScript. Includes an emerald/gold design, five-location project filtering, property category filters, keyboard-accessible modal galleries, a developer reference marquee, founder profiles, delivered portfolio, mobile navigation and server-side email inquiries.

## Run locally

Use Node.js 20.9 or newer (a supported Node LTS is recommended).

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell where script execution is restricted, use `npm.cmd` instead of `npm`.

## Configure inquiry delivery

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`: your Resend API key.
- `CONTACT_EMAIL`: the address that should receive inquiries.
- `FROM_EMAIL`: a sender on your verified Resend domain, such as `Verdant Estates <website@yourdomain.com>`.

Restart the server after changing environment variables. The form posts to `/api/inquiry`, validates the input again on the server, and delivers a plain-text email through Resend. It only reports success after the provider accepts the email. No database is required. Missing configuration returns a clear service-unavailable error; inquiries are not saved in this state. A visit request is an inquiry, not a confirmed appointment.

## Replace demo content before launch

- `components/siteConfig.ts`: company name, contact details and WhatsApp/Instagram/YouTube URLs. Social destinations currently use explicit placeholders.
- `components/Navigation.tsx`: temporary wordmark; replace with the official company logo.
- `components/projects.ts`: illustrative listing names, descriptions, locations, image URLs and highlights.
- `app/page.tsx`: brand narrative, founder biographies, approved portraits, experience and completed project details.
- `app/layout.tsx`: SEO metadata.
- `app/globals.css`: design tokens, typography and responsive styles.

No logo, founder photographs, verified project data, years of experience or partner agreements were provided. Founder portraits are neutral initials, listings and delivered work are marked as samples, and developer logos are industry references with no affiliation claim (official asset sources are recorded in `public/developers/SOURCES.md`). Replace them with approved content before presenting this as a live business site. Images are illustrative Unsplash photographs, not verified property photography. Fonts load from Google Fonts with local fallback fonts.

## Production

```sh
npm run check
npm run build
npm start
```

Deploy to a Node-compatible Next.js host (for example, Vercel), using `npm run build` and the same three server-side environment variables. Do not use a static-only export: the inquiry endpoint requires a server. Configure your domain in the host, verify the sender domain in Resend, then submit a test inquiry and confirm receipt. Add host-level request rate limiting before public promotion. Never commit `.env.local` or API keys.

## Verification

The production build and TypeScript checks verify compilation. API smoke checks cover malformed JSON, null payloads, invalid fields and the missing-configuration response. Live email delivery requires valid credentials. Browser automation was unavailable in the development environment, so real-device layout and interaction review remains necessary.
