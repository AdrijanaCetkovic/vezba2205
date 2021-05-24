var helper = require('../../support/helper');
const locators = require('../../fixtures/locators.json')
import { authLogin } from '../../page_objects/loginObject'
import { createImg } from '../../page_objects/createPage'
import { navigation } from '../../page_objects/navigation'
import { getNCharactersLetters } from '../../support/helper';
describe('login and create gallery', () => {
    before(() => {
        cy.visit('/')
    })
    it('click login button', () => {
        navigation.clickLogin()
    })
    it('Login form', () => {
        authLogin.login('adrijatik1984@gmail.com', 'as332101')
    })
    it('click create gallery', () => {

            navigation.clickCreateGallery()
        })
        //it('fill in fields', () => {
        //   createImg.create('JS', 'https://blog.logrocket.com/wp-content/uploads/2021/03/javascript-php-developers.png')
        //})
    it('negativ-invalid format of image', () => {
        createImg.create('invalid format', 'https: //office.live.com/start/word.aspx')
    })
    it('negativ-without image', () => {
        cy.get('#title').clear()
        cy.get('.input-group > .form-control').clear()
        createImg.create('without image', ' ')
    })
    it('negativ-title with one character', () => {
        cy.get('#title').clear()
        cy.get('.input-group > .form-control').clear()
        createImg.create('1', 'https://trznicentar9402.com/2755-large_default/slika-za-dekoraciju-tema-flamingo-022.jpg')
    })
    it('negativ-space in title', () => {
        cy.get('#title').clear()
        cy.get('.input-group > .form-control').clear()
        createImg.create(' ', 'https://trznicentar9402.com/2755-large_default/slika-za-dekoraciju-tema-flamingo-022.jpg')
    })


})