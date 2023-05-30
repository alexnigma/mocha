describe(`Parametrized HW 23.05.2023`, () => {

    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get(`[src="assets/images/material-dark-theme.jpg"]`).click();
        cy.get(`[title="Modal & Overlays"]`).click();
        cy.get(`[title="Toastr"]`).click();
    })
    const toast = ( toastPosition, expectedPosition, title, expectedTitle, content, expectedContent, timeToHide, toastType, expectedPic, expectedColor ) =>

        function () {
            cy.get(`.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button`, {timeout: 10000}).click()
            cy.get(`[ng-reflect-value]`).contains(`${toastPosition}`).click()
            cy.get(`.row > :nth-child(1) > :nth-child(2) > .size-medium`).clear().type(`${title}`)
            cy.get(`form.ng-pristine > .form-group > .size-medium`).clear().type(`${content}`)
            cy.get(`.row > :nth-child(1) > :nth-child(4) > .size-medium`).clear().type(`${timeToHide}`)
            cy.get(`:nth-child(2) > .form-group > .mat-ripple > .select-button`).click()
            cy.get(`[ng-reflect-value]`).contains(`${toastType}`).click()
            cy.get(`nb-card-footer > .status-basic`).click()

            cy.get(`[class="title subtitle"]`).should(`contain`, `${expectedTitle}`)
            cy.get(`[class="message"]`).should(`contain`, `${expectedContent}`)
            cy.get(`.ng-tns-c209-54 > .icon-container`).should(`contain.html`, `${expectedPic}`)
            cy.get(`nb-toastr-container.ng-tns-c209-54 > .ng-tns-c209-54`).should(`have.css`, `background-color`).and("eq", `${expectedColor}`)
            cy.get(`.toastr-overlay-container.cdk-global-overlay-wrapper`).should(`have.attr`, `style`).and(`eq`, `${expectedPosition}`)
        }


    it (`Top Left Danger`, toast(`top-left`, `justify-content: flex-start; align-items: flex-start;`, `OMG I'm toast!`, `OMG I'm toast!`, `Help me please!!!`, `Help me please!!!`, `10000`, `danger`, `flash`, `rgb(176, 0, 32)`));
    it (`Top Right Success`, toast(`top-right`, `justify-content: flex-end; align-items: flex-start;`, `OMG I'm toast!`, `OMG I'm toast!`, `Help me please!!!`, `Help me please!!!`, `10000`, `success`,`checkmark`, `rgb(96, 175, 32)`));
    it (`Bottom Left Warning`, toast(`bottom-left`, `justify-content: flex-start; align-items: flex-end;`, `OMG I'm toast!`, `OMG I'm toast!`, `Help me please!!!`, `Help me please!!!`, `10000`, `warning`,`alert-triangle`, `rgb(255, 159, 5)`));
    it (`Bottom Right Info`, toast(`bottom-right`, `justify-content: flex-end; align-items: flex-end;`, `OMG I'm toast!`, `OMG I'm toast!`, `Help me please!!!`, `Help me please!!!`, `10000`, `info`,`question-mark`, `rgb(4, 149, 238)`));

})