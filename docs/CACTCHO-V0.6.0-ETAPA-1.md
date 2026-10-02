# Cactchô v0.6.0 — Etapa 1

## Objetivo

Integrar o arquivo Rive do Cactchô de forma isolada, sem alterar o carrinho, checkout, WhatsApp ou regras da loja.

## Arquivo Rive validado

- arquivo: `public/rive/cactcho.riv`
- artboard: `Cactcho`
- State Machine: `CactchoController`
- animações detectadas: `idle`, `wave`, `happy`, `talk`, `thinking`, `point`, `success`, `closed`
- inputs detectados: `trigger_wave`, `trigger_happy`, `is_talking`, `is_thinking`, `trigger_point`, `trigger_success`, `is_closed`, `cart_count`

## Escopo desta etapa

- carregar o `.riv` no React;
- exibir o Cactchô no canto inferior direito;
- manter o mascote sem interação com o carrinho por enquanto;
- preservar desktop e mobile da v0.5.5;
- respeitar `prefers-reduced-motion`;
- falha no Rive não deve impedir o uso do cardápio.

## Fora desta etapa

- chat;
- balão de fala;
- gatilhos de produto adicionado;
- resumo do carrinho;
- checkout guiado;
- integração com WhatsApp.

## Testes necessários

- [ ] `npm install`
- [ ] `npm run dev`
- [ ] Cactchô aparece no desktop
- [ ] Cactchô aparece no iPhone / 400×692
- [ ] animação base inicia
- [ ] mascote não cobre botões importantes
- [ ] cabeçalho e categorias sticky continuam funcionando
- [ ] carrinho continua funcionando
- [ ] personalização continua funcionando
- [ ] console sem erros
- [ ] `npm run build`
- [ ] `npm run preview`

Somente após esta etapa ser aprovada os inputs da State Machine serão ligados ao estado real do React.
