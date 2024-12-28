describe('site Orange', () => {

const comandos = {
  inserirNome: "[name='username']",
  inserirSenha: "[name='password']",
  clicarEmSubmit: "[type='submit']",
  alerta: "[role='alert']",
  tituloTopo: '.oxd-topbar-header-breadcrumb-module'
  
  }  

  
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(comandos.inserirNome) .type('Admin') /// USUARIO CORRETO   
    cy.get(comandos.inserirSenha) .type('admin123') /// SENHA CORRETA
    cy.get(comandos.clicarEmSubmit).click() /// CLICAR EM LOGIN
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')///SISTEMA RETORNA PAGINA DO DASHBOARD
    cy.get(comandos.tituloTopo).contains('Dashboard')/// SISTEMA RETORNA TITULO DA PAGINA = DASHBOARD
  })

  it('login sem sucesso',() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(comandos.inserirNome) .type('Admin') /// USUARIO CORRETO
  cy.get(comandos.inserirSenha) .type('test') /// SENHA ERRADA 
  cy.get(comandos.clicarEmSubmit).click() /// CLICAR EM LOGIN
  cy.get(comandos.alerta).contains('Invalid credentials') /// RETORNAR MENSAGEM DE ERRO 'INVALID CREDENTIALS'

  
  })

})