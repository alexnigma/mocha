describe(`Parametrized HW 16.05.2023`, () => {

    before(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get(`[src="assets/images/material-dark-theme.jpg"]`).click();
        cy.get(`[title="Forms"]`).click();
        cy.get(`[title="Form Layouts"]`).click();
    })
    const inlineForm = (testName, expectedResultName, testEmail, expectedResultEmail) =>

        function () {
            cy.get(`[placeholder="Jane Doe"]`).type(`${testName}`);
            cy.get(`[placeholder="Jane Doe"]`).should(`contain.value`, `${expectedResultName}`);
            cy.get(`[placeholder="Email"]`).first().type(`${testEmail}`);
            cy.get(`[placeholder="Email"]`).first().should(`contain.value`, `${expectedResultEmail}`);
            cy.get(`.custom-checkbox`).first().click();
            cy.get(`[type="submit"]`).first().click();
        }

    it (`Inline form test`, inlineForm(`CYPRESS`, `CYPRESS`, `email@email.com`, `email@email.com` ));

})