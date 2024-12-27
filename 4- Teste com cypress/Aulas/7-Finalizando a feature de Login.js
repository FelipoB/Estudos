//a pasta primeiro passos Cypres contem com o projeto Orange HRM

describe('Login Feature', () => {
  beforeEach(() => {
    // Visita a página de login antes de cada teste
    cy.visit('/login'); // Substitua pelo URL correto do login
  });

  it('Should successfully log in with valid credentials', () => {
    // Interaja com os campos de login
    cy.get('#username').type('valid_user'); // Substitua '#username' pelo seletor correto
    cy.get('#password').type('valid_password'); // Substitua '#password' pelo seletor correto
    cy.get('button[type="submit"]').click(); // Substitua pelo seletor correto do botão

    // Verifica se a navegação ou estado é esperado
    cy.url().should('include', '/dashboard'); // Substitua pelo destino pós-login
    cy.contains('Welcome, valid_user').should('be.visible'); // Substitua pela mensagem esperada
  });

  it('Should show an error message for invalid credentials', () => {
    cy.get('#username').type('invalid_user');
    cy.get('#password').type('wrong_password');
    cy.get('button[type="submit"]').click();

    // Verifica se a mensagem de erro é exibida
    cy.contains('Invalid username or password').should('be.visible');
  });

  it('Should show validation messages for empty fields', () => {
    cy.get('button[type="submit"]').click();

    // Verifica mensagens de validação
    cy.contains('Username is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });
});
