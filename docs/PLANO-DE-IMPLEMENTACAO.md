# Plano de Implementação — Cactus Burguer

## Legenda

- ✅ concluído e validado
- 🔄 em andamento
- ⬜ pendente
- ⚠️ depende de validação externa

## Fase 0 — Preservar produção existente ✅

**Objetivo:** construir a versão em código sem afetar o site usado atualmente pela lanchonete.

Critérios:

- site atual permanece ativo;
- QR Code permanece inalterado;
- nova versão não depende de `chatgpt.site`.

## Fase 1 — Planejamento do produto ✅

Entregáveis:

- `PRD.md`;
- requisitos funcionais/não funcionais;
- regras de negócio;
- escopo e fora de escopo;
- critérios da versão estável.

## Fase 2 — Requisitos técnicos e arquitetura ✅

Entregáveis:

- `REQUISITOS-TECNICOS.md`;
- `ARQUITETURA.md`;
- stack React + Vite;
- separação entre components/config/data/utils.

## Fase 3 — Modelo de dados e cardápio ✅

Entregáveis:

- categorias/produtos em `src/data/menu.js`;
- configuração da loja em `src/config/store.js`;
- `MODELO-DE-DADOS.md`;
- preços e correções conhecidas incorporadas.

## Fase 4 — Interface base ✅

Entregáveis:

- header/status;
- categorias sticky;
- cards de produto;
- rodapé;
- layout desktop/mobile.

## Fase 5 — Carrinho e personalização ✅

Entregáveis:

- adicionar;
- retirar ingredientes permitidos;
- adicionar extras;
- observação por item;
- editar;
- quantidade;
- remover;
- total.

## Fase 6 — Persistência e checkout ✅

Entregáveis:

- carrinho no localStorage;
- dados básicos do cliente no localStorage;
- Pix/Cartão/Dinheiro;
- troco condicional.

## Fase 7 — Horário e WhatsApp ✅

Concluído:

- status aberto/fechado;
- fuso `America/Bahia`;
- bloqueio fora do horário;
- geração da mensagem.

Validado:

- envio em horário aberto por teste controlado em cópia isolada;
- mensagem completa do WhatsApp;
- código temporário de teste descartado antes do primeiro GitHub.

## Fase 8 — Responsividade e acessibilidade 🔄

Concluído:

- viewport mobile 400×692;
- categorias horizontais;
- produtos em uma coluna;
- Meu pedido fixo;
- Voltar ao topo;
- `focus-visible`;
- `prefers-reduced-motion`.

Pendente:

- teste por teclado;
- zoom 200%;
- checagem de contraste;
- teste em aparelho real quando possível.

## Fase 9 — Assets e refinamento visual ⬜

- logo oficial;
- favicon definitivo;
- imagens necessárias;
- compressão WebP/AVIF;
- revisão visual lado a lado com a referência.

## Fase 10 — Gate local de produção ✅

Validado:

- `npm run build`;
- `npm run preview`;
- regressão curta;
- categorias;
- personalização;
- carrinho;
- persistência;
- pagamentos;
- horário fechado e aberto;
- mensagem do WhatsApp;
- console sem erros críticos nos testes manuais.

**Resultado:** projeto aprovado para o primeiro push no GitHub.

## Fase 11 — Segurança, SEO e performance ⬜

Entregáveis:

- revisão de `SEGURANCA.md`;
- revisão de `SEO.md`;
- revisão de `PERFORMANCE.md`;
- cabeçalhos de segurança quando aplicável;
- decisão sobre indexação/canonical;
- Lighthouse/PageSpeed mobile e desktop.

## Fase 12 — GitHub ⬜

Somente após gate local:

- criar `heliwelton12/cactus-burguer`;
- primeiro commit consolidado;
- revisar README;
- push para `main`.

## Fase 13 — Cloudflare Pages ⬜

- conectar GitHub;
- `npm run build`;
- output `dist`;
- publicar em URL separada;
- manter site/QR atual intactos.

## Fase 14 — Regressão em produção ⬜

Testar na URL real:

- desktop;
- mobile;
- WhatsApp;
- persistência;
- horário;
- links/404;
- console/network;
- PageSpeed.

## Fase 15 — Release estável ⬜

Gate da `v1.0.0`:

- requisitos rastreados;
- testes críticos aprovados;
- docs atualizados;
- CHANGELOG atualizado;
- tag criada apenas após aprovação de produção.
