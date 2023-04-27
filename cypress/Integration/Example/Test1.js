import homePage from "../../pageObject/homePage"

describe("test framework",function()
{
    before(function(){
        cy.fixture('example').then(function(data){
this.data = data            
        })
    })

it("test cases",function()
{
    var sum = 0
    const hm = new homePage()
    cy.visit(Cypress.env('url')+"/angularpractice/")
    hm.userName().type(this.data.name)
    hm.userEmail().type(this.data.email)
    hm.productSelection().select(this.data.gender)
    hm.userName().should('have.attr','minlength','2')
    hm.enterprenuerRedioBtnLoc().should('be.disabled')
    hm.shopBtnLoc().click()
    this.data.productSelection.forEach(function(element) {
        cy.productSelection(element)
    });
    cy.get('.nav-link.btn.btn-primary').click()
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => {
        var productPrice = $el.text().split(" ")[1].trim()
        cy.log(Number(productPrice))
        sum = sum + Number(productPrice)
    }).then(function(){
        cy.log(sum)
    })
    cy.get('h3 > strong').then(function(element){
        const total = element.text().split(" ")[1].trim()
        expect(sum).to.equal(Number(total))
    })
    cy.get('button[class="btn btn-success"]').click()
    cy.get('#country').type("india")
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[value="Purchase1"]').click()
    cy.get('.alert').then(function(element){
        expect(element.text().includes("Success")).to.be.true
    })
})

})