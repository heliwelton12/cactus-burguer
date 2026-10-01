# Como testar o refinamento visual v0.5.1

Esta pasta é uma cópia de teste completa. Não substitua a versão oficial antes da aprovação.

## Executar

```bash
npm install
npm run dev
```

Teste primeiro no desktop e depois no modo celular/aparelho físico.

## O que observar

1. a arte original deve aparecer no hero sem deformação;
2. não deve existir a paisagem artificial da v0.5.0;
3. o texto deve ficar curto e sem repetições excessivas;
4. no celular, imagem, status e CTA não podem causar rolagem horizontal;
5. cardápio e carrinho devem continuar funcionando como antes.

Depois da aprovação visual:

```bash
npm run build
npm run preview
```

Ainda não fazer commit/push/deploy desta versão de teste.
