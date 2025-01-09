class DashboardPage {
    selectorlist(){
            const pageElements = {
                // Dashboard Page
                headerTitle:'.oxd-topbar-header-breadcrumb-module', // Page title
                entiredashboardPage:'.orangehrm-dashboard-grid',// Entire dashboard page
                buttonMyInfo:"[href='/web/index.php/pim/viewMyDetails']",
            }

            return pageElements;
    
    }

        VerifyDashboardPage(){
            cy.get(this.selectorlist().headerTitle).should('contain', 'Dashboard')
            cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // System returns dashboard page
            cy.get(this.selectorlist().entiredashboardPage).should('be.visible') // System returns dashboard page title
    }
        clickMyInfo(){
            cy.get(this.selectorlist().buttonMyInfo).click() // Click My Info

}}

export default DashboardPage;