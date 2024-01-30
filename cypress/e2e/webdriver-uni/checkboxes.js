/// <reference types ="Cypress" />

describe("Verify checkboxes via webdriveruni", ()=>{

    it("Check and validate checkbox", ()=>{
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs

        //cy.get('#checkboxes > :nth-child(1) > input').check()   
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')  // verify first checkbox to be checked
        
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
       // cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')
        
    })

    it("UnCheck and validate checkbox", ()=>{
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs

        cy.get('#checkboxes > :nth-child(5) > input').as('option-3')
        //cy.get('@option-3').uncheck()
        cy.get('@option-3').uncheck().should('not.be.checked')  // verify third checkbox to be unchecked
        
    })

    it.only("Check multiple checkboxes", ()=>{
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs

        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"])   // checking multiple checkboxes at one time 

        cy.get("input[type='checkbox']").check().should("be.checked")  // verify all checkboxes to be checked


        
    })
})