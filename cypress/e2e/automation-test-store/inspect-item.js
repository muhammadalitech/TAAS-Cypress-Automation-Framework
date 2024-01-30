/// <reference types ="Cypress" />
// /// <reference types ="Cypress-xpath" />


describe("Inspect Automation Test Store items using chain of commands", ()=>{

    beforeEach("",()=>{
        cy.visit("https://www.automationteststore.com/")
    }
    )
    it("Click on first item using item header ",()=>{
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()

    })


    it.only("Click on first item using item text ",()=>{
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then( function( itemHeaderText) {
            console.log("Selected the following item: "+ itemHeaderText.text() )  // using non-cypress command we can handle order of execution 
        }); // locate the comman class 
        
    })

    it("Click on first item using index ",()=>{
        
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();  //find prdocutname inside .fixedwrapper
    })
})

