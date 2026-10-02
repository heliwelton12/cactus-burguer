# Cactchô v0.6.0 — Etapa 3

## Saudação + primeiro balão

Nesta etapa o Cactchô passa a cumprimentar o cliente de acordo com o horário da Bahia.

### Faixas
- 05:00–11:59: Bom dia!
- 12:00–17:59: Boa tarde!
- 18:00–04:59: Boa noite!

O horário é calculado com `America/Bahia`.

## Fluxo

1. Cactchô carrega.
2. `wave` continua sendo disparado.
3. O balão aparece logo após o início do aceno.
4. Mensagem: “Eu sou o Cactchô. Posso te ajudar com seu pedido?”
5. Opções:
   - `Quero ajuda`
   - `Vou escolher`
6. `Quero ajuda` mostra uma orientação curta, sem tocar no carrinho ainda.
7. `Vou escolher` recolhe o balão.
8. O próprio Cactchô pode ser tocado/clicado para reabrir a mensagem.
9. Se não houver interação, a saudação se recolhe automaticamente depois de alguns segundos.

## Mobile

- balão menor;
- ações compactas;
- fechamento disponível;
- recolhimento automático para não ocupar o cardápio;
- tamanho e posição já aprovados do mascote foram preservados.

## Ainda não implementado

- reação ao adicionar produto;
- `cart_count`;
- `happy`;
- resumo do carrinho;
- checkout assistido;
- WhatsApp.

## Testar

- [ ] Bom dia / Boa tarde / Boa noite correto;
- [ ] balão aparece após entrada;
- [ ] `Quero ajuda` troca a mensagem;
- [ ] `Vou escolher` fecha;
- [ ] botão X fecha;
- [ ] tocar no Cactchô reabre;
- [ ] balão se recolhe sozinho sem interação;
- [ ] PC sem sobreposição problemática;
- [ ] iPhone sem cobrir controles essenciais;
- [ ] wave e idle continuam funcionando.
