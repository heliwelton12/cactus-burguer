# Passo a passo de desenvolvimento — Cactus Burguer

## Estado atual

A base funcional foi validada localmente e o primeiro push oficial para o GitHub foi concluído na branch `main`.

Fluxo atual:

```text
VS Code → Git → GitHub ✅ → Cloudflare Pages → regressão em produção → release
```

## Rotina de desenvolvimento

1. Trabalhar dentro da pasta `cactus-burguer` no VS Code.
2. Instalar dependências quando necessário:

```bash
npm install
```

3. Desenvolvimento:

```bash
npm run dev
```

4. Registrar testes em `TESTES.md`.
5. Registrar mudanças relevantes em `CHANGELOG.md`.
6. Registrar bugs/decisões em `docs/HISTORICO-PROBLEMAS-CORRECOES.md`.
7. Antes de cada push relevante:

```bash
npm run build
npm run preview
```

8. Revisar `git status` antes do commit.
9. Fazer commit apenas após validação da etapa.
10. Fazer push somente de uma etapa consolidada.

## Gate local concluído

- regressão curta aprovada;
- mensagem do WhatsApp validada;
- horário aberto validado com teste controlado;
- horário fechado validado;
- build aprovado;
- preview aprovado;
- documentação revisada;
- primeiro push concluído.

## Próxima etapa — Cloudflare Pages

1. conectar o repositório `heliwelton12/cactus-burguer`;
2. usar branch de produção `main`;
3. build command: `npm run build`;
4. output directory: `dist`;
5. publicar inicialmente somente no domínio `.pages.dev`;
6. manter o site atual e o QR Code da lanchonete intactos;
7. executar regressão completa na URL Cloudflare;
8. registrar PageSpeed/Lighthouse;
9. não declarar v1.0.0 antes dos gates finais.

O site atual e o QR Code da lanchonete permanecem intocados até decisão explícita de migração.
