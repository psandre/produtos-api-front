# sistema de Cadastro de Produtos (Front-end + API Fake)

Este projeto simula um sistema simples de cadastro de produtos.

Projeto simples desenvolvido para praticar a comunicação entre front-end e API, usando JavaScript puro e uma API simulada.

A ideia principal foi entender na prática como dados são buscados, criados e removidos.
Não usei frameworks.
---

## Objetivo do projeto

* Praticar consumo de API REST
* Entender como o front-end se comunica com o back-end
* Trabalhar com operações básicas de dados
* Ganhar segurança com JavaScript no dia a dia

---

## O que foi utilizado

* HTML
* CSS
* JavaScript puro
* json-server (API fake)
* Insomnia (testes e simulação das requisições da API)
* Insomnia (testes da API)

---

## Estrutura do projeto

O projeto é bem simples e foi separado só para não virar bagunça:

* Uma pasta só para a API fake, onde fica o arquivo `db.json` com os produtos
* Uma pasta para o front-end, com HTML, CSS e JavaScript

A API cuida dos dados.
O front-end mostra esses dados na tela e envia as ações do usuário.

---

## Como rodei o projeto:

### 1️⃣ Instalei o json-server

```
npm install -g json-server
```

---

### 2️⃣ Iniciei a API

Dentro da pasta do projeto:

```
json-server --watch api/db.json --port 3000
```

A API ficou disponível em:

```
http://localhost:3000/produtos
```

---

### 3️⃣ Abri o front-end

* Acessei a pasta `frontend`
* Abri o arquivo `index.html` no navegador

---

## Funcionalidades utilizadas para manipular:

* Listar produtos (GET)
* Adicionar novos produtos (POST)
* Excluir produtos (DELETE)

Todas as ações são feitas pelo front-end, sem editar o arquivo `db.json` manualmente.
Más também obtive a experiência de utilizar essas funcionalidades através do 
insomnia e do próprio vscode.

---

## Aprendizados

* Consumo de API com `fetch`
* Diferença prática entre GET, POST e DELETE
* Organização básica de projeto
* Leitura e correção de erros no console

---