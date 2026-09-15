---
trigger: always_on
description: Regras always-on para o projeto hol-copilot-lab / eCommApp (React+TS+Vite+Vitest)
---

# Project Rules — hol-copilot-lab / eCommApp (The Daily Harvest)

## Stack
- React 18 + TypeScript + Vite
- Testes: **Vitest** + Testing Library (`@testing-library/react`, `jest-dom`)
- Cobertura via `@vitest/coverage-v8`
- Lint: ESLint (TS + react-hooks + react-refresh) — `--max-warnings 0`

## Comandos canônicos (rode do diretório `eCommApp/`)
- `npm run dev` — dev server
- `npm run build` — checa tipos + build de produção
- `npm run lint` — ESLint estrito
- `npm run test` — Vitest em watch
- `npm run test:run` — Vitest single-run
- `npm run test:coverage` — cobertura V8

## Convenções de código
- **TypeScript sempre**. Nada de `.js` novo em `src/`.
- Componentes React em PascalCase; hooks em camelCase começando com `use`.
- Estado do carrinho e domínio em `src/state/` (verifique antes de duplicar).
- Rotas via `react-router-dom` v6.

## Testes
- Padrão **Arrange-Act-Assert** com `describe`/`it` descritivos.
- Um `expect` principal por teste; múltiplos asserts só se logicamente atômicos.
- Prefira testes de comportamento (Testing Library queries por role/text) a snapshots.
- Novos arquivos de teste: colocalizados como `Componente.test.tsx` ao lado do arquivo.

## Fluxo de trabalho
- **Nunca commitar direto na `main`.** Sempre branch `feat/<tema>` ou `fix/<tema>`.
- Antes de finalizar qualquer edição: `npm run lint && npm run test:run`.
- Se um teste existente falhar, **investigue antes de "consertar" o teste** — pode ser regressão real.
- Ao concluir uma tarefa, resuma: arquivos alterados, comandos rodados, cobertura antes/depois se relevante.

## Fora do escopo
- Não faça refactor amplo em código não relacionado à tarefa.
- Não instale novas dependências sem perguntar primeiro.
- Não altere `vite.config.ts`, `tsconfig*.json` nem CI sem confirmação.
