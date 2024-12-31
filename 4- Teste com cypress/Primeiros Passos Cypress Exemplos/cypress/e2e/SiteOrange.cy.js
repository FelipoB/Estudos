import userData from '../fixtures/users/user-data.json'

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
      cy.get(comandos.inserirNome) .type(userData.usuarioCorreto.nome) /// USUARIO CORRETO   
      cy.get(comandos.inserirSenha) .type(userData.usuarioCorreto.senha) /// SENHA CORRETA
      cy.get(comandos.clicarEmSubmit).click() /// CLICAR EM LOGIN
      cy.location('pathname').should('equal','/web/index.php/dashboard/index')///SISTEMA RETORNA PAGINA DO DASHBOARD
      cy.get(comandos.paginaDashboard)/// SISTEMA RETORNA TITULO DA PAGINA = DASHBOARD
    })
  
    it('login senha errada',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(comandos.inserirNome) .type('Admin') /// USUARIO CORRETO
    cy.get(comandos.inserirSenha) .type('test') /// SENHA ERRADA 
    cy.get(comandos.clicarEmSubmit).click() /// CLICAR EM LOGIN
    cy.get(comandos.alerta).contains('Invalid credentials') /// RETORNAR MENSAGEM DE ERRO 'INVALID CREDENTIALS'
  
    
    })
  
    it('Login usuário errado', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(comandos.inserirNome) .type(userData.usuarioErrado.nome) /// USUARIO ERRADO  
      cy.get(comandos.inserirSenha) .type('admin122') /// SENHA CORRETA
      cy.get(comandos.clicarEmSubmit).click() /// CLICAR EM LOGIN
      cy.get(comandos.alerta).contains('Invalid credentials') /// RETORNAR MENSAGEM DE ERRO 'INVALID CREDENTIALS'
      
    })
    

    //baseUrl: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    it('Login usuário errado2 ', () => {
      cy.visit('/auth/login')
      cy.get(comandos.inserirNome) .type(userData.usuarioErrado.nome) /// USUARIO ERRADO  
      cy.get(comandos.inserirSenha) .type('admin122') /// SENHA CORRETA
      cy.get(comandos.clicarEmSubmit).click() /// CLICAR EM LOGIN
      cy.get(comandos.alerta).contains('Invalid credentials') /// RETORNAR MENSAGEM DE ERRO 'INVALID CREDENTIALS'
      
    })
  
  
  })


  