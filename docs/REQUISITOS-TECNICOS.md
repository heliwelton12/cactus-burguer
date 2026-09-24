# Requisitos Técnicos — Cactus Burguer

## 1. Stack oficial

| Camada | Tecnologia |
|---|---|
| Interface | React 19 |
| Build/dev server | Vite 7 |
| Linguagem | JavaScript / JSX |
| Estilos | CSS puro responsivo |
| Persistência local | `localStorage` |
| Integração externa | WhatsApp via `wa.me` |
| Versionamento | Git + GitHub |
| Hospedagem planejada | Cloudflare Pages |
| Backend | Não necessário nesta fase |
| Banco de dados | Não necessário nesta fase |

## 2. Runtime e ferramentas

- Node.js recomendado: **22 LTS**;
- npm recomendado: versão compatível com Node 22;
- editor recomendado: VS Code;
- branch de produção planejada: `main`;
- comando de build: `npm run build`;
- diretório de saída: `dist`;
- preview local: `npm run preview`.

## 3. Arquitetura obrigatória

```text
src/
├── components/   # interface reutilizável
├── config/       # dados operacionais da loja
├── data/         # cardápio
├── utils/        # regras auxiliares e integrações
├── App.jsx       # composição/estado principal
└── styles.css    # design system e responsividade
```

### Restrições

- não duplicar cardápio dentro de componentes;
- não espalhar número de WhatsApp, endereço ou horário em múltiplos arquivos;
- manter dados operacionais centralizados em `src/config/store.js`;
- manter produtos e categorias em `src/data/menu.js`;
- não criar backend sem necessidade funcional documentada;
- não incluir dependência do domínio `chatgpt.site`.

## 4. Configuração atual da loja

```js
{
  name: 'Cactus Burguer',
  address: 'Em frente ao Colégio Eliel, no Paraguai',
  whatsapp: '5575982002109',
  timezone: 'America/Bahia',
  openHour: 8,
  closeHour: 21,
  paymentMethods: ['Pix', 'Cartão', 'Dinheiro']
}
```

Antes da publicação final, telefone, endereço e horário devem ser confrontados com a informação oficial da lanchonete.

## 5. Persistência

Chaves atuais:

```text
cactus-burguer-cart-v1
cactus-burguer-customer-v1
```

Requisitos:

- JSON inválido não pode quebrar a aplicação;
- falha ao carregar deve retornar estado vazio/padrão;
- mudança futura incompatível no formato deve incrementar a versão da chave;
- não armazenar dados de cartão, senha, CPF ou informação sensível.

## 6. Integração com WhatsApp

A aplicação monta uma mensagem textual e abre:

```text
https://wa.me/<numero>?text=<mensagem-codificada>
```

Não existe API privada, token ou webhook nesta fase.

## 7. Compatibilidade

Alvos mínimos:

- Chrome/Chromium moderno no Android e desktop;
- Safari moderno no iPhone/iPad;
- Edge moderno;
- viewport mínima suportada: 320 px.

## 8. Dependências

Dependências de produção devem ser mantidas no mínimo necessário. Toda nova biblioteca deve justificar:

1. problema que resolve;
2. impacto no bundle;
3. manutenção/risco;
4. alternativa nativa considerada.

## 9. Variáveis de ambiente

A versão atual não exige `.env`.

Se futuramente houver configuração sensível:

- criar `.env.example` somente com nomes/chaves públicas de exemplo;
- adicionar `.env*` sensível ao `.gitignore`;
- nunca expor segredo em variável `VITE_*`, pois ela é incorporada ao frontend.

## 10. Requisitos de build

Antes de qualquer push de release:

```bash
npm install
npm run build
npm run preview
```

O build só é aprovado se:

- terminar sem erro;
- a aplicação abrir no preview;
- fluxo crítico funcionar;
- console estiver sem erro crítico;
- assets carregarem sem 404.

## 11. Requisitos de deploy

Cloudflare Pages planejado:

```text
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
```

Durante a fase de cópia/teste, a versão nova deve permanecer independente do site oficial e do QR Code atual.
