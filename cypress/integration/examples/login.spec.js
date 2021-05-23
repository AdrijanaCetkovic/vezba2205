const Locators = require("../../fixtures/locators.json");
var faker = require("faker");

import { authLogin } from '../../page_objects/loginObject'

describe('login test', () => {
    it('visit gallery app', () => {
        cy.visit('')
    })
    it('click on login button', () => {
        cy.get(Locators.Navigation.LoginButton).click()
    })
    it('empty email, empty pass', () => {
        cy.get(Locators.Login.Submit).click()
    })
    it('login without email', () => {
        cy.get(Locators.Login.Password).type('as332101')
        cy.get(Locators.Login.Submit).click()
    })
    it('login without password', () => {
        cy.get(Locators.Login.Password).clear()
        cy.get(Locators.Login.Email).type('adrijatik1984@gmail.com')
        cy.get(Locators.Login.Submit).click()
    })
    it('login with wrong password', () => {
        cy.get(Locators.Login.Password).type('aaaaaaaa')
        cy.get(Locators.Login.Submit).click()
    })
    it('login with valid credentials', () => {

        cy.get(Locators.Login.Email).clear().type('adrijatik1984@gmail.com')
        cy.get(Locators.Login.Password).clear().type('as332101')
        cy.get(Locators.Login.Submit).click()
    })
    it('logout', () => {
        cy.get(Locators.Login.LogoutButton).click()
    })

})