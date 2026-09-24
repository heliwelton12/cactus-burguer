# Deploy — Cactus Burguer

## Regra atual

Trabalhar e validar em localhost antes do primeiro push.

## Fluxo oficial

```text
VS Code
  ↓
Testes locais
  ↓
npm run build
  ↓
npm run preview
  ↓
Regressão local
  ↓
Git/GitHub
  ↓
Cloudflare Pages
  ↓
Regressão em produção
  ↓
Release estável
```

## Antes do primeiro push

1. checklist crítico em `TESTES.md`;
2. `npm run build`;
3. `npm run preview`;
4. console/network sem erros críticos;
5. mensagem WhatsApp validada;
6. documentação revisada;
7. `git status` conferido;
8. nenhum segredo incluído.

## GitHub planejado

```text
heliwelton12/cactus-burguer
```

Branch de produção: `main`.

## Cloudflare Pages planejado

```text
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
```

## Indexação

Enquanto for apenas cópia paralela/teste:

- manter `noindex, nofollow`;
- manter `robots.txt` bloqueando rastreamento.

Só alterar após decisão explícita sobre a URL oficial. Ver `SEO.md`.

## Domínio e QR Code

A URL Cloudflare será inicialmente uma segunda cópia. O QR da lanchonete continuará apontando para a publicação atual até decisão explícita de migração.

## Pós-deploy obrigatório

- abrir URL real em desktop e mobile;
- testar categorias/personalização/carrinho;
- testar WhatsApp;
- testar F5/persistência;
- revisar Network/Console;
- executar Lighthouse/PageSpeed;
- registrar resultados antes de marcar release.
