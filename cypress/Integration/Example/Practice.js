/// <reference types="Cypress" />


import 'cypress-iframe'

describe('practice website',()=>{
    it('test case',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').click()
        cy.get('#autocomplete').type('ind')
        cy.get('li[class*="ui-menu-item"]').each(($el,index,$list)=>{
            const contryName = $el.text().trim()
           if(contryName === 'India'){
            cy.wrap($el).click()
           }
        })
        cy.get('select').select('Option2')
        cy.get('#checkBoxOption1').check()
       // cy.get('#openwindow').click()
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(3000)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>
            {
                expect(str).to.equal('Hello , share this practice page and share your knowledge')
            })
            cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
                const text=$e1.text()
                if(text.includes("Python"))
                {
                    cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                    {
                     const priceText = price.text()
                     expect(priceText).to.equal('25')
                    })
                }    
            })
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        cy.get('iframe')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()   

    })
})