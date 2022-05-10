describe('JobJab', () => {
  it('End to End Test - JobJab Application', () => {
    cy.wait(60000)
    cy.visit('/signin')
    cy.get('[data-test="email"]').type('applicant2@gmail.com')
    cy.get('[data-test="password"]').type(`123456`)
    cy.get('button[type=submit]').click()
    cy.wait(1000)

    cy.get('[data-test="go-profile"]').click()

    cy.wait(1000)
    cy.get('[data-test="fullname-input"]').should('have.value', 'Applicant 2')
    cy.get('[data-test="email-input"]').should(
      'have.value',
      'applicant2@gmail.com'
    )
    cy.get('[data-test="phone-input"]').should('have.value', '099999999')
    cy.get('[data-test="education-input"]').should(
      'have.value',
      "King Mongkut's Institute of Technology Ladkrabang"
    )
    cy.get('button[type=submit]').click()

    cy.visit('/search')
    cy.wait(2000)
    cy.get('[data-test="search-input"]').type('Project Manager')
    cy.wait(2000)
    cy.contains('Project Manager').click()
    cy.wait(2000)
    cy.contains('Apply').click()
  })
})
