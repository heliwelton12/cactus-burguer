<div align="center">

# Cactus Burguer

### Cardápio digital com personalização, carrinho e pedidos pelo WhatsApp

Projeto em código independente, desenvolvido com React + Vite e preparado para versionamento no GitHub e publicação via Cloudflare Pages.

> Esta aplicação **não depende do ChatGPT Sites**. O site atualmente usado pela lanchonete e seu QR Code permanecem separados e intocados enquanto não houver decisão explícita de migração.

</div>

---

## Status

**v0.3.0 — base funcional validada em desktop/mobile e planejamento técnico formalizado.**

Já validados localmente:

- cardápio por categorias;
- personalização por produto;
- adicionais e retirada de ingredientes permitidos;
- carrinho persistente em `localStorage`;
- edição, quantidade, remoção e total;
- Pix, Cartão e Dinheiro;
- campo de troco somente para Dinheiro;
- status ABERTO/FECHADO;
- bloqueio de envio fora do horário sem apagar o carrinho;
- navegação mobile e responsividade;
- botão “Meu pedido” e “Voltar ao topo”.

Ainda faltam para o primeiro push/deploy: build/preview final, validação da mensagem no WhatsApp em horário aberto, assets oficiais e gates de segurança/SEO/performance.

## Tecnologias

- React 19
- Vite 7
- JavaScript / JSX
- CSS responsivo
- `localStorage`
- integração com WhatsApp
- Git/GitHub e Cloudflare Pages planejados

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

## Regra de publicação desta fase

A versão em código permanece em desenvolvimento local até passar pelo gate descrito em `TESTES.md` e `docs/PLANO-DE-IMPLEMENTACAO.md`. Não fazer push/deploy de release antes da revisão.

## Próximas etapas

1. executar `npm run build` e `npm run preview`;
2. concluir regressão curta da v0.3.0;
3. validar mensagem completa do WhatsApp em horário aberto;
4. inserir/revisar assets oficiais;
5. concluir segurança, SEO, acessibilidade e performance;
6. criar o repositório GitHub;
7. publicar uma cópia separada no Cloudflare Pages;
8. regressão na URL real antes de qualquer release estável.
