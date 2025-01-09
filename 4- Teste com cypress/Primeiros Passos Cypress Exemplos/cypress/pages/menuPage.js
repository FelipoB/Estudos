class menuPage {
    selectorlist(){
            const pageElements = {
                // Menu Page 
                InputSearch:"[placeholder='Search']",
                AdminButton:"[href='/web/index.php/admin/viewAdminModule']",
                PIMbutton:"[href='/web/index.php/pim/viewPimModule']",
                LeaveButton:"[href='/web/index.php/leave/viewLeaveModule']",
                TimeButton:"[href='/web/index.php/time/viewTimeModule']",
                RecruitmentButton:"[href='/web/index.php/recruitment/viewRecruitmentModule']",
                buttonMyInfo:"[href='/web/index.php/pim/viewMyDetails']",
                PerformaceButton:"[href='/web/index.php/performance/viewPerformanceModule']",
                DashboardButton:"[href='/web/index.php/dashboard/index']",
                DirectoryButton:"[href='/web/index.php/directory/viewDirectory']",
                MaintenanceButton:"[href='/web/index.php/maintenance/viewMaintenanceModule']",
                ClaimButton:"[href='/web/index.php/claim/viewClaimModule']",
                BuzzButton:"[href='/web/index.php/buzz/viewBuzz']"
            }

            return pageElements;
    
            }
            clickMyinfoButton() {
                cy.get(this.selectorlist().buttonMyInfo).click()
            }
                

}

export default menuPage

