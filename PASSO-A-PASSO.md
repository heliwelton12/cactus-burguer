# Passo a passo de desenvolvimento — Cactus Burguer

## Fase local atual

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

## Gate antes do primeiro GitHub

```bash
npm run build
npm run preview
```

Depois:

- executar regressão curta;
- validar mensagem WhatsApp;
- revisar documentação;
- somente então criar/pushar o repositório.

## Depois da aprovação local

Fluxo planejado:

```text
VS Code → Git → GitHub → Cloudflare Pages → regressão em produção → release
```

O site atual e o QR Code da lanchonete permanecem intocados até decisão explícita de migração.
