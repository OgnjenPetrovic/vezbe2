
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
    this.firstName.type(name)
    this.lastName.type(surname)
    this.email.type(email)
    this.password.type(password)
    this.passwordConfirm.type(passConf)
    this.checkBox.click()
    this.loginButton.click()
  }
}

export const regPage = new RegPage()
