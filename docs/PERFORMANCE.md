# Performance — Cactus Burguer

## Objetivo

O cardápio é acessado principalmente por celular e QR Code. A página deve abrir rápido mesmo em conexão móvel comum.

## Estratégia

### JavaScript

- manter dependências mínimas;
- evitar biblioteca para tarefas que a plataforma já resolve;
- remover código não usado antes da release;
- acompanhar tamanho do bundle gerado pelo Vite.

### Imagens

Quando os assets oficiais forem adicionados:

- preferir WebP/AVIF;
- redimensionar para o tamanho máximo realmente exibido;
- não usar imagem de vários MB como hero;
- usar `loading="lazy"` em imagens abaixo da dobra quando aplicável;
- definir dimensões/aspect ratio para evitar layout shift.

### Fontes

- priorizar system fonts enquanto não houver necessidade de fonte customizada;
- se fonte externa for adotada, limitar pesos e avaliar self-host;
- não bloquear a renderização com múltiplas famílias desnecessárias.

## Budgets orientativos

Antes da v1.0.0, perseguir:

- LCP <= 2,5 s em cenário mobile razoável;
- CLS <= 0,1;
- INP <= 200 ms;
- ausência de requests 404;
- sem imagens muito maiores que o tamanho renderizado.

Os números finais devem ser medidos, não presumidos.

## Testes obrigatórios

### Local

```bash
npm run build
npm run preview
```

Registrar tamanho dos arquivos principais em `dist/assets`.

### Produção

Executar:

- Lighthouse/DevTools;
- PageSpeed Insights mobile;
- PageSpeed Insights desktop.

## Registro

Toda otimização relevante deve incluir:

- problema encontrado;
- métrica antes;
- mudança;
- métrica depois;
- impacto visual/funcional;
- registro no CHANGELOG/TESTES quando aplicável.
