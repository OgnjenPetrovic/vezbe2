const buttonsLocator = '.ca-c-button'

export default class AuthPage {
  get email() {
    return cy.get('input[id="email"]')
  }

  get password() {
    return cy.get('input[placeholder="Password"]')
  }

  get loginButton() {
    return cy.get('button[type="submit"]')
  }

//   login(email, password) {
//     this.email.type(email)
//     this.password.type(password)
//     this.loginButton.click()
//   }
}

export const authPage = new AuthPage()
