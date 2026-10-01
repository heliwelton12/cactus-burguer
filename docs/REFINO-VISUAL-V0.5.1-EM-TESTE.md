# Refinamento visual v0.5.1 — em teste

## Objetivo

Manter a direção visual aprovada da versão v0.5.0, substituindo a ilustração artificial do hero pela arte original da Cactus Burguer e reduzindo repetições de texto.

## Alterações

- arte original adicionada em `public/images/cactus-hero-original.png`;
- hero com composição em duas colunas no desktop e uma coluna no mobile;
- marca compacta no topo;
- status ABERTO/FECHADO mantido visível;
- headline: `É sabor. É Cactus!`;
- apoio: `Escolha seus favoritos, personalize do seu jeito e combine a retirada pelo WhatsApp.`;
- informações de retirada e pagamento mantidas em cards compactos;
- proporção da imagem preservada em todos os breakpoints.

## Não alterado

- produtos e preços;
- regras de personalização;
- carrinho/localStorage;
- horário de funcionamento;
- pagamentos e troco;
- mensagem e redirecionamento do WhatsApp.

## Checklist de aprovação local

- [ ] hero desktop sem corte indevido;
- [ ] hero mobile sem overflow horizontal;
- [ ] logo/texto da arte original legíveis;
- [ ] hambúrgueres principais visíveis;
- [ ] status da loja legível no mobile;
- [ ] botão Explorar cardápio funcionando;
- [ ] botão Meu pedido funcionando;
- [ ] categorias horizontais funcionando;
- [ ] carrinho e personalização sem regressão;
- [ ] console sem erros;
- [ ] `npm run build`;
- [ ] `npm run preview`.

## Regra

Não realizar push ou deploy antes da aprovação visual e da regressão funcional.
