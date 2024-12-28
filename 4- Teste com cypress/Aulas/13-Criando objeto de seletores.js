//Ctrl + c interrompe o processo do Cypress no git bash 



//Em automação de testes com Cypress, os seletores são usados para identificar elementos na página que você deseja interagir. Vamos criar um objeto de seletores em Cypress e explicar como ele pode ser usado.

//Criando um Objeto de Seletores: Primeiro, vamos criar um arquivo chamado selectors.js onde definiremos nossos seletores:

const selectors = {
    usernameInput: '#username',
    passwordInput: '#password',
    loginButton: '#loginButton',
    errorMessage: '.error-message'
};

//Explicação
//Definição do Objeto: Criamos um objeto chamado selectors que contém pares chave-valor. Cada chave é um nome descritivo para o elemento, e o valor é o seletor CSS correspondente.

//Exportação: Exportamos o objeto selectors para que ele possa ser importado e usado em outros arquivos de teste.

//Usando os Seletores em um Teste Cypress
//Agora, vamos usar esses seletores em um teste Cypress. Suponha que temos um arquivo de teste chamado login.spec.js:

import selectors from '../support/selectors';

describe('Login Test', () => {
    it('should display an error message for invalid login', () => {
        cy.visit('/login');
        cy.get(selectors.usernameInput).type('invalidUser');
        cy.get(selectors.passwordInput).type('invalidPassword');
        cy.get(selectors.loginButton).click();
        cy.get(selectors.errorMessage).should('be.visible');
    });
});

//Explicação
//Importação dos Seletores: Importamos o objeto selectors do arquivo selectors.js.
//Uso dos Seletores: Utilizamos cy.get(selectors.usernameInput), cy.get(selectors.passwordInput), etc., para interagir com os elementos da página de login.

//Benefícios
//Manutenção: Facilita a manutenção dos testes, pois os seletores estão centralizados em um único arquivo.
//Clareza: Torna os testes mais legíveis e compreensíveis, pois usamos nomes descritivos para os elementos.