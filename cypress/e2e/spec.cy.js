describe (`Positive test suite`, () => {
  it('Test 1', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test 2', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test 3', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test 4', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test 5', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe (`Negative test suite`, () => {
  it('Test 1', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test 2', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test 3', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test 4', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test 5', () => {
    cy.visit('https://example.cypress.io')
  })

    describe (`Negative test suite 2`, () => {
      it('Test 1', () => {
        cy.visit('https://example.cypress.io')
      })

      it('Test 2', () => {
        cy.visit('https://example.cypress.io')
      })

      it('Test 3', () => {
        cy.visit('https://example.cypress.io')
      })

      it('Test 4', () => {
        cy.visit('https://example.cypress.io')
      })

      it.only('Test 5', () => {
        cy.visit('https://example.cypress.io')
      })
  })
})

