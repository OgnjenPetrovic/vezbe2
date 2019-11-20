import { REGISTER } from '../../fixtures/constants'
import { regPage } from '../../page_object/register.page'
import { randomEmail } from '../../utils'
describe('My First Test', function() {

    beforeEach(() => {
      cy.visit('/')
      cy.contains('Register').click()
    })
    
    before(() => {
      cy.visit('/')
    })

    it('TC - 01 Register to galery app', function() {
        regPage.registerCheck({
            // //name: 'Pera',
            // surname: 'Peric', 
            // email: randomEmail(),
            // password: 'sifrica1',
            // passConf: 'sifrica11'
        })
    })
    
    it.only('TC - 01 Register to galery invalid email', function() {
      regPage.registerCheck({ password: 'sdadasda'  })
      // eq funckija se koristi ukoliko postoji vise elemenata iste klase 
      cy.get('.alert-danger').eq(0).contains('The email must be a valid email address.').click()
      cy.get('.alert-danger').eq(1).should('contain', 'The password confirmation does not match.')
    })


    it('TC - 01 Register to galery app invalid name - invalid email', function() {
        regPage.registerCheck(REGISTER)
        // Ovako hvatamo html input validacije
        regPage.email.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })

})