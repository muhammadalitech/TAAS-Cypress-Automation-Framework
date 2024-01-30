/// <reference types ="Cypress" />

describe("Selector Examples", ()=>{

    beforeEach("",()=>{
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    }
    )
    it("Examples of Selectors via WebDriverUni Contact Us Page",()=>{
        //by tag name
        cy.get('input')

        //by attributes 
        cy.get("input[name='first_name']")

        // by id
        cy.get("#contact_me")

        //by class
        cy.get(".feedback-input")

        //by multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        //by two different attributes
        cy.get("[name='email'][placeholder='Email Address']")

        //by xpath
        cy.xpath("//input[@name='first_name']")
    })
//57
})

