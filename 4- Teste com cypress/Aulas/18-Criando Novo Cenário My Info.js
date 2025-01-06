//Criar um novo cenário de teste no Cypress para acessar a seção "My Info" do site OrangeHRM e preencher as informações. Supondo que você já tenha configurado a baseUrl e os dados de login, aqui está um exemplo de como você pode fazer isso:

describe('Acessar e preencher My Info no OrangeHRM', () => {
    const loginData = {
        username: 'admin',
        password: 'admin123'
    };

    const myInfoData = {
        firstName: 'John',
        lastName: 'Doe',
        employeeId: '12345',
        otherId: '67890',
        driverLicenseNumber: 'A1234567',
        licenseExpiryDate: '2025-12-31',
        ssnNumber: '123-45-6789',
        sinNumber: '987-65-4321',
        nationality: 'American',
        maritalStatus: 'Single',
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        militaryService: 'None'
    };

    before(() => {
        cy.visit('/web/index.php/auth/login');
        cy.get('input[name="username"]').type(loginData.username);
        cy.get('input[name="password"]').type(loginData.password);
        cy.get('button[type="submit"]').click();
    });

    it('Deve acessar a seção My Info e preencher as informações', () => {
        cy.get('#menu_pim_viewMyDetails').click();

        // Preencher informações pessoais
        cy.get('#personal_txtEmpFirstName').clear().type(myInfoData.firstName);
        cy.get('#personal_txtEmpLastName').clear().type(myInfoData.lastName);
        cy.get('#personal_txtEmployeeId').clear().type(myInfoData.employeeId);
        cy.get('#personal_txtOtherID').clear().type(myInfoData.otherId);
        cy.get('#personal_txtLicenNo').clear().type(myInfoData.driverLicenseNumber);
        cy.get('#personal_txtLicExpDate').clear().type(myInfoData.licenseExpiryDate);
        cy.get('#personal_txtNICNo').clear().type(myInfoData.ssnNumber);
        cy.get('#personal_txtSINNo').clear().type(myInfoData.sinNumber);
        cy.get('#personal_cmbNation').select(myInfoData.nationality);
        cy.get('#personal_cmbMarital').select(myInfoData.maritalStatus);
        cy.get('#personal_DOB').clear().type(myInfoData.dateOfBirth);
        cy.get(`input[name="personal[optGender]"][value="${myInfoData.gender}"]`).check();
        cy.get('#personal_txtMilitarySer').clear().type(myInfoData.militaryService);

        // Salvar as informações
        cy.get('#btnSave').click();
    });
});