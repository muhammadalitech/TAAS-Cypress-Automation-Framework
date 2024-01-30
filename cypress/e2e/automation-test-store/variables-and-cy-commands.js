/// <reference types ="Cypress" />
// /// <reference types ="Cypress-xpath" />


describe("Verifying variables, cypress commands and jquery commands", ()=>{

    beforeEach("",()=>{
        cy.visit("https://www.automationteststore.com/")
    }
    )
    it("Navigating to specific product pages ",()=>{
 
        // the following will pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')        
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // makeupLink.click();
        // skincareLink.click();


        //The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // skincareLink.click();
    
        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains('Makeup') .click()
        cy.get("a[href*='product/category&path=']").contains('Skincare').click()

    })


    it("Navigating to specific product pages ",()=>{

        cy.get("a[href*='product/category&path=']").contains('Makeup') .click()

        //Following code will fail
        // const header = cy.get('h1 .maintext') 
        // cy.log(header.text())

        cy.get('h1 .maintext').then(($headerText) =>{  //using promises we can use constant
            const headerText =  $headerText.text()
            cy.log("Found header text: "+ headerText)
            expect(headerText).is.eq('Makeup')
        })
        // cy.get('h1 .maintext').then(function($headerText) {
        //     const headerText =  $headerText.text()
        //     cy.log("Found header text: "+ headerText)
        // })
    })

    it.only("Validate the property of Contact Us page",()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //uses cypress command and chaining 
        cy.contains('#ContactUsFrm', 'Contact Us Form' ).find('#field_11').should('contain', 'First name:')

        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form' ).then( text=>{
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name:')

        // Embedded commands (Closure)
        cy.get('#field_11').then( fnText =>{
            cy.log( fnText.text() )
            cy.log( fnText )
            
        })

        })

    })
})

