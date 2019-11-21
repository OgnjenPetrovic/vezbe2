import { randomEmail } from "../utils"

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

  register({name, surname, email, password, passConf, checkbox}) {
    // ako je prosledjen uzece taj koji je prosledjen ako nije prosledjen preskocice i ostavice prazno mesto
    name && this.firstName.type(name)
    surname && this.lastName.type(surname)
    email && this.email.type(email)
    password && this.password.type(password)
    passConf && this.passwordConfirm.type(passConf)
    checkbox && this.checkBox.click()
    this.loginButton.click()  
  }

  // Dodelili smo vrednosti automatski pri deklaraciji variable , ako je vrednost prosledjena uzece vrednost ako nije uzece
  // Vrednost iz konstante koja je dodeljena u deklaraciji -> Ako postoji 'name' uzece name ako ne uzece 'default' vrednost
  registerInput({name = 'default', surname = 'default', email,  password = 'sifrica1', passConf = 'sifrica1',checkbox = 'yes'}) {
    if(!email) {
      email = randomEmail()
    }
    this.register({name, surname, email, password, passConf, checkbox})
  }
  
}

export const regPage = new RegPage()
