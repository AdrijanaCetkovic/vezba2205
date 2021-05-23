const locators = require('../../fixtures/locators.json');
var helper = require('../../support/helper');
var faker = require('faker');


describe('register', () => {
    beforeEach(function() {
        cy.visit('')
        cy.get(':nth-child(2) > .nav-link').click()

    })
    it('click register button', () => {
        cy.get(':nth-child(2) > .nav-link').click()
    })
    it('all empty fields', () => {
        cy.get(locators.Register.Submit).click()
    })
    it('all spaces', () => {
        cy.get(locators.Register.FirstName).type(' ')
        cy.get(locators.Register.LastName).type(' ')
        cy.get(locators.Register.Email).type(' ')
        cy.get(locators.Register.Password).type(' ')
        cy.get(locators.Register.PassConfirmed).type(' ')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()
    })
    it('maximum characters on first and last name', () => {
        cy.get(locators.Register.FirstName).clear().type(helper.getNCharactersLetters(256))
        cy.get(locators.Register.LastName).clear().type(helper.getNCharactersLetters(256))
        cy.get(locators.Register.Email).clear().type('aaaaaa@gmail.com')
        cy.get(locators.Register.Password).clear().type('adad333222')
        cy.get(locators.Register.PassConfirmed).clear().type('adad333222')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()
    })
    it('wrong email-without @', () => {
        cy.get(locators.Register.FirstName).clear().type('ssssssss')
        cy.get(locators.Register.LastName).clear().type('ssssaaaa')
        cy.get(locators.Register.Email).clear().type('aaaaaagmail.com')
        cy.get(locators.Register.Password).clear().type('adad333222')
        cy.get(locators.Register.PassConfirmed).clear().type('adad333222')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()
    })
    it('wrong email-without .', () => {
        cy.get(locators.Register.FirstName).clear().type('ssssssss')
        cy.get(locators.Register.LastName).clear().type('ssssaaaa')
        cy.get(locators.Register.Email).clear().type('aaaaaa@gmailcom')
        cy.get(locators.Register.Password).clear().type('adad333222')
        cy.get(locators.Register.PassConfirmed).clear().type('adad333222')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()
    })
    it('confirmet pasword does not match', () => {
        cy.get(locators.Register.FirstName).clear().type('ssssssss')
        cy.get(locators.Register.LastName).clear().type('ssssaaaa')
        cy.get(locators.Register.Email).clear().type('aaaaaa@gmail.com')
        cy.get(locators.Register.Password).clear().type('adad333222')
        cy.get(locators.Register.PassConfirmed).clear().type('adad33322a')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()
    })
    it('password less than 8 characters', () => {
        cy.get(locators.Register.FirstName).clear().type('ssssssss')
        cy.get(locators.Register.LastName).clear().type('ssssaaaa')
        cy.get(locators.Register.Email).clear().type('aaaaaa@gmail.com')
        cy.get(locators.Register.Password).clear().type('1asa')
        cy.get(locators.Register.PassConfirmed).clear().type('1asa')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()
    })
    it('password only letters', () => {
        cy.get(locators.Register.FirstName).clear().type('ssssssss')
        cy.get(locators.Register.LastName).clear().type('ssssaaaa')
        cy.get(locators.Register.Email).clear().type('aaaaaa@gmail.com')
        cy.get(locators.Register.Password).clear().type('aaaaaaaa')
        cy.get(locators.Register.PassConfirmed).clear().type('aaaaaaaa')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()
    })
    it('password only numbers', () => {
        cy.get(locators.Register.FirstName).clear().type('ssssssss')
        cy.get(locators.Register.LastName).clear().type('ssssaaaa')
        cy.get(locators.Register.Email).clear().type('aaaaaa@gmail.com')
        cy.get(locators.Register.Password).clear().type('11111111')
        cy.get(locators.Register.PassConfirmed).clear().type('11111111')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()
    })
    it('min characters on first and last name', () => {
        cy.get(locators.Register.FirstName).clear().type(helper.getNCharactersLetters(1))
        cy.get(locators.Register.LastName).clear().type(helper.getNCharactersLetters(1))
        cy.get(locators.Register.Email).clear().type('aaaaaa@gmail.com')
        cy.get(locators.Register.Password).clear().type('adad333222')
        cy.get(locators.Register.PassConfirmed).clear().type('adad333222')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()
    })
    it('existing email', () => {
        cy.get(locators.Register.FirstName).clear().type('ana')
        cy.get(locators.Register.LastName).clear().type('petrovic')
        cy.get(locators.Register.Email).clear().type('aaaaaa@gmail.com')
        cy.get(locators.Register.Password).clear().type('adad333222')
        cy.get(locators.Register.PassConfirmed).clear().type('adad333222')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()

    })
    it('smoke test', () => {
        var email = "xyzaaa" + Math.floor(Math.random() * 10000) + "@gmail.com";
        cy.get(locators.Register.FirstName).clear().type('ana')
        cy.get(locators.Register.LastName).clear().type('petrovic')
        cy.get(locators.Register.Email).clear().type(email)
        cy.get(locators.Register.Password).clear().type('adad333222')
        cy.get(locators.Register.PassConfirmed).clear().type('adad333222')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()

    })
    it('space on the end password field', () => {
        var email = "xyzaaa" + Math.floor(Math.random() * 10000) + "@gmail.com";
        cy.get(locators.Register.FirstName).clear().type('ana')
        cy.get(locators.Register.LastName).clear().type('petrovic')
        cy.get(locators.Register.Email).clear().type(email)
        cy.get(locators.Register.Password).clear().type('adad333222 ')
        cy.get(locators.Register.PassConfirmed).clear().type('adad333222 ')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()

    })
    it('unicode character', () => {
        var email = "xyzaaa" + Math.floor(Math.random() * 10000) + "@gmail.com";
        cy.get(locators.Register.FirstName).clear().type('мачка')
        cy.get(locators.Register.LastName).clear().type('мачкић')
        cy.get(locators.Register.Email).clear().type(email)
        cy.get(locators.Register.Password).clear().type('adad333222 ')
        cy.get(locators.Register.PassConfirmed).clear().type('adad333222 ')
        cy.get(locators.Register.Check).check()
        cy.get(locators.Register.Submit).click()

    })

})