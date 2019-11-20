import { EMAIL } from '../../fixtures/constants'
import { authPage, regPage } from '../../page_object/register.page'

describe('My First Test', function() {

    beforeEach(() => {
      cy.visit('/')
      cy.contains('Register').click()
    })
    
    before(() => {
      cy.visit('/')
    })

    it('TC - 01 Register to galery app', function() {
        regPage.register({
            name: 'Pera',
            surname: 'Peric', 
            email: 'pera@gmail.com',
            password: 'sifrica1',
            passConf: 'sifrica1'
        })
    })

})