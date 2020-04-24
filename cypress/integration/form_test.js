//////////////////// SET VARIABLES /////////////////////////
const name = 'Benjamin';
const specialInstructions = 'Extra Cheese'

//////////////////// E2E TESTING USING CYPRESS ////////////////////////////
describe('User Onboarding Form', () => {
    
    /////////////////// SUCCESSFULLY NAVIGATES TO LOCALHOST //////////////////////
    it('navigates to the localhost', () => {
        cy.visit('http://localhost:3001/pizza')
        cy.url().should('include', 'localhost')
    })

    ////////////////////// INPUT FIELD TESTS ///////////////////////////
    it('can add text to text boxes', () => {
        cy.get('[data-cy_name_input="cy_name_input"]')
            .type(`${name}`)
            .should('have.value', `${name}`)
            .clear()

        cy.get('[data-cy_special_input="cy_special_input"]')
            .type('Extra Sauce')
            .should('have.value', 'Extra Sauce')
            .clear()
    })

    ////////////////////// CHECKBOX TEST //////////////////////////
    it('can check multiple toppings checkboxes', () => {
        cy.get('[type="checkbox"]').check()
            .should('exist')
    })

    ///////////////////// SUBMIT BUTTON FUNCTIONALITY TEST //////////////////////////
    it('can submit the form', () => {
        cy.get('[data-cy_submit="cy_submit"]')
            .click()
    })

    //////////////////////// FORM VALIDATION IF INPUT IS LEFT EMPTY ////////////////////////////
    it('form validation is displayed', () => {
        cy.get('[data-cy_name_input="cy_name_input"]')
            .type('Benjamin')
            .clear()
        
        cy.get('[data-cy_name_validation="data-cy_name_validation"]')
            .should('not.be.empty')
            .pause()
    })
    
})
