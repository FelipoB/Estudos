class loginPage {
    selectorlist()  {
        const pageElements = {
            // Login Page
            inputUsername:      "[name='username']",    // Admin
            inputPassword:      "[name='password']",    // Correct password: admin123
            buttonSubmit:       "[type='submit']",      // Submit button
            alert:              "[role='alert']",       // Error alert
    }

         return pageElements;
    
    }


        acessLogin() {
            cy.visit('/auth/login')
        }

        loginCorrectUser(username, password) {
            cy.get(this.selectorlist().inputUsername).type(username) // username
            cy.get(this.selectorlist().inputPassword).type(password) // Correct password
            cy.get(this.selectorlist().buttonSubmit).click() // Click login
        }

        loginIncorrectUser(username, password) {
            cy.get(this.selectorlist().inputUsername).type(username) // username
            cy.get(this.selectorlist().inputPassword).type(password) // Correct password
            cy.get(this.selectorlist().buttonSubmit).click() // Click login
            cy.get(this.selectorlist().alert) // Return error message 'Invalid credentials'
        }

        
        
}

export default loginPage;