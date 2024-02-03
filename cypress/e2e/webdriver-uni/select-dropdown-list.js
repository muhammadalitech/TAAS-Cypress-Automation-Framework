/// <reference types ="Cypress" />

describe("Interaction with dropdown list via webdriveruni", () => {

    it("Select specific value via  dropdown lists", () => {
        
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })  // overcome issue of multiple browser tabs

        cy.get("#dropdowm-menu-1").select('c#')
        cy.get("#dropdowm-menu-2").select('testng').should('have.value','testng')
        cy.get("#dropdowm-menu-3").select('jquery').contains('JQuery')
        
        
        cy.get("#dropdowm-menu-2").select('maven').should('have.value','maven') //asertion based on value
        cy.get("#dropdowm-menu-2").select('testng').contains('TestNG')           // assertion based on text


        cy.get("#fruit-selects").select('apple').contains("Apple")
        cy.get("#fruit-selects").select('apple').should('have.value','apple')
        
    })

})