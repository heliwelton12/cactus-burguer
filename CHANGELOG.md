# Changelog

Todas as mudanças relevantes do projeto serão registradas neste arquivo.

## [0.4.0] - 2026-09-23

### Validado
- Teste controlado de loja aberta concluído com sucesso.
- Mensagem completa do WhatsApp validada.
- `npm run build` concluído sem erros.
- `npm run preview` aberto e regressão curta aprovada.
- Primeiro push oficial realizado na branch `main`.

### Processo
- A versão temporária usada para simular horário aberto foi descartada antes do primeiro push.
- Nenhum código de teste `?testOpen=1` permanece na versão oficial.
- Projeto passou do estágio exclusivamente local para versionamento oficial no GitHub.

### Próximo gate
- Publicação separada no Cloudflare Pages.
- Regressão na URL de produção.
- Acessibilidade, segurança, SEO e performance antes da v1.0.0.

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
