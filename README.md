# Gerenciamento de Clientes

Esta é uma aplicação de gerenciamento de clientes que permite criar, listar e excluir dados de clientes. A aplicação foi desenvolvida utilizando React e styled-components, com persistência de dados no `localStorage`.

## Passo a Passo para Rodar a Aplicação

### 1. Clonar o Repositório

Primeiro, clone o repositório para o seu ambiente local usando o comando:

bash
git clone https://github.com/MaiaAndrey31/FrontClientsTinnova 

### 2. Instalar Dependências
Navegue até o diretório do projeto e instale as dependências necessárias usando o Yarn:

cd nome-do-repositorio
yarn install

### 3. Iniciar a Aplicação
Para iniciar a aplicação, execute o comando:

bash

yarn dev
A aplicação estará disponível em http://localhost:5173.

### 4. Rodar os Testes
Para rodar os testes, utilize o comando:

bash

yarn test
Descrição da Solução
A aplicação foi desenvolvida utilizando React para gerenciar o estado e renderizar os componentes. Os dados dos clientes são armazenados no localStorage para persistência.

Componentes Principais
ClientForm: Componente responsável por exibir o formulário de cadastro de clientes. Inclui validação de CPF e estados de loading no botão de cadastro.
ClientList: Componente que exibe a lista de clientes cadastrados em formato de tabela. Permite a exclusão de clientes.
Funcionalidades
Validação de CPF: Implementada utilizando uma função de validação que verifica a conformidade do CPF com os requisitos padrão.
Estado de Loading: Adicionado ao botão de cadastro para indicar que a operação está em progresso.
Persistência de Dados: Os dados são armazenados no localStorage para garantir a persistência entre as sessões.
Estrutura de Pastas
``plaintext

src/
├── components/
│   ├── ClientForm.js
│   ├── ClientForm.styled.js
│   ├── ClientList.js
│   ├── ClientList.styled.js
├── pages/
│   ├── FormPage.js
│   ├── ListPage.js
│   ├── Page.styled.js
├── App.js
├── App.styled.js
├── index.js
└── setupTests.js
``

Estilização
A estilização foi feita utilizando styled-components, permitindo a criação de componentes estilizados de forma modular e reutilizável.

Navegação
A navegação entre as páginas de cadastro e listagem de clientes é gerenciada pelo react-router-dom v6.

Observação: Certifique-se de que todas as dependências estão corretamente instaladas e que você possui o Yarn configurado em seu ambiente local para rodar a aplicação sem problemas.
