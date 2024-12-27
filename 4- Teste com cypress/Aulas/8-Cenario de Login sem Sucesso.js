

describe('Login - Unsuccessful Attempts', () => {
    beforeEach(() => {
      // Acesse a página de login antes de cada teste
      cy.visit('/login'); // Substitua pela URL correta da sua página de login
    });
  
    it('Should display an error message for invalid credentials', () => {
      // Digite credenciais inválidas
      cy.get('#username').type('wrong_user'); // Substitua '#username' pelo seletor correto
      cy.get('#password').type('wrong_password'); // Substitua '#password' pelo seletor correto
      cy.get('button[type="submit"]').click(); // Substitua pelo seletor do botão de login
  
      // Verifique se a mensagem de erro é exibida
      cy.contains('Invalid username or password').should('be.visible');
      
      // Certifique-se de que o usuário permanece na página de login
      cy.url().should('include', '/login'); // O URL não deve mudar
    });
  
    it('Should not proceed with empty fields', () => {
      // Deixe os campos vazios e tente fazer login
      cy.get('button[type="submit"]').click();
  
      // Verifique mensagens de validação
      cy.contains('Username is required').should('be.visible');
      cy.contains('Password is required').should('be.visible');
    });
  });
  