# Cactchô v0.6.0 — Etapa 2

## Primeiro comportamento real

Ao carregar o site:

1. a State Machine `CactchoController` inicia normalmente;
2. o Cactchô permanece em `idle`;
3. após aproximadamente 700 ms, o input `trigger_wave` é disparado;
4. o Rive controla a animação `wave` e o retorno ao estado previsto pela State Machine.

## Segurança da etapa

Nesta etapa o Cactchô ainda NÃO:
- lê o carrinho;
- altera produtos;
- abre o checkout;
- fala com o usuário;
- interfere no WhatsApp.

## Acessibilidade

Se o dispositivo estiver com `prefers-reduced-motion: reduce`, o aceno automático não é disparado.

## Validar no PC e celular

- [ ] Cactchô aparece normalmente;
- [ ] aproximadamente 0,7 s depois ele acena;
- [ ] o aceno utiliza o braço esperado;
- [ ] a mão/pose do aceno parece natural;
- [ ] após o aceno ele volta ao idle;
- [ ] continua piscando;
- [ ] posição e tamanho permanecem iguais aos aprovados;
- [ ] não há erro no console.

Se o braço fizer o movimento mantendo a mão em joinha, ou se não retornar ao idle, a correção será feita no arquivo Rive/State Machine antes de avançar.
