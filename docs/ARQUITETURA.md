# Arquitetura — Cactus Burguer

## Objetivo

Manter uma aplicação web independente, simples e auditável para cardápio e montagem de pedido, sem necessidade de backend nesta fase.

## Visão

```text
Usuário
  ↓
React UI
  ├── components/  → interface
  ├── data/        → cardápio
  ├── config/      → loja/horário/WhatsApp
  └── utils/       → moeda/horário/persistência/mensagem
       ↓
 localStorage          wa.me
       ↓                 ↓
 navegador          WhatsApp
```

## Responsabilidades

### `src/components/`
Componentes visuais e interações de interface. Não deve conter fonte duplicada de dados de cardápio/configuração.

### `src/data/menu.js`
Fonte estática das categorias, produtos, ingredientes removíveis e adicionais.

### `src/config/store.js`
Configuração operacional central da loja: nome, endereço, WhatsApp, fuso, horário e meios de pagamento.

### `src/utils/currency.js`
Formatação monetária.

### `src/utils/openingHours.js`
Cálculo de aberto/fechado com `America/Bahia`.

### `src/utils/storage.js`
Leitura e gravação defensiva no `localStorage`.

### `src/utils/whatsapp.js`
Cálculo/serialização textual do pedido e abertura do `wa.me`.

### `src/App.jsx`
Orquestra estado principal, carrinho, modal, checkout, validações e integração dos componentes.

## Estado

O estado principal reside no React. Carrinho e dados básicos do checkout são espelhados no `localStorage`.

## Backend

Não necessário no escopo atual. A inclusão futura de backend só deve ocorrer mediante requisito funcional que justifique complexidade adicional.

## Decisões arquiteturais atuais

1. **React + Vite:** estrutura leve para componente/estado e build estático.
2. **Sem banco:** cardápio ainda é pequeno e edição por código é suficiente nesta fase.
3. **localStorage:** persistência simples do pedido sem conta de usuário.
4. **Config separada:** evita número/horário/endereço espalhados.
5. **WhatsApp como saída:** site organiza o pedido, mas não processa transação.
6. **Site atual separado:** nenhum iframe, fetch ou redirecionamento para `chatgpt.site`.

## Evolução futura possível

Caso a lanchonete passe a precisar atualizar preços/produtos sem código, avaliar:

```text
Painel admin → API/BaaS → banco de dados → cardápio dinâmico
```

Essa evolução deve vir acompanhada de autenticação, autorização, modelo de dados, migrações, backup e regras de segurança.
