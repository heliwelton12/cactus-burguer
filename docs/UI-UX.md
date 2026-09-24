# UI/UX — Cactus Burguer

## 1. Direção visual

A interface deve transmitir a identidade da Cactus Burguer com estética nordestina/rústica, sem sacrificar leitura ou velocidade. A prioridade é **cardápio e pedido**, não efeitos decorativos.

Paleta atual do código:

```css
--ink: #23170f;
--cream: #f5e5c2;
--cream-2: #fff4d9;
--rust: #a53b1c;
--rust-dark: #68230f;
--orange: #e77b24;
--green: #2b6a43;
--green-bright: #3c9a5f;
```

## 2. Tipografia

- interface: system UI / Segoe UI / fontes nativas para velocidade e legibilidade;
- títulos de identidade: Georgia/serif como aproximação provisória;
- assets/fontes oficiais só devem ser adicionados após validação de licença e impacto de performance.

## 3. Hierarquia

### Topo
Deve comunicar rapidamente:

1. Cactus Burguer;
2. slogan;
3. aberto/fechado;
4. endereço;
5. meios de pagamento;
6. acesso ao carrinho.

### Cardápio
Prioridade visual:

1. nome do produto;
2. preço;
3. descrição;
4. ação Adicionar/Personalizar.

### Carrinho
Prioridade:

1. itens e personalizações;
2. quantidade;
3. total;
4. identificação/pagamento;
5. envio ao WhatsApp.

## 4. Componentes e estados

### Botões
Devem possuir estados:

- padrão;
- hover quando aplicável;
- `focus-visible`;
- disabled;
- feedback após ação quando necessário.

### Produto
- card completo clicável não é obrigatório; a ação deve ser explícita;
- preço não deve quebrar linha;
- `Personalizar` quando houver retirada/adicional;
- `Adicionar` quando não houver opções.

### Modal
- deve possuir título associado ao `dialog`;
- botão fechar com rótulo acessível;
- backdrop fecha o modal;
- conteúdo deve rolar internamente em telas pequenas.

### Carrinho
- drawer lateral no desktop e largura total/adequada em telas estreitas;
- editar, remover e quantidade devem permanecer acessíveis ao toque.

## 5. Breakpoints atuais

```text
<= 820 px: layout mobile/tablet
<= 540 px: ajustes para telas estreitas
```

A viewport mínima suportada é 320 px.

## 6. Regras mobile first

- evitar hero muito alto;
- categorias com scroll horizontal, sem comprimir rótulos;
- produtos em uma coluna;
- alvos de toque confortáveis;
- botão Meu pedido fixo sem cobrir ações importantes;
- botão Voltar ao topo separado do carrinho;
- rodapé com espaço inferior suficiente para o botão fixo.

## 7. Acessibilidade

Obrigatório antes da release:

- foco visível em controles interativos;
- `label` para inputs e textareas;
- `aria-modal`/`role=dialog` em modais;
- nomes acessíveis em botões de fechar;
- contraste adequado;
- não depender apenas de cor para comunicar estado;
- respeitar `prefers-reduced-motion`;
- testar navegação por teclado no desktop;
- verificar zoom de 200% sem perda crítica de função.

## 8. Feedback ao usuário

Usar mensagens curtas para:

- item adicionado;
- alterações salvas;
- loja fechada;
- nome ausente;
- carrinho vazio;
- troco inválido.

Feedback não deve apagar o estado preenchido.

## 9. Assets oficiais — pendência

Antes da versão visual final:

- inserir logo oficial quando disponível;
- selecionar/otimizar imagem hero se necessária;
- evitar imagens decorativas pesadas;
- usar WebP/AVIF quando possível;
- fornecer `alt` útil para imagens de conteúdo e `alt=""` para decoração.

## 10. Regra de consistência

Novas telas/componentes devem reutilizar tokens, espaçamentos, bordas e padrões existentes. Não criar cores, raios ou estilos isolados sem justificativa.
