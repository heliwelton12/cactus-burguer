# Fluxo da Aplicação — Cactus Burguer

## 1. Jornada principal

```mermaid
flowchart TD
    A[Cliente abre o cardápio] --> B[Aplicação calcula status da loja]
    B --> C[Cliente navega nas categorias]
    C --> D[Cliente escolhe um produto]
    D --> E{Produto possui personalização?}
    E -- Não --> F[Adicionar ao pedido]
    E -- Sim --> G[Escolher retiradas / adicionais / observação]
    G --> F
    F --> H[Carrinho]
    H --> I{Deseja editar?}
    I -- Sim --> J[Editar item]
    J --> H
    I -- Não --> K[Informar nome e pagamento]
    K --> L{Pagamento = Dinheiro?}
    L -- Sim --> M[Opcional: informar troco]
    L -- Não --> N[Continuar]
    M --> N
    N --> O{Loja está aberta?}
    O -- Não --> P[Bloquear envio e preservar carrinho]
    O -- Sim --> Q[Validar dados]
    Q --> R[Montar mensagem]
    R --> S[Abrir WhatsApp]
```

## 2. Fluxo de personalização

```mermaid
flowchart TD
    A[Produto selecionado] --> B[Carregar opções permitidas do produto]
    B --> C[Retirar ingredientes permitidos]
    B --> D[Selecionar adicionais disponíveis]
    B --> E[Escrever observação do item]
    C --> F[Recalcular valor unitário]
    D --> F
    E --> F
    F --> G{Novo item ou edição?}
    G -- Novo --> H[Criar cartId e adicionar]
    G -- Edição --> I[Atualizar item existente]
```

## 3. Fluxo do status de funcionamento

```mermaid
flowchart LR
    A[Hora no fuso America/Bahia] --> B{08:00 <= hora < 21:00?}
    B -- Sim --> C[ABERTO AGORA]
    B -- Não --> D[FECHADO]
    D --> E[Envio para WhatsApp bloqueado]
    C --> F[Envio permitido após validações]
```

O status é recalculado periodicamente e novamente no momento do envio, para evitar usar um estado antigo da tela.

## 4. Fluxo de persistência

```mermaid
flowchart LR
    A[Estado do carrinho muda] --> B[Salvar JSON no localStorage]
    C[Dados do cliente mudam] --> D[Salvar JSON no localStorage]
    E[Página abre/recarrega] --> F[Carregar dados locais]
    F --> G{JSON válido?}
    G -- Sim --> H[Restaurar estado]
    G -- Não --> I[Usar estado vazio/padrão]
```

## 5. Fluxos de validação/erro

### Loja fechada
- mostrar mensagem de horário;
- não abrir WhatsApp;
- não apagar carrinho.

### Nome vazio
- pedir nome antes do envio;
- manter carrinho e demais campos.

### Carrinho vazio
- impedir envio;
- orientar a adicionar ao menos um item.

### Troco inválido
- quando preenchido, deve ser valor numérico positivo;
- informar erro sem apagar o pedido.

### Dados locais corrompidos
- ignorar JSON inválido;
- iniciar com estado seguro em vez de quebrar a aplicação.

## 6. Navegação mobile

- categorias permanecem acessíveis horizontalmente;
- botão **Meu pedido** fica fixo;
- botão **Voltar ao topo** aparece após rolagem suficiente;
- modais e drawer devem ocupar largura confortável sem gerar overflow horizontal.
