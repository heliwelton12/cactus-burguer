# Cactchô v0.6.0 — Etapa 7

## 1. Correção do zoom no teclado do iPhone

O Safari/iOS aumenta automaticamente a página quando um `input` focado usa fonte menor que 16 px.

Nos campos do Cactchô em telas mobile:
- input: 16 px;
- textarea: 16 px.

Isso mantém a escala normal da página ao abrir o teclado.

## 2. O carrinho tradicional deixa de ser uma interface separada

O estado técnico do carrinho continua existindo porque ele é a fonte dos dados do pedido.

O drawer visual `Meu pedido` foi removido.

O botão `Pedido` do cabeçalho agora abre diretamente o resumo do Cactchô.

## 3. Cactchô gerencia o pedido

No resumo do Cactchô, cada item agora permite:
- diminuir quantidade;
- aumentar quantidade;
- editar personalização;
- remover item.

`Editar` abre o mesmo ProductModal já validado para:
- ingredientes removidos;
- adicionais;
- observação do item.

Ao salvar, o Cactchô volta mostrando o pedido atualizado.

## 4. Fluxo atualizado

Pedido no cabeçalho
→ Cactchô abre o pedido

ou

Produto adicionado
→ Boa escolha
→ Finalizar
→ pedido editável no Cactchô
→ Tudo certo?
→ Finalizar pedido
→ nome
→ pagamento
→ troco (se dinheiro)
→ observação
→ revisão
→ success
→ WhatsApp

## 5. Removido

- drawer/cart visual tradicional;
- toast de atualização do item;
- dependência do checkout guiado em uma segunda interface.

## Testes obrigatórios

- [ ] teclado do iPhone abre sem zoom da página;
- [ ] Pedido no header abre o Cactchô;
- [ ] quantidade + funciona;
- [ ] quantidade − funciona;
- [ ] quantidade chegando a zero remove o item;
- [ ] Remover funciona;
- [ ] Editar abre ProductModal;
- [ ] salvar edição atualiza o resumo;
- [ ] personalizações permanecem corretas;
- [ ] total atualiza;
- [ ] pedido vazio é tratado;
- [ ] checkout guiado continua funcionando;
- [ ] desktop;
- [ ] iPhone;
- [ ] console sem erros.
