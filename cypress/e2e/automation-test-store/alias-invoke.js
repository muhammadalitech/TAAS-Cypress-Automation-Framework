/// <reference types ="Cypress" />
// /// <reference types ="Cypress-xpath" />


describe("Alias and Invoke", () => {

    beforeEach("", () => {
        cy.visit("https://www.automationteststore.com/")
    }
    )
    it("Validate a specific hair care product ", () => {

        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')  // using alias will reduce the size of code

        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')   // validating text

    })

    it("Validate the products thumbnail ", () => {
        cy.get(".thumbnail ").as("homePageProducts")


        //cy.get("@homePageProducts").its('length').should('eq',16)
        cy.get("@homePageProducts").should('have.length', 16)
        cy.get("@homePageProducts").find('.productcart').invoke('attr', 'title').should("include", "Add to Cart")  // validate the title of subclass
    })

    it.only("Calculate the total of normal and sale product", () => {
        cy.get(".thumbnail ").as("homePageProducts")

        // cy.get('@homePageProducts').find('.oneprice').each(($el, index, $list)=>{   // to get into class of class  // to iterate to each array entry
        //     cy.log($el.text())
        // })

        cy.get(".thumbnail").find(".oneprice").invoke('text').as('itemPrice')   // to only get items of non sale 
        cy.get(".thumbnail").find(".pricenew").invoke('text').as('saleItemPrice')   // to only get items of sale 
        

        var itemTotal=0;
        cy.get('@itemPrice').then($linkText =>{

            var itemTotalPrice = 0;                 // adding all non sales item
            var itemPrice = $linkText.split('$')   // split when $ appears
            var i;
            for(i=0;i<itemPrice.length;i++){
                cy.log(itemPrice[i])
                itemTotalPrice+= Number(itemPrice[i])
            }
            itemTotal = itemTotalPrice
            cy.log('Non sale price items total : '+ itemTotal)
        })

        cy.get('@saleItemPrice').then($linkText =>{

            var saleItemsPrice = 0;                    // adding all sales item
            var saleItemPrice = $linkText.split('$')
            var i;
            for(i=0;i<saleItemPrice.length;i++){
                cy.log(saleItemPrice[i])
                saleItemsPrice+= Number(saleItemPrice[i])
            }
            itemTotal += saleItemsPrice
            
            cy.log('Sale price items total : '+ saleItemsPrice)
           
        })
        .then(()=>{
            expect(itemTotal).to.equal(660.5)
            cy.log('The total price of all products : '+ itemTotal)
        })

    })


})

