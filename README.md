# Milan Budhathoki — Portfolio

Personal portfolio website built from scratch with dark mode, mobile hamburger navigation, an AI-powered chat widget, and a contact form with email delivery.

**Live:** https://portfolio-delta-sandy-5ee88992ad.vercel.app

## Built With
- Next.js
- React
- Tailwind CSS
- Vercel
- Supabase
- Upstash Redis
- Anthropic Claude API
- Resend

## Getting Started
```bash
git clone https://github.com/milanbudhathoki38/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Features
- Dark mode toggle
- Mobile responsive with hamburger menu
- Contact form with Supabase storage and Resend email notifications
- AI chat widget powered by the Claude API — ask questions about my background, projects, and skills
- Live LeetCode stats, cached with Redis for faster repeat loads
- Projects, Skills, and Experience sections
- Resume download

## How I Built This

This was my first web development project — my background is in C++
and Python, with a focus on backend logic and data structures. I used
Claude as a learning partner throughout: working through React/Next.js
fundamentals, debugging real issues as they came up, and understanding
the reasoning behind each architectural decision rather than just
copying working code.

A few examples of problems I worked through and can walk through in
detail:

- **Contact form backend with Supabase + Resend** — built a Next.js
  API route that handles form submissions in two steps: it writes
  the visitor's name, email, and message into a Supabase Postgres
  table for permanent storage, then calls the Resend API to send me
  an email notification so I don't have to check the database
  manually. Along the way, diagnosed a Row-Level Security
  misconfiguration blocking anonymous inserts on the contact form,
  and wrote a policy allowing anonymous form submissions while
  keeping the table otherwise locked down.

- **LeetCode stats via a GraphQL proxy route** — LeetCode's GraphQL
  API blocks direct browser requests from third-party sites (CORS).
  I built a Next.js API route that queries LeetCode's GraphQL
  endpoint server-side, parses the response, and forwards clean JSON
  stats to the frontend — the browser never talks to LeetCode
  directly.

- **Redis caching with Upstash** — added a caching layer in front of
  the LeetCode proxy route so repeat visits don't re-fetch from
  LeetCode every time. The route checks Redis first; on a cache hit
  it returns instantly, on a miss it calls LeetCode, stores the
  result in Redis with a 1-hour expiration, and returns it. Measured
  roughly a 4x speedup on cached requests versus a fresh LeetCode
  call.

- **AI chat widget with the Claude API** — built a floating chat
  widget, present on every page, that sends visitor questions to a
  server-side API route. The route calls Anthropic's Claude API with
  a system prompt describing my background and projects, keeping the
  API key server-side only (never exposed to the browser) via
  environment variables.

I treat every piece of this project as something I should be able to
explain and rebuild — not just something that happens to work.