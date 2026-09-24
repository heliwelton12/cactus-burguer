# SEO e Metadados — Cactus Burguer

## Estado atual

A cópia em desenvolvimento está propositalmente bloqueada para indexação:

```html
<meta name="robots" content="noindex, nofollow" />
```

E `public/robots.txt` contém:

```text
User-agent: *
Disallow: /
```

Isso é intencional enquanto a nova versão coexistir apenas como cópia de desenvolvimento/portfólio.

## Antes de tornar a versão indexável

Tomar uma decisão explícita sobre qual endereço deve ser a versão pública principal.

Se a versão Cloudflare passar a ser a principal:

1. alterar robots para permitir rastreamento;
2. usar `index, follow`;
3. configurar canonical para a URL oficial;
4. criar `sitemap.xml` se fizer sentido;
5. revisar title e description;
6. adicionar favicon definitivo;
7. configurar Open Graph/Twitter Cards;
8. avaliar JSON-LD de negócio local/cardápio com dados verdadeiros;
9. garantir que não existam duas versões concorrendo sem canonical/estratégia definida.

## Metadados atuais

```text
Title: Cactus Burguer | Cardápio Digital
Description: Cardápio digital da Cactus Burguer. Monte seu pedido, personalize os itens e envie pelo WhatsApp.
Theme color: #1d1813
```

## Dados estruturados

Não publicar schema com informação inventada. Se for adicionado `LocalBusiness`/`Restaurant`, validar:

- nome;
- telefone;
- endereço;
- horário;
- URL oficial;
- meios de contato.

## Regra do QR Code

SEO e domínio da nova cópia não devem alterar automaticamente o QR Code existente. Qualquer migração é uma decisão separada.
