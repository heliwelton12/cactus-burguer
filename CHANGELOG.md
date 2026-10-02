# Changelog

Todas as mudanças relevantes do projeto serão registradas neste arquivo.

## [0.6.0-final-candidate] - 2026-10-02

### Ajustado
- Desativada a animação de boca (`is_talking`) por decisão visual.
- Balões continuam representando a fala do Cactchô.
- Demais estados e funcionalidades da Etapa 8 preservados.

## [0.6.0-etapa8] - 2026-10-02

### Adicionado
- Modo compacto do Cactchô durante a navegação.
- Uso dos inputs `is_talking`, `is_thinking` e `is_closed`.
- Progresso `Pedido → Dados → Pagamento → Revisão`.
- Retomada persistente do atendimento.
- Estado de loja fechada com pedido preservado.
- Confirmação `Conseguiu enviar seu pedido?`.
- Limpeza do pedido somente após `Sim, enviei`.
- Destaque discreto no produto recém-adicionado.
- Transição entre categorias e animação do contador do pedido.
- Melhorias de acessibilidade e foco.
- Configuração futura de Cloudflare (`_headers` e `_redirects`).

### Performance
- PNG grande não utilizado removido.
- Hero WebP pré-carregado e priorizado.

### SEO
- Metadados sociais básicos adicionados.
- `noindex,nofollow` mantido na versão paralela.

## [0.6.0-etapa7] - 2026-10-02

### Corrigido
- Campos do Cactchô usam 16 px no mobile para impedir o zoom automático do Safari/iPhone.

### Adicionado
- Cactchô passa a gerenciar quantidade, edição e remoção dos itens.
- Botão `Pedido` do cabeçalho abre diretamente o pedido no Cactchô.
- Feedback do Cactchô após editar um produto.
- Estado de pedido vazio dentro do assistente.

### Removido
- Drawer visual tradicional de carrinho.
- Interface duplicada de gerenciamento do pedido.

### Preservado
- Estado técnico/persistência do carrinho.
- ProductModal para personalização.
- preços, horários, pagamentos e WhatsApp.

## [0.6.0-etapa6] - 2026-10-02

### Adicionado
- Finalização guiada do Cactchô: nome, pagamento, troco, observação, revisão e WhatsApp.
- `cart_count` sincronizado com a State Machine.
- `trigger_success` na confirmação dos dados.
- Persistência dos dados guiados no mesmo estado do checkout tradicional.

### Ajustado
- Removido o toast redundante de “produto adicionado ao pedido”.
- O Cactchô passa a ser o feedback principal ao adicionar produto.
- WhatsApp continua exigindo ação explícita do usuário.

## [0.6.0-etapa5] - 2026-10-02

### Corrigido
- Carrinho e modal agora ficam acima do cabeçalho sticky em desktop e mobile.
- Sombra inferior incorporada ao Rive ocultada com recorte mínimo do canvas.

### Adicionado
- Resumo real do carrinho no balão do Cactchô.
- Pergunta `Tudo certo?`.
- `Quero alterar` abre o carrinho na área dos itens.
- `Sim, continuar` abre o carrinho já na área de dados e pagamento.
- `trigger_point` ao iniciar o resumo guiado.

## [0.6.0-etapa4] - 2026-10-02

### Adicionado
- Reação `happy` ao adicionar um novo produto.
- Balão “Boa escolha!” com o nome real do produto.
- Ações `Continuar escolhendo` e `Finalizar`.
- `Finalizar` abre o carrinho tradicional.

### Ajustado
- Reforçada a remoção de sombra CSS do mascote e do canvas.
- Nenhuma regra de preço, carrinho ou WhatsApp foi alterada.

## [0.6.0-etapa3] - 2026-10-02

### Adicionado
- Saudação dinâmica do Cactchô conforme `America/Bahia`.
- Balão responsivo com apresentação do mascote.
- Ações `Quero ajuda` e `Vou escolher`.
- Reabertura do balão ao tocar/clicar no Cactchô.
- Fechamento manual e recolhimento automático.
- Fluxo ainda isolado do carrinho e do checkout.

## [0.6.0-etapa2.1] - 2026-10-02

### Ajustado
- Substituído o arquivo `cactcho.riv` pela versão corrigida do `wave`.
- Mantido o mesmo código React da Etapa 2.
- Nenhuma regra do site foi alterada.

## [0.6.0-etapa2] - 2026-10-02

### Adicionado
- Primeiro evento real do Cactchô: `trigger_wave` ao entrar no site.
- Aceno automático após cerca de 700 ms.
- Proteção para não disparar o aceno repetidamente durante o mesmo carregamento.
- Respeito a `prefers-reduced-motion`.
- Nenhuma integração com carrinho ou checkout nesta etapa.

## [0.6.0-etapa1.4] - 2026-10-02

### Ajustado
- Correção exclusiva para celular do Cactchô.
- Personagem totalmente dentro da tela para evitar corte do braço.
- Mascote acima da barra de categorias e abaixo do cabeçalho principal.
- Tamanho mobile levemente reduzido.
- Desktop preservado sem alterações.

## [0.6.0-etapa1.1] - 2026-10-02

### Ajustado
- Cactchô reduzido para ficar mais discreto.
- Removida a sombra CSS do mascote.
- Removida a sombra oval artificial sob o personagem.
- Refinado tamanho responsivo para tablet e celular.
- Nenhuma lógica do site foi alterada.

## [0.6.0] - 2026-10-02

### Experimental — Cactchô / Etapa 1
- Adicionado o arquivo Rive oficial do Cactchô em `public/rive/cactcho.riv`.
- Adicionado `CactchoMascot.jsx` para renderização isolada do mascote.
- Integração inicial com `@rive-app/react-canvas`.
- Posicionamento responsivo no canto inferior direito.
- Suporte a preferência de movimento reduzido.
- Falha de carregamento do mascote não bloqueia o cardápio.
- Carrinho, checkout, horários, produtos e WhatsApp permanecem inalterados.

## [0.5.5] - 2026-10-01

### Em teste
- Refinamento exclusivamente mobile.
- Cabeçalho sticky ligeiramente mais compacto no celular.
- Hero reduzido em altura para evitar espaço vazio excessivo.
- Título do hero levemente reduzido para melhorar equilíbrio visual.
- Imagem reposicionada no mobile para reduzir a sobreposição da marca da foto com o texto.
- Cards de Retirada e Pagamento mais compactos.
- Contraste reforçado apenas no mobile.
- Desktop preservado sem alterações.

## [0.5.4] - 2026-10-01

### Em teste
- Reposicionada exclusivamente a imagem de fundo do hero para exibir melhor o nome “CACTUS” presente na arte original.
- Nenhum outro elemento visual, estrutural ou funcional foi alterado.

## [0.5.3] - 2026-10-01

### Em teste
- Cabeçalho transformado em navegação sticky que acompanha a rolagem.
- Carrinho permanece acessível no cabeçalho em desktop e mobile.
- Navegação de categorias passa a ficar fixa logo abaixo do cabeçalho.
- Removido o botão flutuante duplicado de “Meu pedido” no mobile.
- Removidas repetições de status, marca e instruções no hero.
- Hero simplificado para “É sabor. É Cactus!” e uma única orientação de compra.
- Blocos inferiores do hero reduzidos para Retirada e Pagamento.
- Cabeçalho do cardápio simplificado para evitar repetição de instruções.
- Corrigido seletor CSS duplicado na regra responsiva de produtos.
- Nenhuma regra funcional do pedido foi alterada.

## [0.5.2] - 2026-10-01

### Em teste
- Hero redesenhado para usar a imagem oficial como fundo integrado, sem moldura.
- Gradientes e sobreposição aplicados para preservar legibilidade.
- Layout responsivo refinado para desktop, tablet e mobile.
- Imagem convertida para WebP para reduzir peso.
- Nenhuma regra funcional alterada.

## [Unreleased] — Refinamento visual v0.5.1 em teste

### Visual
- Hero atualizado para usar a arte original aprovada da Cactus Burguer, sem recriação artificial.
- Cabeçalho reorganizado com marca compacta, status da loja e acesso ao carrinho.
- Texto principal simplificado para evitar repetição excessiva de Cactus, pedido, retirada e WhatsApp.
- Imagem principal preserva a proporção original e recebe apenas acabamento de integração com o fundo escuro.
- Responsividade do hero revisada para desktop, tablet e celular.

### Processo
- Alterações mantidas em versão separada de teste.
- Nenhum push/deploy desta versão foi realizado.
- A lógica de carrinho, horário, personalização, pagamentos e WhatsApp não foi alterada nesta etapa.

## [0.3.1-test] - 2026-09-23

### Teste local
- Adicionado modo temporário `?testOpen=1` para simular loja aberta somente em `npm run dev`.
- O override é bloqueado em build, preview e produção por `import.meta.env.DEV`.
- Criado `docs/TESTE-HORARIO-ABERTO.md` com procedimento de validação.
- Este código deve ser removido antes do primeiro commit público.

## [0.3.0] - 2026-09-23

### Documentação
- Criado `docs/PRD.md` com requisitos funcionais, não funcionais, regras de negócio, escopo e critérios da v1.0.0.
- Criado `docs/REQUISITOS-TECNICOS.md` com stack, runtime, restrições, persistência, build e deploy planejado.
- Criado `docs/FLUXO-DA-APLICACAO.md` com fluxos do pedido, personalização, horário, persistência e erros.
- Criado `docs/UI-UX.md` com design system, breakpoints, acessibilidade e estados de interface.
- Criado `docs/MODELO-DE-DADOS.md` documentando loja, categorias, produtos, carrinho, cliente e localStorage.
- Criado `docs/PLANO-DE-IMPLEMENTACAO.md` com fases, gates e status do projeto.
- Criados `docs/SEGURANCA.md`, `docs/SEO.md` e `docs/PERFORMANCE.md` para formalizar os gates pré-release.
- README atualizado com índice de documentação e status real do projeto.
- `TESTES.md` passou a utilizar IDs de casos de teste e matriz de rastreabilidade.

### Processo
- Formalizado o padrão de requisitos `RF`, `RNF`, `RN` e casos de teste `CT`.
- Mantida a regra de não publicar no GitHub/Cloudflare antes do gate local.

### Código
- Nenhuma regra funcional alterada nesta versão; atualização focada em planejamento, rastreabilidade e documentação.

### Validado
- `npm run build` concluído sem erros.
- `npm run preview` aberto e regressão curta aprovada.

## [0.2.0] - 2026-09-23

### Alterado
- Numeração visual dos cards corrigida para o padrão `CACTUS / 01`, `CACTUS / 02`, `CACTUS / 03`... dentro de cada categoria.
- Registro dos testes mobile atualizado após aprovação em viewport de celular.

### Validado
- Navegação horizontal de categorias no mobile.
- Cards responsivos em uma coluna.
- Botão fixo “Meu pedido” com contador.
- Botão “Voltar ao topo”.
- Modais e carrinho em tela estreita.
- Ausência de rolagem horizontal indevida e erros no Console, conforme teste manual do usuário.

## [0.1.0] - 2026-09-23

### Adicionado
- Estrutura inicial React + Vite.
- Cardápio completo separado em `src/data/menu.js`.
- Categorias horizontais e navegação sticky.
- Personalização por produto.
- Retirada de ingredientes compatíveis.
- Adicionais por categoria/produto.
- Carrinho persistente com localStorage.
- Edição de itens já adicionados.
- Controles de quantidade e remoção.
- Pagamentos Pix, Cartão e Dinheiro.
- Campo de troco condicional.
- Status de funcionamento das 8h às 21h em `America/Bahia`.
- Bloqueio de envio fora do horário sem apagar o carrinho.
- Geração estruturada da mensagem do WhatsApp.
- Botão “Meu pedido” fixo no celular.
- Botão “Voltar ao topo”.
- Base documental do projeto.
- Validação sintática dos arquivos JS/JSX concluída sem erros.

### Observação
- Assets visuais oficiais ainda não foram adicionados.
- `robots.txt` e meta robots bloqueiam indexação enquanto esta cópia estiver em desenvolvimento.
