# Segurança — Cactus Burguer

## Escopo atual

Aplicação frontend estática, sem autenticação, backend ou banco remoto.

## Dados tratados

- nome do cliente;
- carrinho/personalizações;
- forma de pagamento escolhida;
- valor de troco opcional;
- observações do pedido.

Esses dados ficam no navegador (`localStorage`) e só são encaminhados ao WhatsApp quando o cliente executa a ação de envio.

## Regras obrigatórias

- não armazenar senha, CPF, dados completos de cartão ou segredo;
- não incluir tokens/chaves privadas no repositório;
- lembrar que qualquer variável `VITE_*` é pública no bundle;
- evitar inserir HTML bruto vindo de usuário;
- manter React renderizando texto de usuário por interpolação normal;
- validar entradas usadas na regra de negócio;
- dependências novas devem ser revisadas antes de inclusão.

## WhatsApp

O número comercial é público por natureza e pode existir no frontend. A aplicação usa link `wa.me`, sem token secreto.

## localStorage

`localStorage` não é armazenamento seguro para informação sensível. Por isso a aplicação deve limitar-se a dados operacionais do pedido.

## Headers planejados para Cloudflare

Antes da release, avaliar configuração de cabeçalhos como:

```text
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Uma CSP só deve ser adicionada depois de mapear todos os recursos externos realmente usados para evitar quebrar a produção.

## Dependências

Antes da release estável:

```bash
npm audit
```

Tratar achados considerando severidade, explorabilidade e impacto real; não atualizar major automaticamente sem regressão.

## Checklist de segurança pré-release

- [ ] `.gitignore` revisado
- [ ] nenhum `.env`/segredo versionado
- [ ] nenhum dado de pagamento sensível coletado
- [ ] `npm audit` analisado
- [ ] links externos revisados
- [ ] campos e mensagens testados com caracteres especiais
- [ ] headers de produção revisados
- [ ] console sem exposição desnecessária de dados
