# Agent Spec Builder

Turn an agent idea into an **engineer-ready Markdown spec** in a couple minutes.

- Fill in: objective, users, tools, data sources, constraints, success criteria
- Get: a structured spec (architecture + guardrails + eval plan) you can paste into a repo or ticket
- Privacy-first: everything runs **client-side** (no backend)

Live demo: https://agent-spec-builder-2026-02-13.vercel.app

## Who this is for

- Product/eng teams scoping an agentic workflow
- Forward-deployed / solutions folks who need a crisp delivery artifact fast
- Anyone tired of “vibes-based” agent ideas

## How to use

1. Pick a preset (or start from scratch).
2. Fill in the form.
3. Copy the generated Markdown or download `SPEC.md`.
4. (Optional) Click **Share link** to send a draft spec without a backend.

## Local dev

```bash
pnpm install
pnpm dev
```

If you don’t use pnpm:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Deploy

Designed to deploy cleanly on Vercel.
