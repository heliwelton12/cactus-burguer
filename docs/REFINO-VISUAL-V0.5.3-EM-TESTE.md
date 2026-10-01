# Refinamento visual v0.5.3 — em teste

## Objetivo

Reduzir informações repetidas e manter as ações essenciais acessíveis durante a rolagem.

## Mudanças desta etapa

- cabeçalho sticky com marca, status da loja e carrinho;
- categorias sticky abaixo do cabeçalho;
- remoção do status duplicado nos cards do hero;
- remoção do segundo botão “Meu pedido” dentro do hero;
- remoção do botão flutuante “Meu pedido” no mobile;
- hero com uma única mensagem principal;
- cards de informação reduzidos para Retirada e Pagamento;
- seção “Nosso cardápio” sem repetir instruções do hero.

## Comportamento mobile

No celular, o cabeçalho permanece compacto com:
- marca;
- status ABERTO/FECHADO;
- botão Pedido + contador.

A barra de categorias permanece logo abaixo e pode ser rolada horizontalmente.

## Não alterado

- cardápio e preços;
- personalização;
- carrinho e localStorage;
- regras de horário;
- pagamentos e troco;
- geração da mensagem;
- WhatsApp.

## Testes necessários

- [ ] desktop: cabeçalho acompanha a rolagem;
- [ ] mobile 400 × 692: cabeçalho acompanha a rolagem;
- [ ] categorias não ficam escondidas pelo cabeçalho;
- [ ] botão Pedido abre o carrinho em qualquer ponto da página;
- [ ] não há botão de carrinho duplicado no mobile;
- [ ] CTA “Explorar cardápio” posiciona corretamente a seção;
- [ ] ausência de overflow horizontal;
- [ ] personalização continua funcionando;
- [ ] carrinho continua persistindo;
- [ ] console sem erros;
- [ ] `npm run build`;
- [ ] `npm run preview`.

Esta versão continua isolada para teste local. Não fazer push/deploy antes da aprovação.
