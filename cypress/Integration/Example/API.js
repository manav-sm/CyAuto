
describe("first test",function(){
  
    it("first tc",function(){
    
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',
        {
        "name":"Learn Appium Automation with Java",
        "isbn":"bcd",
        "aisle":"227",
        "author":"John foe"
        })
    
    })
    })