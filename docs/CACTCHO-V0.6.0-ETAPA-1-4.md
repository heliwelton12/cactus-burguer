# Cactchô v0.6.0 — Etapa 1.4

## Correção exclusiva para celular

Os prints no iPhone mostraram dois problemas:
1. o braço do Cactchô era cortado porque o personagem estava parcialmente fora da tela (`right` negativo);
2. a barra de categorias passava por cima do mascote porque o mobile usava `z-index: 49`.

### Ajustes
- `right` passa a ser positivo no mobile, mantendo todo o personagem dentro da tela;
- `z-index` mobile passa a `55`, acima da barra de categorias (`50`) e abaixo do cabeçalho principal (`60`);
- redução mínima do tamanho no mobile para diminuir sobreposição;
- `overflow: visible` aplicado ao container do mascote;
- desktop não foi alterado.

## Preservado
- desktop aprovado;
- posição desktop;
- tamanho desktop;
- animação Rive;
- cabeçalho;
- categorias;
- carrinho;
- demais funcionalidades.
