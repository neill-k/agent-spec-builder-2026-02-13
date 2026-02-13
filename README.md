# Agent Spec Builder (MVP)

Generate a clear, copy/pasteable **agentic system spec** (as Markdown) from a small set of inputs: objective, users, tools, data, constraints, and success metrics.

## Builder Notes (goals, interests, plan, strategy)

**Goals**
- Ship a tiny, practical planning tool that helps teams go from “idea” → “implementable agent spec” fast.
- Emphasize architecture clarity: components, tool contracts, eval plan, and guardrails.

**Interests**
- Agent/product design, tool-using architectures, evaluation-driven delivery, and pragmatic safety.

**Plan**
- Single-page app with a form + live-generated Markdown.
- “Copy” + “Download .md” actions.
- Keep dependencies minimal (Next.js + TS + Tailwind only).

**Strategy**
- Favor shipping a useful template over trying to be “smart”.
- Encode best-practice structure (tools, data flow, evals, risks) so the output is immediately actionable.

---

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Live Demo

- https://agent-spec-builder-2026-02-13.vercel.app

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Deploy

This app is designed to deploy cleanly on Vercel.
