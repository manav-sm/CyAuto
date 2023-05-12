
describe("first test",function(){
  
it("first tc",function(){

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
    cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        },
        {
            statusCode : 200,
            body : [{
                "book_name" : "null",
                "isbn" : "SPY40",
                "aisle" :"2529857"
        }]
    }).as('bookAPI')
    cy.get('.btn.btn-primary').click()
    cy.wait('@bookAPI').then(({request,response}) => {
        cy.get('tr').should('have.length',response.body.length+1)
        
    })

})
})