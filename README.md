# VarunCodeX Website

Premium startup-ready website for **VarunCodeX**, the personal technical brand and technology services platform by **Varun Tripathi**.

VarunCodeX helps students, startups, and businesses build digital products, learn modern technologies, automate workflows, and grow with AI-powered systems.

## Features

- Dark premium AI-tech design
- Responsive navbar and mobile menu
- Dedicated pages for services, projects, AI vision, workflow, pricing, community, and contact
- WhatsApp Business CTAs across the website
- Floating WhatsApp button
- WhatsApp-powered inquiry form with encoded message generation
- Service-specific WhatsApp inquiry buttons
- Dedicated VarunCodeX community page
- SEO metadata and Open Graph setup
- Reusable components and centralized brand constants
- Vercel-ready project structure

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS
- lucide-react icons

## Folder Structure

```text
/app
  /about
  /ai-vision
  /community
  /contact
  /pricing
  /projects
  /services
  /workflow
  globals.css
  layout.jsx
  page.jsx
/components
  About.jsx
  AIVision.jsx
  ButtonLink.jsx
  Community.jsx
  CommunityPageContent.jsx
  Contact.jsx
  FloatingWhatsApp.jsx
  Footer.jsx
  Founder.jsx
  Hero.jsx
  Navbar.jsx
  PageHero.jsx
  Pricing.jsx
  Projects.jsx
  SectionHeader.jsx
  Services.jsx
  Workflow.jsx
/data
  brand.js
  pricing.js
  projects.js
  services.js
  workflow.js
/public
  /assets
    varuncodex-logo.png
    logo.png
```

## Setup Commands

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build Command

```bash
npm run build
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the default Next.js settings.
5. Click **Deploy**.

Vercel will automatically run:

```bash
npm install
npm run build
```

## Contact Details

- Brand: VarunCodeX
- Founder: Varun Tripathi
- Tagline: Build • Learn • Automate • Grow
- WhatsApp Business: +91 8817505725
- LinkedIn: www.linkedin.com/in/varun-tripathi-439436218
- Instagram: @VarunCodeX

## Notes

- The contact form does not store data in a database.
- On submit, it validates required fields and opens WhatsApp Business with a pre-filled message.
- The temporary community CTA uses `https://wa.me/918817505725`.
- Replace `WHATSAPP_COMMUNITY_LINK` in `data/brand.js` when the final WhatsApp Channel or Community invite link is available.
- The website avoids fake achievements, fake clients, fake partnerships, and unverified company registration claims.
