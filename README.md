# Randify Extension

Extensão de navegador para gerar dados fictícios de forma rápida durante o desenvolvimento e os testes. Atualmente, a Randify gera **CPF** e **CNPJ** válidos diretamente pelo popup da extensão.

## O que o projeto faz

A ideia da Randify é reduzir o atrito de quem precisa preencher formulários ou testar fluxos que exigem documentos brasileiros. Em vez de sair procurando geradores online, você abre a extensão e gera os valores na hora.

Hoje o projeto oferece:

- Geração de CPF válido
- Geração de CNPJ válido
- Interface simples no popup da extensão
- Base em React + TypeScript para evoluir com novas gerações no futuro

## Visão rápida

Ao abrir a extensão, o usuário encontra duas ações principais:

- `Gerar CPF`
- `Gerar CNPJ`

Cada clique gera um novo valor e exibe o resultado em um campo somente leitura.

## Stack

- React 18
- TypeScript
- Webpack
- Sass
- Jest
- Chrome Extension Manifest V3

## Estrutura do projeto

```text
.
|- public/
|  |- manifest.json
|  |- popup.html
|  |- options.html
|- src/
|  |- components/
|  |- utils/generators/cpfCnpj.ts
|  |- popup.tsx
|  |- options.tsx
|  |- background.ts
|  \- content_script.tsx
|- webpack/
|  |- webpack.common.js
|  |- webpack.dev.js
|  \- webpack.prod.js
\- dist/
```

Arquivos importantes:

- `src/utils/generators/cpfCnpj.ts`: lógica de geração e cálculo dos dígitos verificadores
- `src/components/mainContent/index.tsx`: interface principal do popup
- `public/manifest.json`: configuração da extensão

## Requisitos

- Node.js
- npm
- Google Chrome ou outro navegador Chromium compatível

## Instalação

```bash
npm install
```

## Desenvolvimento

Para acompanhar as alterações durante o desenvolvimento:

```bash
npm run watch
```

O build será atualizado na pasta `dist`.

## Build de produção

```bash
npm run build
```

## Carregando a extensão no Chrome

1. Rode o build com `npm run build` ou `npm run watch`
2. Abra `chrome://extensions`
3. Ative o **Modo do desenvolvedor**
4. Clique em **Carregar sem compactação**
5. Selecione a pasta `dist`

Depois disso, a Randify já ficará disponível na barra de extensões do navegador.

## Testes

```bash
npm test
```

## Escopo atual

Embora a base do projeto inclua `options`, `background` e `content_script`, o fluxo principal hoje está concentrado no popup da extensão. Isso é normal para esta fase do projeto e deixa um caminho aberto para evoluções como:

- copiar valor com um clique
- formatação automática de CPF/CNPJ
- gerar outros dados fictícios
- preenchimento de campos diretamente em páginas abertas
