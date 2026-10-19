# Hakemus Lite

Client-only prototype of **Hakemus** — a personal job-search tracker (Kanban board of job applications).
Built with plain React + Vite, no framework, to practise React fundamentals before the full Next.js version.

## Stack

- React 19 + TypeScript (strict)
- Vite
- pnpm
- Biome — linting, formatting and import sorting in one tool (no ESLint / Prettier)
- GitHub Actions — Biome, typecheck and build on every push and PR

## Getting started

```bash
corepack enable        # makes the pnpm version from package.json available
pnpm install
pnpm dev
```

## Scripts

| Script | What it does |
|---|---|
| `pnpm dev` | start the dev server |
| `pnpm build` | typecheck and build for production |
| `pnpm typecheck` | TypeScript only |
| `pnpm check` | Biome: lint + format check + import order |
| `pnpm check:fix` | Biome: apply safe fixes and formatting |
| `pnpm verify` | everything CI runs, locally |

## Project structure

```text
src/
  features/
    board/
      components/   Board, Column, ApplicationCard, AddApplicationForm
      hooks/        useBoard
      types.ts      domain types (Application, Status)
  components/ui/    reusable UI: Modal, Tabs, Button
  hooks/            generic hooks: useLocalStorage, useHotkeys, useDebounce
  lib/              pure helpers
```

## Week 1 checklist

- [ ] Board with a column per status, application cards, add and remove
- [ ] Board state with `useReducer` (`added`, `moved`, `removed` actions)
- [ ] `BoardProvider` + `useBoard()` hook (Context)
- [ ] Persist to localStorage with a `useLocalStorage` hook
- [ ] `useHotkeys` (e.g. `n` opens the "new application" modal) and `useDebounce` for search
- [ ] Modal rendered through a portal, focus managed with `useRef`
- [ ] Compound `Tabs` component (`Tabs.List`, `Tabs.Trigger`, `Tabs.Panel`)
- [ ] No `useEffect` for derived state; `pnpm check` passes with zero warnings

## Lint notes

Biome's React domain is enabled, including `useExhaustiveDependencies` and `useHookAtTopLevel`
(the equivalents of `eslint-plugin-react-hooks`), plus `noArrayIndexKey`.
