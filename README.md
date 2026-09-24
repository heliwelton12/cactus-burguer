<div align="center">

# Cactus Burguer

### Cardápio digital com personalização, carrinho e pedidos pelo WhatsApp

Projeto em código independente, desenvolvido com React + Vite, versionado no GitHub e preparado para publicação via Cloudflare Pages.

> Esta aplicação **não depende do ChatGPT Sites**. O site atualmente usado pela lanchonete e seu QR Code permanecem separados e intocados enquanto não houver decisão explícita de migração.

</div>

---

## Status

**v0.4.0 — base funcional validada localmente e primeiro push oficial concluído no GitHub.**

Já validados:

- cardápio por categorias;
- personalização por produto;
- adicionais e retirada de ingredientes permitidos;
- carrinho persistente em `localStorage`;
- edição, quantidade, remoção e total;
- Pix, Cartão e Dinheiro;
- campo de troco somente para Dinheiro;
- status ABERTO/FECHADO;
- bloqueio de envio fora do horário sem apagar o carrinho;
- envio em horário aberto por teste controlado;
- mensagem completa do WhatsApp;
- navegação mobile e responsividade;
- botão “Meu pedido” e “Voltar ao topo”;
- `npm run build`;
- `npm run preview` e regressão curta;
- primeiro push na branch `main`.

Ainda faltam antes da v1.0.0: assets oficiais, acessibilidade crítica, revisão de segurança, SEO final, publicação no Cloudflare Pages, PageSpeed/Lighthouse e regressão em produção.

## Tecnologias

- React 19
- Vite 7
- JavaScript / JSX
- CSS responsivo
- `localStorage`
- integração com WhatsApp
- Git/GitHub
- Cloudflare Pages planejado

## Executar localmente

```bash
npm install
npm run dev
```

### Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```text
cactus-burguer/
├── docs/
│   ├── PRD.md
│   ├── REQUISITOS-TECNICOS.md
│   ├── FLUXO-DA-APLICACAO.md
│   ├── UI-UX.md
│   ├── MODELO-DE-DADOS.md
│   ├── PLANO-DE-IMPLEMENTACAO.md
│   ├── ARQUITETURA.md
│   ├── SEGURANCA.md
│   ├── SEO.md
│   ├── PERFORMANCE.md
│   ├── DEPLOY.md
│   └── HISTORICO-PROBLEMAS-CORRECOES.md
├── public/
├── src/
├── CHANGELOG.md
├── TESTES.md
├── index.html
├── package.json
└── vite.config.js
```

## Documentação do projeto

| Documento | Função |
|---|---|
| [PRD](docs/PRD.md) | problema, público, escopo, requisitos e regras de negócio |
| [Requisitos técnicos](docs/REQUISITOS-TECNICOS.md) | stack, runtime, restrições e build |
| [Fluxo da aplicação](docs/FLUXO-DA-APLICACAO.md) | jornadas e decisões do usuário/sistema |
| [UI/UX](docs/UI-UX.md) | design system, mobile e acessibilidade |
| [Modelo de dados](docs/MODELO-DE-DADOS.md) | produtos, carrinho, cliente e persistência |
| [Plano de implementação](docs/PLANO-DE-IMPLEMENTACAO.md) | fases, gates e status |
| [Arquitetura](docs/ARQUITETURA.md) | responsabilidades e organização do código |
| [Segurança](docs/SEGURANCA.md) | dados, segredos, dependências e headers |
| [SEO](docs/SEO.md) | indexação, canonical e metadados |
| [Performance](docs/PERFORMANCE.md) | budgets, assets e medições |
| [Deploy](docs/DEPLOY.md) | fluxo localhost → GitHub → Cloudflare |
| [Histórico de problemas](docs/HISTORICO-PROBLEMAS-CORRECOES.md) | bugs, decisões e correções |

## Publicação

O repositório oficial está no GitHub e a próxima etapa é publicar uma cópia separada no Cloudflare Pages.

O site atual usado pela lanchonete e o QR Code continuam sem alterações.

## Próximas etapas

1. revisar assets oficiais;
2. concluir testes pendentes de acessibilidade e validação;
3. revisar segurança e SEO;
4. publicar no Cloudflare Pages;
5. executar regressão na URL de produção;
6. rodar PageSpeed/Lighthouse mobile e desktop;
7. somente depois avaliar a release `v1.0.0`.
