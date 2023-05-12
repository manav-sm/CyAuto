const excelToJson = require('convert-excel-to-json');
let productName = 'adidas original';

describe('test suite',() =>
{
it('tc',async() => {

    cy.LoginAPI().then(function(){
    cy.visit('https://rahulshettyacademy.com/client',{
        onBeforeLoad : function(window){
           window.localStorage.setItem('token',Cypress.env('tocken'))
            }
        })
    })
    cy.get('.card-body button:last-child').eq(1).click()
    cy.get('button[routerlink*="cart"]').click()
    cy.contains('Checkout').click()
    cy.get('input[placeholder="Select Country"]').type('ind')
    cy.get('.ta-results button').each(($el,index,$list) => {
        console.log($el.text);
        const countryName = $el.text().trim()
        if (countryName === 'India')
        {
            cy.wrap($el).click()
        }
    })
    cy.contains('Place Order').click()
    cy.wait(2000)
    cy.contains('Click To Download Order Details in Excel').click()
    cy.task('excelToJsonConverter','cypress/downloads/order-invoice_man.xlsx').then(function(result){
        cy.log(result.data[1].A)
        expect(productName).to.equal(result.data[1].B)
    })
    })
})