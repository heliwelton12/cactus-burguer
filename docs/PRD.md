# PRD — Cactus Burguer

## Controle do documento

- **Produto:** Cactus Burguer — Cardápio Digital
- **Versão do planejamento:** 0.4.0
- **Status:** planejamento consolidado / desenvolvimento local
- **Plataforma-alvo:** Web responsiva, com prioridade para celular
- **Publicação planejada:** GitHub + Cloudflare Pages

## 1. Visão do produto

O Cactus Burguer é um cardápio digital pensado para facilitar a escolha, personalização e organização de pedidos feitos pelo WhatsApp. A aplicação deve funcionar bem no celular, manter o pedido durante a navegação e reduzir erros na comunicação entre cliente e atendimento.

Esta versão em código é **independente do ChatGPT Sites**. O site já publicado e o QR Code atualmente usado pela lanchonete permanecem separados e não são alterados por este projeto.

## 2. Problema

O atendimento por mensagens soltas pode gerar pedidos incompletos, dificuldade para lembrar personalizações, dúvidas sobre valores e retrabalho na confirmação. O cardápio digital organiza essas informações antes de abrir o WhatsApp.

## 3. Público-alvo

### Cliente
Pessoa que consulta o cardápio, escolhe itens, personaliza o pedido e o encaminha pelo WhatsApp.

### Atendimento da Cactus Burguer
Pessoa que recebe o pedido já estruturado, com itens, quantidades, personalizações, pagamento, troco, observações e total.

## 4. Objetivos

- apresentar o cardápio de forma clara e responsiva;
- permitir personalização somente quando aplicável ao produto;
- manter o carrinho mesmo após recarregar a página;
- organizar a mensagem final enviada pelo WhatsApp;
- respeitar o horário de funcionamento da loja;
- manter o projeto simples, rápido e fácil de atualizar no VS Code;
- possuir código próprio, versionável no GitHub e publicável no Cloudflare Pages.

## 5. Escopo da versão 1.0

### Funcionalidades incluídas

| ID | Requisito funcional | Critério de aceite resumido |
|---|---|---|
| RF-001 | Exibir categorias do cardápio | Todas as categorias cadastradas podem ser acessadas no desktop e mobile |
| RF-002 | Exibir produtos, descrição e preço | Produto deve mostrar informações corretas da fonte de dados |
| RF-003 | Personalizar retirada de ingredientes | Mostrar apenas ingredientes permitidos para retirada naquele produto |
| RF-004 | Selecionar adicionais | Adicionais disponíveis devem somar corretamente ao valor unitário |
| RF-005 | Adicionar item ao carrinho | Item deve entrar com quantidade 1 e personalização escolhida |
| RF-006 | Alterar quantidade | Botões +/− atualizam quantidade e total; quantidade 0 remove o item |
| RF-007 | Remover item do carrinho | Item selecionado deve ser excluído sem afetar os demais |
| RF-008 | Editar item do carrinho | Personalizações e observação do item podem ser alteradas sem recriá-lo |
| RF-009 | Persistir carrinho e dados básicos do cliente | F5 ou retorno à página não deve apagar dados salvos localmente |
| RF-010 | Selecionar forma de pagamento | Pix, Cartão e Dinheiro devem estar disponíveis |
| RF-011 | Informar troco em dinheiro | Campo de troco só aparece quando pagamento = Dinheiro |
| RF-012 | Calcular total | Total deve considerar preço, adicionais e quantidade |
| RF-013 | Exibir status da loja | Indicador deve mostrar ABERTO AGORA ou FECHADO segundo o horário |
| RF-014 | Bloquear envio fora do horário | Fora do horário, WhatsApp não abre e o carrinho permanece intacto |
| RF-015 | Gerar mensagem estruturada para WhatsApp | Mensagem deve conter cliente, itens, personalizações, pagamento, troco quando aplicável, observações e total |
| RF-016 | Manter ações principais acessíveis no celular | Categorias, Meu pedido e Voltar ao topo devem funcionar em tela estreita |
| RF-017 | Exibir feedback das ações | Adição, edição, validações e bloqueios devem produzir feedback visível |

## 6. Requisitos não funcionais

| ID | Requisito | Critério |
|---|---|---|
| RNF-001 | Mobile first | Fluxo principal deve ser confortável em viewport de celular |
| RNF-002 | Responsividade | Não deve existir rolagem horizontal indevida entre 320 px e desktop |
| RNF-003 | Acessibilidade básica | Inputs com labels, foco visível, botões identificáveis e suporte a `prefers-reduced-motion` |
| RNF-004 | Desempenho | Build otimizado, imagens comprimidas e auditoria Lighthouse/PageSpeed antes da versão estável |
| RNF-005 | Segurança | Nenhum segredo, chave privada ou dado sensível deve ser incluído no frontend/repositório |
| RNF-006 | Manutenibilidade | Dados da loja, cardápio, regras e componentes devem permanecer separados por responsabilidade |
| RNF-007 | Compatibilidade | Suporte aos navegadores modernos usados em Android, iOS e desktop |
| RNF-008 | Privacidade | Dados salvos localmente não devem ser enviados a terceiros antes da ação explícita de abrir o WhatsApp |

## 7. Regras de negócio

| ID | Regra |
|---|---|
| RN-001 | O atendimento desta versão é somente para **retirada no local** |
| RN-002 | Horário de funcionamento: todos os dias, das **08:00 às 21:00**, no fuso `America/Bahia` |
| RN-003 | O envio do pedido é permitido a partir das 08:00 e bloqueado a partir das 21:00 |
| RN-004 | Formas de pagamento: Pix, Cartão e Dinheiro |
| RN-005 | Troco só pode ser solicitado quando a forma de pagamento for Dinheiro |
| RN-006 | Um ingrediente só pode ser removido se estiver listado em `removable` no produto |
| RN-007 | Um adicional só pode ser escolhido se estiver listado em `additions` no produto |
| RN-008 | Adicionais alteram o preço unitário e, portanto, o total do pedido |
| RN-009 | Dois itens do mesmo produto com personalizações diferentes permanecem como itens separados no carrinho |
| RN-010 | O pedido enviado ao WhatsApp é sujeito à confirmação da loja |
| RN-011 | A versão ChatGPT Sites e seu QR Code permanecem independentes enquanto não houver decisão explícita de migração |

## 8. Fora de escopo nesta fase

- entrega em domicílio;
- pagamento online dentro do site;
- cadastro/login de clientes;
- painel administrativo;
- banco de dados remoto;
- acompanhamento de pedido em tempo real;
- integração com impressora, PDV ou ERP;
- substituição automática do site atual/QR Code;
- coleta de dados analíticos antes de decisão explícita.

## 9. Critérios de conclusão da v1.0.0

A versão 1.0.0 só pode ser marcada como estável quando:

- todos os requisitos obrigatórios estiverem implementados;
- testes críticos estiverem ✅ ou justificados como ⚠️;
- `npm run build` e `npm run preview` estiverem aprovados;
- regressão mobile e desktop estiver aprovada;
- mensagem real do WhatsApp estiver conferida;
- horário aberto e fechado estiverem testados;
- segurança, SEO, acessibilidade e performance tiverem revisão documentada;
- produção no Cloudflare estiver validada;
- README, CHANGELOG, TESTES e docs estiverem coerentes com a versão publicada.
