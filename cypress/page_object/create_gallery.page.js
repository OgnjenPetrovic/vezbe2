
export default class GalleryPage {
  get title() {
    return cy.get('#title')
  }

  get description() {
    return cy.get('#description')
  }

  get picture() {
    return cy.get('input[type="url"]')
  }

  get addImageButton() {
    return cy.contains('Add image')
  }

  get submitButton() {
    return cy.get('.btn-custom').contains('Submit')
  }

  get cancelButton() {
    return cy.get('.btn-custom').contains('Cancel')
  }


  login(mejl, sifra) {
    this.email.type(mejl)
    this.password.type(sifra)
    this.loginButton.click()
  }
}

export const galleryPage = new GalleryPage()
