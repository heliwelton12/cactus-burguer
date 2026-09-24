# Modelo de Dados — Cactus Burguer

## 1. Visão geral

A versão atual não possui backend ou banco remoto. O modelo de dados é composto por:

- configuração estática da loja;
- categorias;
- produtos;
- itens do carrinho;
- dados temporários do cliente;
- `localStorage` para persistência local.

## 2. Loja

Origem: `src/config/store.js`

```ts
Store {
  name: string
  tagline: string
  address: string
  whatsapp: string
  timezone: string
  openHour: number
  closeHour: number
  paymentMethods: string[]
}
```

## 3. Categoria

Origem: `src/data/menu.js`

```ts
Category {
  id: string
  label: string
}
```

Regras:

- `id` deve ser único;
- `id` é usado como vínculo com `Product.category`;
- label é texto de interface.

## 4. Produto

```ts
Product {
  id: string
  category: string
  name: string
  price: number
  description: string
  removable: string[]
  additions: Addition[]
}

Addition {
  name: string
  price: number
}
```

Invariantes:

- `id` único;
- `category` deve existir em `categories`;
- `price >= 0`;
- adicionais devem ter preço `>= 0`;
- ingrediente não listado em `removable` não deve aparecer como opção de retirada.

## 5. Item do carrinho

```ts
CartItem {
  cartId: string
  productId: string
  name: string
  unitPrice: number
  quantity: number
  removedIngredients: string[]
  additions: Addition[]
  note: string
}
```

### `cartId`
Identifica a configuração específica adicionada ao carrinho. Isso permite, por exemplo:

```text
1x X-Bacon — sem tomate
1x X-Bacon — sem milho
```

como itens independentes.

## 6. Cliente/checkout

```ts
Customer {
  name: string
  payment: 'Pix' | 'Cartão' | 'Dinheiro'
  changeFor: string
  note: string
}
```

Regras:

- nome obrigatório no envio;
- `changeFor` só é relevante quando `payment === 'Dinheiro'`;
- dados ficam somente no navegador até a ação explícita de abrir o WhatsApp.

## 7. Cálculo de preço

Preço unitário configurado:

```text
unitPrice + soma(adicionais)
```

Preço do item:

```text
(unitPrice + soma(adicionais)) × quantity
```

Total do carrinho:

```text
soma(preço de cada item)
```

Retirada de ingrediente não altera preço nesta versão.

## 8. localStorage

| Chave | Conteúdo |
|---|---|
| `cactus-burguer-cart-v1` | array de `CartItem` |
| `cactus-burguer-customer-v1` | objeto `Customer` |

### Regra de versionamento

Se houver mudança incompatível na estrutura persistida, criar nova chave, por exemplo:

```text
cactus-burguer-cart-v2
```

Não reutilizar a mesma chave com formato incompatível sem migração.

## 9. Backend Schema

**Não aplicável nesta fase.**

Se o projeto futuramente ganhar painel administrativo/banco, este documento deve evoluir para incluir:

- tabelas;
- tipos;
- PK/FK;
- relacionamentos;
- índices;
- regras de acesso;
- RLS quando aplicável;
- migrações;
- estratégia de backup/restore.
