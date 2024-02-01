/// <reference types ="Cypress" />

//const cypress = require("cypress")

describe("Test Conact us form via WebDriverUni", ()=>{

    beforeEach("",()=>{
        //cy.visit("https://webdriveruniversity.com")
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    }
    )
    it("Should be able to submit a successful submission via contact us form ",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs

        cy.document().should('have.property', 'charset').and('equal', 'UTF-8') // to validate document have specific properties 
        cy.title().should('include', 'WebDriver | Contact Us') // to valide document title 
        cy.url().should('include', 'contactus')  // validate the document url using include as it does not need full text

        cy.get('[name="first_name"]').type("Omer")
        cy.get('[name="last_name"]').type("Irfan")
        cy.get('[name="email"]').type("oi@g.com")
        //cy.get('[name="email"]').should('have.attr','name','email')

        cy.get('textarea.feedback-input').type("running successfully. Yay!!!")
        //cy.get('textarea.feedback-input').should('have.attr','name','message')
        cy.get('[type="submit"]').click()

        //cy.location("pathname").should("equal", "/Contact-Us/contact-form-thank-you.html")
        cy.get('h1').should('have.text', 'Thank You for your Message!')


    })

    it("Should Not be able to submit a successful submission via contact us form as all fields are required",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})

        cy.get('[name="first_name"]').type("Omer")
        cy.get('[name="last_name"]').type("Irfan")
        //cy.get('[name="email"]').type("oi@g.com")
        cy.get('textarea.feedback-input').type("running successfully. Yay!!!")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')

        //cy.location("pathname").should("equal","/Contact-Us/contact_us.php")
    })

    // it("Checking different browser ",()=>{

    //     if(Cypress.isBrowser('firefox')){    // if it is firefox browser then run this test else it will not be run if it is not firefox

    //     }
    //     else{
    //         cy.visit("https://webdriveruniversity.com")
    //     }
    // })
})

