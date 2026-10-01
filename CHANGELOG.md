# Changelog

Todas as mudanças relevantes do projeto serão registradas neste arquivo.

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
