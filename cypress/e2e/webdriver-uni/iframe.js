/// <reference types ="Cypress" />

describe("Handling IFrame and Modals", ()=>{

    it("Handle webdriveruni IFrame and modal",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs

        cy.get('#frame').then($iframe=>{
            
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')  // we wrapped the contsant and then alias it so that we can apply cypress commands on it

        })

        cy.get('@iframe').find("#button-find-out-more").click()   // since it is wrapped then we can use this cypress commands

        cy.get('@iframe').find('#myModal').as('modal')
        
        cy.get('@modal').should(($expectedText)=>{
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as')
        })


        cy.get('@modal').contains("Close").click()

    })



    // it("Dynamic Dropdown 2", ()=>{
    //     cy.visit("https://www.google.com/")
    //     cy.get ("#APjFqb").type("cypress automation") // searching
    //     //capture all options
    //     //count total number of options
    //     cy.get(".wM6W7d> span").each(($el ,index , $list)=>{
    //         $el.text().includes("cypress automation tutorial")
    //         if($el.text().includes("cypress automation tutorial"))
    //         {
    //             cy.wrap($el).click()
 
    //         }
    //     })
 
    //  })

})

