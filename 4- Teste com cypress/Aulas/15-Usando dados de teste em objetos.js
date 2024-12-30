//Comentário sobre o código:

//Um objeto testData é definido contendo dados de teste para username, password e email. Isso facilita a reutilização e manutenção dos dados de teste.


//A função it define um caso de teste específico com a descrição "Deve preencher o formulário de login com dados de teste".
cy.visit('https://example.com/login') //navega até a página de login do site especificado.
cy.get('input[name="username"]').type(testData.username) //localiza o campo de entrada para o nome de usuário e insere o valor testData.username (que é 'testUser').
cy.get('input[name="password"]').type(testData.password) //localiza o campo de entrada para a senha e insere o valor testData.password (que é 'testPassword').


// cypress/integration/testDataObject.spec.js

describe('Usando dados de teste em objetos no Cypress', () => {
    const testData = {
        username: 'testUser',
        password: 'testPassword',
        email: 'testUser@example.com'
    };

    it('Deve preencher o formulário de login com dados de teste', () => {
        cy.visit('https://example.com/login');

        cy.get('input[name="username"]').type(testData.username);
        cy.get('input[name="password"]').type(testData.password);
        cy.get('input[name="email"]').type(testData.email);

        cy.get('form').submit();

        cy.url().should('include', '/dashboard');
    });
});