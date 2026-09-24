# Histórico de Problemas, Correções e Decisões

Registro contínuo para bugs, regressões, limitações e decisões técnicas relevantes.

## Modelo

### [DATA] Título
- **Versão:**
- **Ambiente:**
- **Tipo:** bug / decisão / limitação / melhoria
- **Problema/Contexto:**
- **Causa:**
- **Correção/Decisão:**
- **Teste realizado:**
- **Resultado:**
- **Requisitos relacionados:**

## 2026-09-23 — Criar versão independente em código
- **Versão:** 0.1.0
- **Ambiente:** planejamento/local
- **Tipo:** decisão arquitetural
- **Contexto:** o projeto publicado no ChatGPT Sites não deve ser usado como dependência técnica da versão de portfólio.
- **Decisão:** reconstruir o cardápio como aplicação React + Vite independente.
- **Resultado:** código próprio, sem iframe, fetch, redirecionamento ou dependência do domínio `chatgpt.site`.
- **Requisitos relacionados:** RN-011, RNF-006.

## 2026-09-23 — Numeração derivada de IDs ficou inadequada
- **Versão:** 0.2.0
- **Ambiente:** localhost
- **Tipo:** melhoria visual
- **Problema:** cards exibiam abreviações como `CACTUS / MI` e `CACTUS / HA`.
- **Correção:** usar numeração sequencial por categoria (`CACTUS / 01`, `02`...).
- **Teste realizado:** revisão visual em desktop/mobile.
- **Resultado:** aprovado.

## 2026-09-23 — Formalização do planejamento antes do GitHub
- **Versão:** 0.3.0
- **Ambiente:** documentação/local
- **Tipo:** decisão de processo
- **Contexto:** requisitos, fluxo, UI/UX e modelo de dados existiam parcialmente, mas estavam distribuídos entre README, testes e conversas.
- **Decisão:** adotar documentos formais de produto/técnica/fluxo/design/dados/plano e IDs `RF/RNF/RN/CT`.
- **Resultado esperado:** maior rastreabilidade entre necessidade, implementação, teste e release.
