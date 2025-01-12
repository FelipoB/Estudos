import userData from        '../fixtures/users/user-data.json'
import loginPage from       '../pages/loginPage.js'
import dashboardPage from   '../pages/dashboardPage.js'
import myInfoPage from      '../pages/myinfoPage.js'
import MenuPage from        '../pages/menupage.js'
   
    var Chance = require('chance') // randomizar os nomes  com CHANCE JS
    var chance = new Chance()
    const login = new loginPage()
    const dashboard = new dashboardPage() 
    const myInfo = new myInfoPage()
    const menu = new MenuPage()


describe('Logar e Cadastras', () => {
    });
    
    it('Access MyInfo And Fill Details ', () => {
          login.acessLogin()
          login.loginCorrectUser(userData.correctUser.user, userData.correctUser.password)
          dashboard.VerifyDashboardPage()
          menu.clickMyinfoButton()
          myInfo.fillMyInfoOne(chance.first(),chance.last(),chance.last()) // este caso estou usando CHANCE JS para gerar nomes aleatórios 
          myInfo.fillMyInfotwo("9999","8888","666555","2030-25-12")
          myInfo.fillMyInfoThree()
          myInfo.SaveAndCheck()

        });

    




























      
    
    // Login with incorrect password but only using elements without userData
    //it('Login with incorrect password', () => {
      //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      //cy.get(pageElements.inputUsername).type('Admin') // Correct username
      //cy.get(pageElements.inputPassword).type('test') // Incorrect password
      //cy.get(pageElements.buttonSubmit).click() // Click login
      //cy.get(pageElements.alert).contains('Invalid credentials') // Return error message 'Invalid credentials'
    //});
    
    // Login with incorrect username but only using elements without userData (only the name)
    //it('Login with incorrect username', () => {
     // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     // cy.get(pageElements.inputUsername).type(userData.incorrectUser.name) // Incorrect username
      //cy.get(pageElements.inputPassword).type('admin122') // Correct password
      //cy.get(pageElements.buttonSubmit).click() // Click login
      //cy.get(pageElements.alert).contains('Invalid credentials') // Return error message 'Invalid credentials'
   // });
    
    // Understanding how baseUrl works
    // baseUrl: https://opensource-demo.orangehrmlive.com/web/index.php
   // it('Login with incorrect username 2', () => {
     // cy.visit('/auth/login')
     // cy.get(pageElements.inputUsername).type(userData.incorrectUser.name) // Incorrect username
      //cy.get(pageElements.inputPassword).type('admin122') // Correct password
     // cy.get(pageElements.buttonSubmit).click() // Click login
     // cy.get(pageElements.alert).contains('Invalid credentials') // Return error message 'Invalid credentials'
    //});
    
    // New scenario to access My Info and fill in user information
    //it('Login, access My Info and fill in details', () => {
      // Logging into the system
      //cy.visit('/auth/login')
      //
    
      // Accessing My Info//
      //cy.get(pageElements.buttonMyInfo).contains('My Info').click() // Click My Info
      //cy.location('pathnam//e').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7') // System returns My Info page
    
      // Filling in user information (first name, middle name, last name)
      //cy.get(pageElements.inputFirstName).click().clear().type('Test') // Fill in first name
      //cy.get(pageElements.inputMiddleName).click().clear().type('Test') // Fill in middle name
      //cy.get(pageElements.inputLastName).click().clear().type('Test') // Fill in last name
    
      // Filling in user information second part (ID, OTHER ID, DRIVER LICENSE, EXPIRY DATE)
      //cy.get(pageElements.inputEmployeeId).click().clear().type('123456') // Fill in employee ID
      //cy.get(pageElements.inputOtherId).click().clear().type('654321') // Fill in other ID
     //cy.get(pageElements.inputDriverLicense).click().clear().type('123456789') // Fill in driver license
      //cy.get(pageElements.inputLicenseExpiryDate).click().clear().type('2030-25-12') // Fill in expiry date
      //cy.get(pageElements.inputLicenseExpiryDate).click() // Click the date input to close the calendar
    
      // Filling in user information third part (nationality, marital status, date of birth, and gender)
      //cy.get(pageElements.nationalityStatus).eq(0).click().type('{downarrow}'.repeat(26))
      //cy.get(pageElements.nationalityStatus).eq(0).contains('Brazilian')
      //cy.get(pageElements.nationalityStatus).eq(1).click().type('{downarrow}'.repeat(1)).click()
      //cy.get(pageElements.nationalityStatus).eq(1).contains('Single')
    
      // Fifth part
      //cy.get(pageElements.inputDateOfBirth).click().clear().type('1990-25-12') // Fill in date of birth
      //cy.get(pageElements.inputDateOfBirth).click() // Click the date input to close the calendar
      //cy.get(pageElements.femaleButton).click() // Select female gender
    
      // Sixth part
      //cy.get(pageElements.selectBloodType).click().type('{downarrow}'.repeat(4)).click() // Select blood type B+
     // cy.get(pageElements.inputTestField).click().clear().type('TESTING!!!!!!') // Fill in test field
    
      // Save the information
      //cy.get(pageElements.buttonSave).eq(0).click() // Click save
      //cy.get(pageElements.toastTitleSuccess).contains('Success') // Return success message
      //cy.get(pageElements.toastMessageSuccess).contains('Successfully Updated') // Return success message
    //});
      

      

    //})

    

  
  
  


  