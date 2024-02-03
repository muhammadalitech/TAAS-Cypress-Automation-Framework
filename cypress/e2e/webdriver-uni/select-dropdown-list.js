/// <reference types ="Cypress" />

describe("Interaction with dropdown list via webdriveruni", () => {

    it("Select specific value via  dropdown lists", () => {
        
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })  // overcome issue of multiple browser tabs

    })

})