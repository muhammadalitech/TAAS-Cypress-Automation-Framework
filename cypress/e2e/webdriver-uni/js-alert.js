/// <reference types ="Cypress" />

//const cypress = require("cypress")

describe("Handle js alerts  ", ()=>{

    it("Confirm js alert contains the correct text",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs

        cy.get('#button1').click()

        cy.on("window:alert", (str)=>{ // cypress automatically handle alerts but here we are handling it manually
            expect(str).to.equal("I am an alert box!")
        })

    })

    it("Validate js confirm alert box work correctly when clicking ok",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs

        cy.get('#button4').click()
                                 // gives ability to accept or reject the javascript alerts
        cy.on("window:confirm", (str)=>{ // cypress automatically handle alerts but here we are handling it manually
            return true // to press Ok button for false it will press cancel button
        })

        cy.get("#confirm-alert-text").should('contain','OK!')

    })

    it("Validate js confirm alert box work correctly when clicking cancel",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs

        cy.get('#button4').click()

        cy.on("window:confirm", (str)=>{ // cypress automatically handle alerts but here we are handling it manually
            return false // to press Ok button for false it will press cancel button
        })

        cy.get("#confirm-alert-text").should('contain','Cancel!')

    })

    it.only("Validate js confirm alert box using stub",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs


        const stub = cy.stub()
        cy.on("window:confirm", stub)

        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!') // aserting at location 0 of stub
                                        // stub make sure that our javascript alert is called with correct message
        
         }).then(()=>{    // using promises
            return true
         }).then(()=>{
            cy.get("#confirm-alert-text").should('contain','OK!')
         })
         

       
    })

})

