// A configuração da baseUrl no Cypress permite definir uma URL base para todos os testes.
// Isso significa que você pode usar caminhos relativos em vez de URLs completas em seus testes.
// Por exemplo, se você definir a baseUrl como 'https://example.com', você pode usar cy.visit('/login')
// em vez de cy.visit('https://example.com/login') em seus testes.
// Isso facilita a manutenção dos testes, pois se a URL base mudar, você só precisa atualizar a configuração da baseUrl.

module.exports = {
    e2e: {
      baseUrl: 'https://example.com' // Define a baseUrl para todos os test
    }
  };

  // e na area de teste você pode usar o seguinte comando

  cy.visit('/login') // em vez de cy.visit('https://example.com/login') em seus testes.