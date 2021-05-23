class Navigation {
    get login() {
        return cy.get('a[href="/login"]')
    }
    get udjiUCreateGalley() {
        return cy.get("a[href='/create']")
    }
    clickLogin() {
        this.login.click()
    }
    clickCreateGallery() {
        this.udjiUCreateGalley.click()
    }
}
export const navigation = new Navigation