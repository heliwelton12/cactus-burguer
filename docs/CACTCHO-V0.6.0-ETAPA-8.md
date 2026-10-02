# Cactchô v0.6.0 — Etapa 8

## Escopo concluído nesta etapa

### 1. Cactchô inteligente durante a navegação
- modo compacto quando o cliente desce o cardápio;
- volta ao tamanho normal quando o atendimento abre;
- `is_talking` ligado aos momentos em que o Cactchô apresenta mensagens;
- `is_thinking` ligado aos momentos em que espera nome, pagamento, troco, observação ou confirmação;
- `is_closed` acompanha o horário real da loja;
- `trigger_success` permanece no fechamento do fluxo;
- `cart_count` continua sincronizado com o pedido.

### 2. Progresso do atendimento
Etapas visuais:
1. Pedido
2. Dados
3. Pagamento
4. Revisão

O indicador é compacto e responsivo.

### 3. Retomar atendimento
A etapa atual do checkout guiado é salva no `localStorage`.

Se o cliente fechar o balão e tocar novamente no Cactchô, o atendimento continua de onde parou.

O estado também pode sobreviver a uma atualização da página enquanto houver pedido ativo.

### 4. Loja fechada
- input Rive `is_closed` ativado;
- mensagem específica do Cactchô;
- cliente pode continuar montando/editando o pedido;
- carrinho permanece salvo;
- envio ao WhatsApp continua bloqueado;
- mensagem informa que a loja abre às 8h.

### 5. Polimento do cardápio
- produto recém-adicionado recebe destaque discreto temporário;
- troca de categoria tem transição curta;
- contador do botão Pedido reage a alterações;
- todas as animações extras respeitam `prefers-reduced-motion`.

### 6. Confirmação depois do WhatsApp
Abrir o WhatsApp NÃO limpa o pedido.

Depois da ação, o Cactchô pergunta:
`Conseguiu enviar seu pedido?`

Opções:
- `Sim, enviei` → somente então limpa o pedido e os dados;
- `Ainda não` → mantém tudo salvo e permite abrir o WhatsApp novamente.

### 7. Acessibilidade
- `role="dialog"` e rótulo do atendimento;
- Escape fecha o balão;
- foco gerenciado sem rolar a página;
- ProductModal com Escape, foco inicial e ciclo de Tab;
- `aria-pressed` em pagamentos;
- alvos de toque maiores no mobile;
- foco visível nos principais controles;
- redução de movimento respeitada.

### 8. Performance/SEO técnico
- imagem PNG grande não utilizada removida do pacote;
- hero WebP mantido e pré-carregado;
- `fetchPriority="high"` no hero;
- metadados Open Graph básicos;
- `noindex,nofollow` preservado porque esta ainda é a versão paralela;
- `_headers` preparado para Cloudflare Pages;
- `_redirects` preparado para fallback da SPA.

## Ainda depende de URL pública
- Lighthouse final;
- PageSpeed Insights mobile/desktop;
- validação real dos headers após Cloudflare;
- regressão pós-deploy.

Esses itens não devem ser marcados como aprovados antes de existir a URL de preview/produção.


## Validação feita neste ambiente

- ✅ arquivos JS/JSX passaram pela validação sintática com TypeScript (`allowJs` + JSX);
- ✅ pacote final não contém `node_modules`, `dist` ou `.git`;
- ✅ PNG antigo não utilizado foi removido;
- ⏳ `npm install` atingiu o limite de tempo deste ambiente, portanto `npm run build` e `npm run preview` continuam como gates obrigatórios na máquina local antes de qualquer publicação.
