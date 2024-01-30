/// <reference types ="Cypress" />
// /// <reference types ="Cypress-xpath" />


describe("Iterate over elementss", ()=>{

    beforeEach("",()=>{
        cy.visit("https://www.automationteststore.com/")
    }
    )
    it("Log information over elements ",()=>{

        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list)=>{   // to get into class of class  // to iterate to each array entry
            cy.log("Index : "+ index + ": " + $el.text() )

        })
    })


    it.only("Add specific product to the basket",()=>{

        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list)=>{   // to get into class of class  // to iterate to each array entry
          
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click()   // to use cypress command not JQuery one
            }
        })
    })

})

