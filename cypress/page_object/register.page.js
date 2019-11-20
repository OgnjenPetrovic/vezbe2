
export default class RegPage {
  get firstName() {
    return cy.get('#first-name')
  }

  get lastName() {
    return cy.get('#last-name')
  }

  get email() {
    return cy.get('#email')
  }

  get password() {
    return cy.get('#password')
  }

  get passwordConfirm() {
    return cy.get('#password-confirmation')
  }

  get checkBox() {
    return cy.get('.form-check-input')
  }

  get loginButton() {
    return cy.get('button[type="submit"]')
  }

  register({name, surname, email, password, passConf}) {
    this.firstName.type(this.ifExist(name))
    this.lastName.type(this.ifExist(surname))
    this.email.type(this.ifExist(email))
    this.password.type(this.ifExist(password))
    this.passwordConfirm.type(this.ifExist(passConf))
    this.loginButton.click()
  }

  ifExist(postoji) {
    if (!postoji) {
      postoji = 'validdata@gmail'
    } return postoji
  }

  registerCheck({name, surname, email, password, passConf}) {
    this.checkBox.click()
    this.register({name, surname, email, password, passConf})
  }
  
}

export const regPage = new RegPage()
