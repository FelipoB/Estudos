

//A pasta fixtures no Cypress é usada para armazenar arquivos de dados que podem ser usados em seus testes. Esses arquivos geralmente estão no formato JSON, mas podem ser de outros tipos, como CSV ou texto simples. Eles são úteis para fornecer dados de teste consistentes e reutilizáveis.

//Por exemplo, você pode ter um arquivo JSON chamado user.json na pasta fixtures com o seguinte conteúdo:


//fixtures/teste.json'

{
    "name": "John Doe",
    "email": "john.doe@example.com"
  }

//Você pode então usar esses dados em seus testes Cypress da seguinte maneira:

import userData from '../fixtures/teste.json' ou     cy.fixture('user').then((user) => { 

describe('My First Test', () => {
    it('Uses fixture data', () => {
      cy.fixture('user').then((user) => {
        cy.visit('https://example.com/login')
        cy.get('input[name="name"]').type(user.name)
        cy.get('input[name="email"]').type(user.email)
        cy.get('form').submit()
      })
    })
  })


  //Neste exemplo, o Cypress carrega os dados do arquivo user.json e os usa para preencher e enviar um formulário de login. Isso ajuda a manter seus testes organizados e facilita a reutilização de dados de teste.