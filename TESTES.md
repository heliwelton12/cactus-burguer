# Registro de Testes — Cactus Burguer

## Convenção

- ⬜ Não testado
- ✅ Aprovado
- ❌ Reprovado
- ⚠️ Aprovado com observação

## Identificação

A partir da v0.3.0, os testes usam IDs `CT-###` e podem apontar para requisitos do `docs/PRD.md`.

## Testes funcionais e locais

| ID | Relacionado | Teste | Status | Observação |
|---|---|---|---|---|
| CT-001 | RNF-006 | Validação sintática JS/JSX | ✅ | Sem erro de sintaxe na base inicial |
| CT-002 | RNF-007 | `npm install` | ✅ | Dependências instaladas; aplicação iniciou localmente |
| CT-003 | RF-001, RF-002 | `npm run dev` / abrir desktop | ✅ | Vite iniciado e interface carregada corretamente |
| CT-004 | RNF-001, RNF-002 | Abrir cardápio no mobile | ✅ | Testado em viewport 400 × 692 no DevTools |
| CT-005 | RF-001, RF-016 | Trocar entre todas as categorias | ✅ | Navegação horizontal funcionando no mobile |
| CT-006 | RF-005 | Adicionar produto sem personalização | ✅ | Misto adicionado corretamente |
| CT-007 | RF-003, RF-005 | Adicionar produto com retirada | ✅ | Hambúrguer testado sem tomate e maionese |
| CT-008 | RF-004, RF-005, RF-012 | Adicionar produto com adicional | ✅ | Pastel Italiano testado com Cheddar |
| CT-009 | RF-008 | Editar produto no carrinho | ✅ | Personalização alterada sem remover/recriar manualmente |
| CT-010 | RF-006, RF-012 | Aumentar/diminuir quantidade | ✅ | Controles +/− funcionando |
| CT-011 | RF-007 | Remover item | ✅ | Remoção funcionando corretamente |
| CT-012 | RF-009 | F5 e manter carrinho | ✅ | Carrinho persistiu após recarregar |
| CT-013 | RF-010, RF-011 | Pagamento Pix | ✅ | Campo de troco oculto |
| CT-014 | RF-010, RF-011 | Pagamento Cartão | ✅ | Campo de troco oculto |
| CT-015 | RF-010, RF-011, RN-005 | Pagamento Dinheiro | ✅ | Campo “Troco para quanto?” exibido |
| CT-016 | RF-013, RN-002, RN-003 | Indicador FECHADO | ✅ | Em 23/09/2026 às 22:14 mostrou `FECHADO` |
| CT-017 | RF-014, RN-003 | Enviar fora do horário | ✅ | WhatsApp bloqueado e carrinho preservado |
| CT-018 | RF-016 | Botão Meu pedido no mobile | ✅ | Acessível e com contador |
| CT-019 | RF-016 | Voltar ao topo | ✅ | Confirmado no teste mobile |
| CT-020 | RNF-002 | Ausência de overflow horizontal | ✅ | Usuário confirmou no teste mobile |
| CT-021 | RNF-003 | Console sem erros críticos | ✅ | Usuário confirmou console sem erros |
| CT-022 | RF-015 | Conferir texto completo da mensagem WhatsApp | ⬜ | Validar itens, retirada, adicionais, pagamento, troco, observação e total |
| CT-023 | RF-013, RF-015 | Enviar pedido em horário aberto | ⬜ | Teste controlado disponível via `?testOpen=1` apenas em `npm run dev`; validar antes do GitHub |
| CT-024 | RF-017 | Nome vazio no envio | ⬜ | Deve mostrar feedback e preservar estado |
| CT-025 | RF-017 | Troco inválido | ⬜ | Deve bloquear e informar valor inválido |
| CT-026 | RNF-003 | Navegação somente por teclado | ⬜ | Tab, foco, fechar modais e ações críticas |
| CT-027 | RNF-003 | Zoom 200% | ⬜ | Não pode perder função crítica |
| CT-028 | RNF-004 | `npm run build` | ✅ | Build de produção concluído sem erros |
| CT-029 | RNF-004 | `npm run preview` + regressão | ✅ | Preview abriu corretamente e regressão curta foi aprovada |
| CT-030 | RNF-005 | `npm audit` analisado | ⬜ | Registrar achados antes da release |
| CT-031 | RNF-004 | Lighthouse/PageSpeed mobile | ⬜ | Executar na produção Cloudflare |
| CT-032 | RNF-004 | Lighthouse/PageSpeed desktop | ⬜ | Executar na produção Cloudflare |

## Refinamento visual v0.2.0+

| ID | Teste | Status | Observação |
|---|---|---|---|
| CT-033 | Numeração visual dos produtos | ✅ | `CACTUS / 01`, `02`, `03`... por categoria |
| CT-034 | Assets oficiais | ⬜ | Logo/favicon/imagens ainda precisam de revisão |
| CT-035 | Regressão visual lado a lado | ⬜ | Executar antes da v1.0.0 |

## Matriz de rastreabilidade crítica

| Requisito | Testes principais |
|---|---|
| RF-001 / RF-002 | CT-003, CT-005 |
| RF-003 / RF-004 / RF-005 | CT-006, CT-007, CT-008 |
| RF-006 / RF-007 / RF-008 | CT-009, CT-010, CT-011 |
| RF-009 | CT-012 |
| RF-010 / RF-011 | CT-013, CT-014, CT-015 |
| RF-012 | CT-008, CT-010, CT-022 |
| RF-013 / RF-014 | CT-016, CT-017, CT-023 |
| RF-015 | CT-022, CT-023 |
| RF-016 | CT-004, CT-005, CT-018, CT-019, CT-020 |
| RF-017 | CT-024, CT-025 |

## Gate antes do GitHub/Cloudflare

O primeiro push de release só é aprovado quando, no mínimo:

- CT-028 (`npm run build`) = ✅;
- CT-029 (`npm run preview`) = ✅;
- CT-022 (mensagem WhatsApp) = ✅;
- CT-023 (horário aberto) = ✅ ou houver método de teste controlado documentado;
- regressão crítica continuar sem erros;
- documentação estiver atualizada.

## Gate antes da v1.0.0

Além do gate acima:

- acessibilidade crítica aprovada;
- segurança revisada;
- SEO decidido conforme URL oficial;
- PageSpeed/Lighthouse registrado;
- regressão na URL de produção aprovada;
- CHANGELOG e README coerentes com a release.

## v0.5.3 — Refinamento de navegação (pendente de validação)

| Teste | Status | Observação |
|---|---|---|
| Cabeçalho sticky no desktop | ⬜ | Deve acompanhar a rolagem |
| Cabeçalho sticky em 400 × 692 | ⬜ | Marca, status e Pedido devem continuar acessíveis |
| Categorias sticky abaixo do cabeçalho | ⬜ | Não pode haver sobreposição |
| Carrinho pelo cabeçalho | ⬜ | Abrir em qualquer posição da página |
| Ausência de botão Pedido duplicado no mobile | ⬜ | Apenas o cabeçalho deve manter a ação |
| CTA Explorar cardápio com offset correto | ⬜ | Título não deve ficar escondido |
| Regressão visual desktop/mobile | ⬜ | |

## v0.6.0 — Cactchô / Etapa 1 (pendente de validação)

| Teste | Status | Observação |
|---|---|---|
| Carregamento do `.riv` | ⬜ | `public/rive/cactcho.riv` |
| Renderização desktop | ⬜ | canto inferior direito |
| Renderização mobile 400×692 | ⬜ | sem cobrir ações essenciais |
| Animação base / State Machine | ⬜ | `CactchoController` |
| Cabeçalho e categorias sticky | ⬜ | regressão |
| Carrinho e personalização | ⬜ | regressão |
| Console sem erros | ⬜ | |
| `npm run build` | ⬜ | |
| `npm run preview` | ⬜ | |

## v0.6.0 — Cactchô Etapa 2 (pendente)

| Teste | Status | Observação |
|---|---|---|
| `trigger_wave` dispara após entrada | ⬜ | Aproximadamente 700 ms após carregar |
| Aceno usa o braço correto | ⬜ | Validar visualmente |
| Mão/pose do aceno natural | ⬜ | Se necessário, corrigir no Rive |
| Retorno para `idle` | ⬜ | Não pode ficar preso em `wave` |
| Piscar continua funcionando | ⬜ | |
| Desktop preservado | ⬜ | Tamanho/posição sem mudança |
| Mobile preservado | ⬜ | Tamanho/posição sem mudança |
| Console sem erros | ⬜ | |

## v0.6.0 — Cactchô Etapa 3 (pendente)

| Teste | Status | Observação |
|---|---|---|
| Saudação por `America/Bahia` | ⬜ | Bom dia/tarde/noite |
| Balão aparece após entrada | ⬜ | Sincronizado visualmente com o wave |
| `Quero ajuda` | ⬜ | Exibe orientação curta |
| `Vou escolher` | ⬜ | Recolhe o balão |
| Fechar no X | ⬜ | |
| Reabrir tocando no Cactchô | ⬜ | |
| Recolhimento automático | ⬜ | Após alguns segundos sem interação |
| Desktop | ⬜ | Não deve atrapalhar o cardápio |
| iPhone | ⬜ | Não deve cobrir controles essenciais |
| Wave/idle preservados | ⬜ | |

## v0.6.0 — Cactchô Etapa 4 (pendente)

| Teste | Status | Observação |
|---|---|---|
| Produto novo dispara `trigger_happy` | ⬜ | |
| “Boa escolha!” aparece | ⬜ | |
| Nome do produto correto | ⬜ | |
| Continuar escolhendo | ⬜ | Fecha o balão |
| Finalizar | ⬜ | Abre carrinho tradicional |
| Editar item não dispara evento de novo produto | ⬜ | |
| Mascote sem sombra artificial | ⬜ | |
| Desktop | ⬜ | |
| iPhone | ⬜ | |
| Console sem erros | ⬜ | |

## v0.6.0 — Cactchô Etapa 5 (pendente)

| Teste | Status | Observação |
|---|---|---|
| Sombra inferior do Cactchô não aparece | ⬜ | Conferir pés no desktop/mobile |
| Pés não ficaram visualmente cortados | ⬜ | Recorte deve ser mínimo |
| Carrinho acima do header no desktop | ⬜ | |
| Carrinho acima do header no iPhone | ⬜ | |
| Modal de produto acima do header | ⬜ | |
| Finalizar mostra resumo real | ⬜ | |
| Quantidades corretas no resumo | ⬜ | |
| Remoções/adicionais corretos | ⬜ | |
| Total correto | ⬜ | |
| `Tudo certo?` aparece | ⬜ | |
| Quero alterar abre topo do carrinho | ⬜ | |
| Sim, continuar abre checkout | ⬜ | |
| Console sem erros | ⬜ | |

## v0.6.0 — Cactchô Etapa 6 (pendente)

| Teste | Status | Observação |
|---|---|---|
| Toast de item adicionado removido | ⬜ | Cactchô é o feedback |
| Nome obrigatório | ⬜ | |
| Pix | ⬜ | |
| Cartão | ⬜ | |
| Dinheiro sem troco | ⬜ | |
| Dinheiro com troco | ⬜ | |
| Observação opcional | ⬜ | |
| Revisão dos dados | ⬜ | |
| Dados persistem no checkout tradicional | ⬜ | |
| `cart_count` atualizado | ⬜ | |
| `trigger_success` | ⬜ | |
| Enviar no WhatsApp exige clique/toque | ⬜ | |
| Loja fechada bloqueia envio e preserva carrinho | ⬜ | |
| Desktop | ⬜ | |
| iPhone | ⬜ | |
| Console sem erros | ⬜ | |

## v0.6.0 — Cactchô Etapa 7 (pendente)

| Teste | Status | Observação |
|---|---|---|
| iPhone sem zoom ao focar input | ⬜ | Fonte mobile >= 16 px |
| Pedido do header abre Cactchô | ⬜ | |
| Aumentar quantidade | ⬜ | |
| Diminuir quantidade | ⬜ | |
| Remover item | ⬜ | |
| Editar item | ⬜ | Abre ProductModal |
| Salvar edição volta ao resumo | ⬜ | |
| Total recalculado | ⬜ | |
| Pedido vazio | ⬜ | |
| Checkout guiado | ⬜ | |
| Persistência após F5 | ⬜ | |
| Desktop | ⬜ | |
| iPhone | ⬜ | |
| Console sem erros | ⬜ | |

## v0.6.0 — Cactchô Etapa 8 (pendente de regressão)

| Teste | Status | Observação |
|---|---|---|
| Modo compacto ao rolar | ⬜ | Reabre ao tocar |
| `is_talking` | ⬜ | |
| `is_thinking` | ⬜ | |
| `is_closed` | ⬜ | |
| Progresso do atendimento | ⬜ | Pedido/Dados/Pagamento/Revisão |
| Retomar após fechar balão | ⬜ | |
| Retomar após F5 | ⬜ | Com pedido ativo |
| Loja fechada preserva pedido | ⬜ | |
| Produto recém-adicionado destacado | ⬜ | |
| Troca de categoria suave | ⬜ | |
| Contador Pedido reage | ⬜ | |
| Abrir WhatsApp não limpa pedido | ⬜ | |
| `Ainda não` preserva pedido | ⬜ | |
| `Sim, enviei` limpa pedido | ⬜ | |
| Escape no Cactchô | ⬜ | |
| Escape + trap de foco no ProductModal | ⬜ | |
| Reduced motion | ⬜ | |
| iPhone | ⬜ | |
| Desktop | ⬜ | |
| Console sem erros | ⬜ | |
| Build | ⬜ | |
| Preview | ⬜ | |


### Validação técnica da Etapa 8
- ✅ Sintaxe JS/JSX validada com TypeScript.
- ⏳ Instalação de dependências/build não concluídos neste ambiente por limite de tempo; validar localmente com `npm install`, `npm run build` e `npm run preview`.
