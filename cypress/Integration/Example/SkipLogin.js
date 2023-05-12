//const neatCSV = require('neat-csv')
import neatCSV from 'neat-csv';
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
    cy.contains('Click To Download Order Details in CSV').click()
    cy.readFile('/Users/manav/Documents/user/cypress/CypressFrameWorkWithGit/cypress/downloads/order-invoice_man.csv')
    .then(async(text) => {
        const csv = await neatCSV(text)
        console.log(csv)
        const actualProductCSV = csv[0]["Product Name"]
        expect(productName).to.equal(actualProductCSV)
    })
})    
})