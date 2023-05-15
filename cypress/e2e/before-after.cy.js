describe (`Before`, () => {

    before(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get(`[src="assets/images/material-dark-theme.jpg"]`).click();
        cy.get(`[title="Forms"]`).click();
        cy.get(`[title="Form Layouts"]`).click();
    })

    it('Test 1', () => {
        cy.get(`[placeholder="Jane Doe"]`).type(`Hello`);
    })

    it('Test 2', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    })
})


describe (`before each`, () => {

    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get(`[src="assets/images/material-dark-theme.jpg"]`).click();
        cy.get(`[title="Forms"]`).click();
        cy.get(`[title="Form Layouts"]`).click();
    })

    it('Test 1', () => {
        cy.get(`[placeholder="Jane Doe"]`).type(`Hello`);
    })

    it('Test 2', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    })
})


describe (`after`, () => {

    after(() => {
       cy.log(`hello`)
    })

    it('Test 1', () => {
        cy.get(`[placeholder="Jane Doe"]`).type(`Hello`);
    })

    it('Test 2', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    })
})


describe.only (`after each`, () => {

    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get(`[src="assets/images/material-dark-theme.jpg"]`).click();
        cy.get(`[title="Forms"]`).click();
        cy.get(`[title="Form Layouts"]`).click();
    })

    afterEach(() =>{
        cy.log(`afterEach`)
    })

    it('Test 1', () => {
        cy.get(`[placeholder="Jane Doe"]`).type(`Hello`);
    })

    it('Test 2', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    })
})


it.only('Test 1', {retries: 2}, () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get(`[src="assets/images/material-dark-theme.jpg1"]`).click();
    cy.get(`[title="Forms"]`).click();
    cy.get(`[title="Form Layouts"]`).click();
    cy.get(`[placeholder="Jane Doe"]`).type(`Hello`);
})