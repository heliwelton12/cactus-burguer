# Cactchô v0.6.0 — Etapa 5

## Correções desta etapa

### 1. Sombra nos pés do Cactchô
As sombras CSS já estavam removidas. A sombra restante está incorporada ao conteúdo renderizado do arquivo Rive.

Foi aplicado um recorte visual mínimo somente na extremidade inferior do canvas para esconder essa sombra sem mudar:
- tamanho aprovado;
- posição;
- animações;
- responsividade.

### 2. Cabeçalho cobrindo carrinho/modal
O carrinho e os modais estavam em `z-index: 50`, enquanto o cabeçalho sticky usa `z-index: 60`.

Agora:
- cabeçalho sticky: 60;
- drawer/modal: 100;
- toast: 120.

Assim o carrinho fica corretamente acima do cabeçalho em desktop e mobile.

## Finalização guiada — resumo real

Ao tocar em `Finalizar` depois de adicionar um item, o Cactchô NÃO abre mais o carrinho imediatamente.

Ele mostra:
- todos os itens reais do carrinho;
- quantidade;
- ingredientes removidos;
- adicionais;
- subtotal por linha;
- total real;
- pergunta `Tudo certo?`.

### Botões
- `Quero alterar` → abre o carrinho no topo para editar/remover.
- `Sim, continuar` → abre o carrinho já na seção de dados/pagamento.

O carrinho tradicional continua sendo a fonte oficial do pedido.

## Preservado
- preços;
- personalização;
- localStorage;
- horário;
- pagamento;
- WhatsApp;
- wave;
- happy;
- saudação;
- mobile/desktop já aprovados.
