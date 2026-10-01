# Refinamento visual v0.5.2 — em teste

## Objetivo

Aplicar ao site o hero aprovado visualmente, removendo o aspecto de “foto em um quadrado” e integrando a arte original como parte natural do fundo da página.

## Alterações

- imagem oficial preservada;
- imagem otimizada para WebP;
- hero sem borda, card ou moldura;
- fotografia integrada ao fundo com gradientes;
- nova hierarquia de marca, slogan e chamada principal;
- cartões de status, retirada e pagamento sobrepostos ao final do hero;
- tratamento específico para tablet e celular;
- no mobile a foto passa a ocupar o hero inteiro com escurecimento para manter legibilidade;
- funcionalidades existentes não foram alteradas.

## Não alterado

- preços;
- produtos;
- carrinho;
- personalização;
- horário;
- WhatsApp;
- pagamentos;
- persistência local.

## Gate desta etapa

Antes de integrar ao projeto principal:

- testar desktop;
- testar celular real ou viewport equivalente;
- conferir que não existe overflow horizontal;
- testar categorias, carrinho e personalização;
- rodar `npm run build`;
- rodar `npm run preview`;
- somente depois decidir se a v0.5.2 será integrada.
