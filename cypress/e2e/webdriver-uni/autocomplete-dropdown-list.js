/// <reference types ="Cypress" />

describe("Verify autocomplete dropdownlist via webdriveruni", () => {

    it("Select specific dropdown list via  autocomplete dropdown lists", () => {
        
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })  // overcome issue of multiple browser tabs

        cy.get("#myInput").type("A")

        // cy.get("#myInputautocomplete-list > *").eq(1)
        // cy.get("#myInputautocomplete-list > *").first()

        cy.get("#myInputautocomplete-list > *").each(($el, index, $list)=>{    // created a selector to select from suggestions
            const prod = $el.text()  // extracted the text using json query
            const prodToSelect = 'Avacado'

            if(prod == prodToSelect){
                //$el.click()
                $el.trigger("click")

                cy.get("#submit-button").click()

                cy.url().should('include',prodToSelect)
            }

        }).then(function( ){
            
            cy.get("#myInput").type("g")
            cy.get("#myInputautocomplete-list > *").each(($el, index, $list)=>{    // created a selector to select from suggestions
                const prod = $el.text()  // extracted the text using json query
                const prodToSelect = 'Grapes'
    
                if(prod == prodToSelect){
                    //$el.click()
                    $el.trigger("click")
                    cy.get("#submit-button").click()
    
                    cy.url().should('include',prodToSelect)
                }
    
            })

        })
        
    })

})