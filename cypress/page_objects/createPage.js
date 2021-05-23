class CreateImg {
    get imgName() {
        return cy.get('input[id="title"]')
    }
    get imgUrl() {
        return cy.get('.input-group.mb-3 > .form-control')
    }
    get submitBtn() {
        return cy.get('form > button:nth-of-type(1)')
    }
    create(imeSlike, urlSlike) {
        this.imgName.type(imeSlike)
        this.imgUrl.type(urlSlike)
        this.submitBtn.click()
    }
}
export const createImg = new CreateImg()