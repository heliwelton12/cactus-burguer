# Cactchô v0.6.0 — Etapa 6

## 1. Aviso redundante removido

Ao adicionar um produto, o toast:
`<produto> adicionado ao pedido`

não aparece mais.

O Cactchô passa a ser o feedback principal:
- `happy`
- `Boa escolha!`
- nome do produto
- Continuar escolhendo / Finalizar

Avisos importantes de erro continuam existindo.

## 2. Finalização guiada completa

Depois de confirmar o resumo do carrinho, o Cactchô conduz:

1. nome;
2. forma de pagamento;
3. troco, somente se for Dinheiro;
4. observação geral opcional;
5. revisão dos dados;
6. confirmação;
7. ação explícita `Enviar no WhatsApp`.

### Pagamentos
- Pix
- Cartão
- Dinheiro

### Dinheiro
O Cactchô pergunta se precisa de troco.
É possível seguir sem troco.

## 3. Persistência

Quando os dados são confirmados:
- os mesmos dados são gravados no estado `customer`;
- o `localStorage` continua sendo atualizado pela lógica já existente;
- se o carrinho tradicional for aberto depois, os campos permanecem preenchidos.

## 4. WhatsApp

O Cactchô não envia nada sozinho.

O usuário precisa tocar em:
`Enviar no WhatsApp`

A mensagem usa:
- carrinho real;
- nome confirmado;
- pagamento confirmado;
- troco;
- observação;
- total real.

## 5. Rive

Também foi conectado:
- `cart_count`;
- `trigger_success` ao finalizar a coleta dos dados.

## 6. Loja fechada

Se a loja estiver fechada:
- o botão de WhatsApp fica desabilitado;
- o carrinho continua salvo;
- o Cactchô informa que o pedido poderá ser enviado quando a loja abrir.

## Testes obrigatórios

- [ ] adicionar produto não exibe mais toast redundante;
- [ ] Cactchô continua exibindo `Boa escolha!`;
- [ ] resumo real;
- [ ] nome obrigatório;
- [ ] Pix;
- [ ] Cartão;
- [ ] Dinheiro sem troco;
- [ ] Dinheiro com troco;
- [ ] observação vazia;
- [ ] observação preenchida;
- [ ] revisão dos dados;
- [ ] `trigger_success`;
- [ ] botão WhatsApp exige ação do usuário;
- [ ] campos persistem no carrinho tradicional;
- [ ] desktop;
- [ ] iPhone;
- [ ] console sem erros.
