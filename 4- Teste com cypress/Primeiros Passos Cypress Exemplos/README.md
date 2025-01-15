# Projetos de Automação com Cypress

Este repositório contém dois projetos de automação utilizando o Cypress. Abaixo estão as descrições e instruções para cada um dos projetos.

## Projeto 1: Teste de Login

### Descrição
Este projeto realiza testes de login, verificando tanto cenários de sucesso quanto de falha. Utiliza dados de usuário armazenados em um arquivo JSON.

### Estrutura
- **Arquivo de Teste:** `cypress/e2e/Login.cy.js`
- **Dados de Usuário:** `cypress/fixtures/users/user-data.json`
- **Páginas:** 
  - `cypress/pages/loginPage.js`
  - `cypress/pages/dashboardPage.js`

### Como Executar
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Execute os testes:
   ```sh
   npx cypress open 
   ```

## Projeto 2: Cadastro de Informações Pessoais

### Descrição
Este projeto realiza o login e preenche informações pessoais na seção "My Info" do sistema. Utiliza a biblioteca Chance.js para gerar nomes aleatórios.

### Estrutura
- **Arquivo de Teste:** `cypress/e2e/cadastroMyInfo.cy.js`
- **Dados de Usuário:** `cypress/fixtures/users/user-data.json`
- **Páginas:** 
  - `cypress/pages/loginPage.js`
  - `cypress/pages/dashboardPage.js`
  - `cypress/pages/myinfoPage.js`
  - `cypress/pages/menupage.js`

### Como Executar
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Execute os testes:
   ```sh
   npx cypress open
   ```

## Dependências
- Cypress
- Chance.js

## Configuração do Cypress
Certifique-se de que o arquivo `cypress.json` esteja configurado corretamente com a URL base do sistema que está sendo testado.

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou novos testes. Faça um fork do repositório, crie uma branch para suas alterações e envie um pull request.

## Licença
Este projeto está licenciado sob a MIT License.


> *** NOTA ***
> é necessário nodeJs instalado

