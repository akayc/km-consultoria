# website-template

Projeto-base reutilizável para sites institucionais e landing pages.

## Como usar em um projeto novo

```bash
git clone <este-repo> nome-do-cliente
cd nome-do-cliente
rm -rf .git && git init
npm install
```

1. Editar `app/globals.css` — trocar paleta e fonte pela identidade do cliente.
2. Editar `app/layout.tsx` — trocar `metadata` (title/description).
3. Editar `app/page.tsx` — montar a página com as sections em `components/sections/`, com o conteúdo real do cliente.
4. Colocar imagens em `public/`.
5. Se precisar de uma section que não existe, criar em `components/sections/` (genérica, via props) — não direto na página.

## Comandos

```bash
npm run dev     # ambiente local (http://localhost:3000)
npm run build   # build de produção
npm run lint    # eslint
```

## Deploy

Conectar o repositório à Vercel. Cada `git push` na branch principal gera um novo deploy automático.

## Stack

Next.js · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react
