describe('site Orange', () => {

const comandos = {
  inserirNome: "[name='username']", //Admin
  inserirSenha: "[name='password']",//senha correta admin123
  clicarEmSubmit: "[type='submit']",//botao de dar submit
  alerta: "[role='alert']",//alerta de erro
  tituloTopo: '.oxd-topbar-header-breadcrumb-module',// titulo da pagina
  paginaDashboard:  '.orangehrm-dashboard-grid' //pagina dashboard inteira
  
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

  it('Login com sucesso 2', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(comandos.inserirNome) .type('Admin') /// USUARIO CORRETO   
    cy.get(comandos.inserirSenha) .type('admin123') /// SENHA CORRETA
    cy.get(comandos.clicarEmSubmit).click() /// CLICAR EM LOGIN
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')///SISTEMA RETORNA PAGINA DO DASHBOARD
    cy.get(comandos.paginaDashboard)/// SISTEMA RETORNA A PAGINA COMPLETA DO DASHBOARD
    cy.get(comandos.tituloTopo).contains('Dashboard')/// SISTEMA RETORNA TITULO DA PAGINA = DASHBOARD
    
  })



})