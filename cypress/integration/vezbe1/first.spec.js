describe('My First Test', function() {

    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })

    it('Visits the Kitchen Sink', function() {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
    })


    it.only('Login to galery app', function() {
        cy.visit('/')
        cy.contains('Login').click()
        cy.get('input[id="email"]').type('zoomght@gmail.com')
    })
  })
  