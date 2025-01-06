import userData from '../fixtures/users/user-data.json'

describe('site Orange', () => {

  const elemento = {
    
    //Pagina login
    inserirNome: "[name='username']", //Admin
    inserirSenha: "[name='password']",//senha correta admin123
    clicarEmSubmit: "[type='submit']",//botao de dar submit
    alerta: "[role='alert']",//alerta de erro

    //Elementos pagina inicial do sistema = dashboard
    tituloTopo: '.oxd-topbar-header-breadcrumb-module',// titulo da pagina
    paginaDashboard:  '.orangehrm-dashboard-grid' ,//pagina dashboard inteira
    myInfobotao:"[href='/web/index.php/pim/viewMyDetails']",

    //Elementos Pagina MyInfo
    primeiroNome:"[name='firstName']", 
    sobrenome:"[name='middleName']",
    ultimoNome:"[name='lastName']",
    dropdownNacionalidade:":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input",
    employeeId:':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    otherId:':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    driveLicense:':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    calenderlicenseExpiryDate:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    inputCalenderlicenseExpiryDate:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    saveButton:"[type='submit']",
    toastTitleSuccess:".oxd-text--toast-title",
    toastMensageSuccess:".oxd-text--toast-message"

  
    }  


    // Login com sucesso padrão com o Const e o objeto userData em outro arquivo
    
    it('Login com sucesso', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(elemento.inserirNome) .type(userData.usuarioCorreto.nome) /// USUARIO CORRETO   
      cy.get(elemento.inserirSenha) .type(userData.usuarioCorreto.senha) /// SENHA CORRETA
      cy.get(elemento.clicarEmSubmit).click() /// CLICAR EM LOGIN
      cy.location('pathname').should('equal','/web/index.php/dashboard/index')///SISTEMA RETORNA PAGINA DO DASHBOARD
      cy.get(elemento.paginaDashboard)/// SISTEMA RETORNA TITULO DA PAGINA = DASHBOARD
    })

    // Login senha errada porem só com os elemento sem o userData

    it('login senha errada',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(elemento.inserirNome) .type('Admin') /// USUARIO CORRETO
    cy.get(elemento.inserirSenha) .type('test') /// SENHA ERRADA 
    cy.get(elemento.clicarEmSubmit).click() /// CLICAR EM LOGIN
    cy.get(elemento.alerta).contains('Invalid credentials') /// RETORNAR MENSAGEM DE ERRO 'INVALID CREDENTIALS'
  
    

    // login com usuário errado porem só com os elemento sem o userData(somente no nome)


    })
  
    it('Login usuário errado', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(elemento.inserirNome) .type(userData.usuarioErrado.nome) /// USUARIO ERRADO  
      cy.get(elemento.inserirSenha) .type('admin122') /// SENHA CORRETA
      cy.get(elemento.clicarEmSubmit).click() /// CLICAR EM LOGIN
      cy.get(elemento.alerta).contains('Invalid credentials') /// RETORNAR MENSAGEM DE ERRO 'INVALID CREDENTIALS'
      
    })
    
    //Entendendo como funciona o baseUrl
    //baseUrl: https://opensource-demo.orangehrmlive.com/web/index.php

    it('Login usuário errado2 ', () => {
      cy.visit('/auth/login')
      cy.get(elemento.inserirNome) .type(userData.usuarioErrado.nome) /// USUARIO ERRADO  
      cy.get(elemento.inserirSenha) .type('admin122') /// SENHA CORRETA
      cy.get(elemento.clicarEmSubmit).click() /// CLICAR EM LOGIN
      cy.get(elemento.alerta).contains('Invalid credentials') /// RETORNAR MENSAGEM DE ERRO 'INVALID CREDENTIALS'
      
    })


    //Novo cenário para acessar o myinfo e preencher as informações do usuário

    it.only('Login,acesso ao myinfo e inserir dados', () => {
      
      //Logando no sistema
      cy.visit('/auth/login')
      cy.get(elemento.inserirNome) .type(userData.usuarioCorreto.nome) /// USUARIO CORRETO
      cy.get(elemento.inserirSenha) .type(userData.usuarioCorreto.senha) /// SENHA CORRETA
      cy.get(elemento.clicarEmSubmit).click() /// CLICAR EM LOGIN
      cy.location('pathname').should('equal','/web/index.php/dashboard/index')///SISTEMA RETORNA PAGINA DO DASHBOARD
      cy.get(elemento.paginaDashboard)/// SISTEMA RETORNA TITULO DA PAGINA = DASHBOARD  
      
      //Acessando o myinfo
      cy.get(elemento.myInfobotao).contains('My Info').click() /// CLICAR EM MYINFO
      cy.location('pathname').should('equal','/web/index.php/pim/viewPersonalDetails/empNumber/7')///SISTEMA RETORNA PAGINA DO MYINFOS 

      //Preenchendo informações do usuário
      cy.get(elemento.primeiroNome).click().clear().type('Teste')/// PREENCHER NOME
      cy.get(elemento.sobrenome).click().clear().type('Teste') /// PREENCHER SOBRENOME
      cy.get(elemento.ultimoNome).click().clear().type('Teste') /// PREENCHER SOBRENOME
      cy.get(elemento.employeeId).click().clear().type('123456') /// PREENCHER ID
      cy.get(elemento.otherId).click().clear().type('654321') /// PREENCHER OTHER ID
      cy.get(elemento.driveLicense).click().clear().type('123456789') /// PREENCHER DRIVE LICENSE
      cy.get(elemento.inputCalenderlicenseExpiryDate).click().clear().type('2030-25-12') /// PREENCHER DATA DE EXPIRAÇÃO
      cy.get(elemento.inputCalenderlicenseExpiryDate).click() /// CLICAR NO INPUT DE DATA PARA FECHAR O CALENDARIO
      cy.get(elemento.saveButton).eq(0).click() /// CLICAR EM SAVE
      cy.get(elemento.toastTitleSuccess).contains('Success') /// RETORNAR MENSAGEM DE SUCESSO
      cy.get(elemento.toastMensageSuccess).contains('Successfully Updated') /// RETORNAR MENSAGEM DE SUCESSO
      //DEU CERTO ATÉ AQUI  


      //cy.get(elemento.dropdownNacionalidade).select('Brazilian') /// SELECIONAR NACIONALIDADE


      
      
      

      

    })

    

  
  
  })


  