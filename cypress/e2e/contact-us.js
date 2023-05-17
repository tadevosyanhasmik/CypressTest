/// <reference types="cypress" />


describe("Contact Us Tests", ()=>{
   it("Check Login or register functionality", ()=>{
        cy.visit("https://automationteststore.com/");

        cy.get("#customer_menu_top > li > a").click()
        cy.get("#loginFrm_loginname").click()
        cy.get('#accountFrm > fieldset > .btn').click()
        cy.get('#AccountFrm_firstname').type("Hasmik")
        cy.get('#AccountFrm_lastname').type("Tadevosyan")
        cy.get('#AccountFrm_email').type("Hasmik99080@gmail.com")
        cy.get('#AccountFrm_address_1').type("Address")
        cy.get('#AccountFrm_city').type("City")
        cy.get('#AccountFrm_country_id').select("Armenia")
        cy.get('#AccountFrm_zone_id').select("Ararat")
        cy.get('#AccountFrm_postcode').type("0722")
        cy.get('#AccountFrm_loginname').type("Hasmik998997")
        cy.get('#AccountFrm_password').type("Test1234")
        cy.get('#AccountFrm_confirm').type("Test1234")
        cy.get('[for="AccountFrm_newsletter1"]').click()
        cy.get('#AccountFrm_agree').click()
        cy.get('.col-md-2 > .btn').click()

        cy.get('.heading1').should("have.text", "\n   Your Account Has Been Created!\n  \n")
    });

    it("Check search bar functionality", ()=>{
        cy.visit("https://automationteststore.com/");

        cy.get('#filter_keyword').type("care")
        cy.get('.button-in-search > .fa').click()

        cy.get('.contentpanel > :nth-child(1)').should("have.text", "Search Criteria");
     })

     it("Check Main menu fuctionality", ()=>{
        cy.visit("https://automationteststore.com/");

        cy.get("#topnav > .form-control").select("Specials")

        cy.get(".maintext").should('have.text', ' Special Offers')
     })
})