import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/register.page'

describe('My First Test', function() {

    beforeEach(() => {
      cy.visit('/')
      cy.contains('Login').click()
    })
    
    before(() => {
      cy.visit('/')
    })

    it('TC - 01 Register to galery app', function() {
        
    })

})