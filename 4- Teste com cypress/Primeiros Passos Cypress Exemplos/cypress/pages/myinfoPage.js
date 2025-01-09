class infoPage {
    selectorlist(){
            const pageElements = {
                // Dashboard Page
               // My Info Page Elements
    // First Part
      inputFirstName: "[name='firstName']",
      inputMiddleName: "[name='middleName']",
      inputLastName: "[name='lastName']",
    
    // Second Part
      
      inputEmployeeId: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
      inputOtherId: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
      inputDriverLicense: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
      inputLicenseExpiryDate: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    
    // Third Part
      dropdownNationality: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input",
      brazilOption: ':nth-child(27) > span',
      dropdownMaritalStatus: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
      otherOption: '.oxd-select-dropdown > :nth-child(4)',

    
    // Forth Part
      inputDateOfBirth: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
      femaleButton: ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label",
      maleButton: ':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label',
    
    // Five Part
      selectBloodType: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
      Bplus:'.oxd-select-dropdown > :nth-child(4)',
      inputTestField: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    
    // Second Save Elements
      buttonSave:'.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button',
      toastTitleSuccess: ".oxd-text--toast-title",
      toastMessageSuccess: ".oxd-text--toast-message",

    
    

    };

            return pageElements;

    }
        
        fillMyInfo(){
            //First part
            cy.get(this.selectorlist().inputFirstName).click().clear().type("Teste")
            cy.get(this.selectorlist().inputMiddleName).click().clear().type("Cypress")
            cy.get(this.selectorlist().inputLastName).click().clear().type("Teste Cypress")
            //Second part
            cy.get(this.selectorlist().inputEmployeeId).clear().type("123456")
            cy.get(this.selectorlist().inputOtherId).clear().type("123456")
            cy.get(this.selectorlist().inputDriverLicense).clear().type("123456")
            cy.get(this.selectorlist().inputLicenseExpiryDate).clear().type("2021-31-12").click()
            //Third Part 
            cy.get(this.selectorlist().dropdownNationality).click()
            cy.get(this.selectorlist().brazilOption).click()
            cy.get(this.selectorlist().dropdownMaritalStatus).click()
            cy.get(this.selectorlist().otherOption).click()
            //Four Part
            cy.get(this.selectorlist().inputDateOfBirth).click().clear().type('1996-22-11').click()
            cy.get(this.selectorlist().femaleButton).click();
            //Five Part
            cy.get(this.selectorlist().selectBloodType).click()
            cy.get(this.selectorlist().Bplus).click()
            cy.get(this.selectorlist().inputTestField).click().clear().type('666')
            
        

        }

        SaveAndCheck() {
            cy.get(this.selectorlist().buttonSave).click();
            cy.get(this.selectorlist().toastTitleSuccess);
            cy.get(this.selectorlist().toastMessageSuccess);
        }




}

export default infoPage;

    