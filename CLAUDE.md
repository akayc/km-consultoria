# Projeto

Template-base para sites institucionais e landing pages de clientes
(negócios locais, profissionais autônomos, pequenas empresas). Cada
projeto de cliente nasce de um clone deste repositório.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (tokens via CSS variables em `app/globals.css`, sem tailwind.config.js)
- Framer Motion (animações de scroll)
- lucide-react (ícones)

## Estrutura

- `components/ui/` — primitivos reutilizáveis entre TODOS os projetos (Button, Container, Reveal, WhatsAppButton). Não colocar conteúdo específico de cliente aqui.
- `components/sections/` — blocos de página (Navbar, Hero, Section, Cards, Contact, Footer). Genéricos, recebem conteúdo via props.
- `app/page.tsx` — composição da página. AQUI entra o conteúdo real do cliente (textos, imagens, ordem das sections).
- `app/globals.css` — tokens de cor/tipografia. Trocar por projeto.

## Regras

- Não instalar dependências sem necessidade real.
- Reutilizar componentes de `components/`. Não duplicar um Hero/Card/Section novo se o existente resolve com props.
- Se uma section nova for genérica o suficiente para servir outros clientes, criar em `components/sections/` — não direto em `page.tsx`.
- Não hardcodar texto de cliente dentro de `components/`. Conteúdo sempre via props, vindo de `page.tsx` (ou de um arquivo `content.ts` por projeto, se a página crescer).
- Manter responsividade em toda alteração (mobile-first).
- Rodar `npm run build` antes de considerar uma alteração concluída.
- Não remover funcionalidade existente sem necessidade.
- Cores/fontes: NUNCA usar os valores placeholder de `globals.css` em produção. Escolher paleta e tipografia deliberadas para o brief de cada cliente (ver seção "Design" abaixo).
- Fonte padrão do template é a stack do sistema (sem next/font/google), pra não depender de rede externa no build. Ao definir a tipografia de um projeto, importar a Google Font em `app/layout.tsx` (exemplo já comentado no arquivo) e passar a `variable` pra `--font-body`/`--font-display` em `globals.css`.

## Design

- Cada cliente exige uma identidade visual própria — não reaproveitar a mesma paleta/tipografia entre projetos diferentes.
- Evitar clichês genéricos de IA: fundo creme + serifada + terracota; SaaS-card kit com mesma sombra em tudo; eyebrow em CAIXA ALTA acima de todo título; "→" em botões; marcadores numerados (01/02/03) quando o conteúdo não é uma sequência real.
- Animação de scroll (fade + slide via `Reveal`) é um requisito do cliente para este produto — usar com moderação: revelar a section como bloco, ou dar leve stagger nos cards de uma grid. Evitar animar cada frase/ícone isoladamente.
- Antes de considerar uma section pronta, checar: contraste de texto, foco visível em links/botões, `prefers-reduced-motion` respeitado (já tratado globalmente em `globals.css`).

## WhatsApp

- `WhatsAppButton` gera link `wa.me` com número + mensagem pré-preenchida. Não é integração de bot — é só o CTA de contato via link.
- Formato do telefone: DDI+DDD+número, só dígitos (ex: `5573999999999`).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
