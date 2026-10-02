# Cactchô v0.6.0 — Etapa 4

## Produto adicionado → reação `happy`

Ao adicionar um novo produto ao carrinho:

1. o fluxo normal do carrinho continua funcionando;
2. o React envia um evento local ao Cactchô;
3. o input `trigger_happy` é disparado;
4. o balão muda para:
   - `Boa escolha!`
   - `<produto> já está no seu pedido.`
5. aparecem:
   - `Continuar escolhendo`
   - `Finalizar`

### Ações

- `Continuar escolhendo`: recolhe o balão e mantém o cliente no cardápio.
- `Finalizar`: abre o carrinho tradicional já existente.

Nesta etapa o Cactchô NÃO executa checkout sozinho.

## Sombra

Foi reforçada a remoção de qualquer sombra CSS aplicada ao container, botão, canvas ou pseudo-elementos do mascote.

## Preservado

- saudação por horário da Bahia;
- `wave`;
- `idle`;
- posição/tamanho desktop;
- posição/tamanho mobile;
- carrinho tradicional;
- personalização;
- WhatsApp;
- regras de horário.

## Testes

- [ ] adicionar produto dispara `happy`;
- [ ] nome correto do produto aparece no balão;
- [ ] `Continuar escolhendo` fecha o balão;
- [ ] `Finalizar` abre o carrinho;
- [ ] editar um item existente não dispara “Boa escolha!” como se fosse novo;
- [ ] sombra do mascote não aparece;
- [ ] desktop;
- [ ] iPhone;
- [ ] console sem erros.
