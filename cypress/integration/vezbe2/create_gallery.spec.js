import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'
import { galleryPage } from '../../page_object/create_gallery.page'
describe('My First Test', function() {

    beforeEach(() => {
      cy.visit('/login')
      authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
    })
    
   
    it('TC - 01 My gallery page - pagination', function() {
      cy.get('.cell').eq(9).should('exist')
      cy.get('.cell').eq(10).should('not.exist')
      cy.get('.btn-custom').click()
      // Nikad ne koristiti eksplicitan wait u milisekundama kao ispod
      cy.wait(1000)
      cy.get('.cell').eq(19).should('exist')
      cy.get('.cell').eq(20).should('not.exist')
    })

    it('TC - 02 My gallery page - pagination - 2 nacin', function() {
        cy.get('div.grid').children().should('have.length', 10)
        cy.contains('Load More').click()
        cy.get('div.grid').children().should('have.length', 20)
      })

    it('TC - 03 Create gallery positive case', function() {
        cy.contains('Create Gallery').click()
        galleryPage.title.type('This is the title')
        galleryPage.description.type('This is a valid descriotion')
        galleryPage.picture.type('https://html.com/wp-content/uploads/flamingo.jpg')
        galleryPage.submitButton.click()
        cy.get('.box-title').eq(0).should('contain', 'This is the title')
    })

    it.only('TC - 04 Create gallery positive case', function() {
        cy.contains('Create Gallery').click()
        galleryPage.title.type('This is the title')
        galleryPage.description.type('This is a valid descriotion')
        galleryPage.picture.type('https://html.com/wp-content/uploads/flamingo.jpg')
        galleryPage.addImageButton.click()
        galleryPage.picture.eq(1).should('exist')
        cy.get('.fa-trash').eq(1).click()
        galleryPage.picture.eq(1).should('not.exist')
        cy.get('.fa-chevron-circle-up').eq(0).click()
    })

})