import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'

describe('My First Test', function() {

    // it('Does not do much!', function() {
    //   expect(true).to.equal(true) 
    // })

    // it('Visits the Kitchen Sink', function() {
    //     cy.visit('https://example.cypress.io')
    //     cy.contains('type').click()
    //     cy.url().should('include', '/commands/actions')
    // })
    beforeEach(() => {
      cy.visit('/')
      cy.contains('Login').click()
    })
    
    before(() => {
      cy.visit('/')
    })

    it('TC - 01 Login to galery app', function() {
        authPage.email.type(EMAIL.EXISTING)
        cy.get('input[id="password"]').type(EMAIL.PASSWORD)
        authPage.loginButton.click()
    })

    it('TC - 02 Login to galery app invalid credentials', function() {
      cy.get('input[id="email"]').type('zoomght@gmail.com')
      cy.get('input[id="password"]').type('sifric')
      cy.get('button[type="submit"]').click()
      cy.get('.alert-danger').should('have.text' , 'Bad Credentials')
  })

  it('TC - 03 Login to galery app invalid credentials invalid email', function() {
    cy.get('input[id="email"]').type('sdasdaa@gmail.com')
    cy.get('input[id="password"]').type('sifric')
    cy.get('button[type="submit"]').click()
    cy.get('.alert-danger').should('have.text' , 'Bad Credentials')
  })

  it('TC - 04 Login to galery app invalid credentials empty', function() {
  cy.get('input[id="email"]').type('dsadad@mail.ru')
  cy.get('input[id="password"]').type(' ')
  cy.get('button[type="submit"]').click()
  cy.get('.alert-danger').should('have.text' , 'Bad Credentials')
  })
})
  