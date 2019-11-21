import { REGISTER } from '../../fixtures/constants'
import { regPage } from '../../page_object/register.page'


describe('My First Test', function() {

    beforeEach(() => {
      cy.visit('/')
      cy.contains('Register').click()
    })
    
    before(() => {
      cy.visit('/')
    })

    it('TC - 01 Register to galery app - trigger validation on last name because we input name', function() {
        regPage.register({
            name: 'Pera',
            // surname: 'Peric', 
            // email: randomEmail(),
            // password: 'sifrica1',
            // passConf: 'sifrica11'
            checkbox: 'yes'
        })
        regPage.lastName.then(($input) => {
          expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
    })
    
    it('TC - 02 Register to galery invalid password , invalid email format - all other filds prefield', function() {
      regPage.registerInput({ password: 'sdadasda55', checkbox: 'yes',email: 'invalid@msi'  })
      // eq funckija se koristi ukoliko postoji vise elemenata iste klase 
      // ako se contains nalazi na zadnjem mestu automatski radi kao asertacija 
      cy.get('.alert-danger').eq(0).contains('The email must be a valid email address.') 
      // should ne mozemo cejnovati i to nam je konacna asertacija
      cy.get('.alert-danger').eq(1).should('contain', 'The password confirmation does not match.')
    })


    it('TC - 03 Register to galery app  - invalid email', function() {
      // Ovde mozemo koristiti register iz konstanti da bi uneli celokupan objekat iz konstanti i proveriti konkretnu stvar
      regPage.registerInput(REGISTER)
      // Ovako hvatamo html input validacije
      regPage.email.then(($input) => {
          expect($input[0].validationMessage).to.eq('Please include an \'@\' in the email address. \'test\' is missing an \'@\'.')
      })
    })
})