/// <reference types ="Cypress" />

describe("Validate webdriveruni homepage links", ()=>{


    it("Confirm link redirects to the correct pages",()=>{
        
        cy.visit("https://webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs
        cy.url().should('include','contactus')

        cy.go('back') // to go back to previous page

        cy.reload()
       // cy.reload(true) // reload without using cache
       cy.url().should('include',"https://webdriveruniversity.com")


       cy.go('forward')
       cy.url().should('include','contactus')

       cy.go('back')
       cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs
       cy.url().should('include','Login-Portal')

       cy.go('back')

       cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
       cy.url().should('include','To-Do-List')

       cy.go('back')

    })

})

