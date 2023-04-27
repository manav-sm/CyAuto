class homePage{

    userName(){
        return cy.get(':nth-child(1) > .form-control')
    }
    userEmail(){
        return cy.get(':nth-child(2) > .form-control')
    }
    productSelection(){
        return cy.get('select')
    }
    enterprenuerRedioBtnLoc(){
        return cy.get('#inlineRadio3')
    }
    shopBtnLoc(){
        return cy.get(':nth-child(2) > .nav-link')
    }


}

export default homePage;