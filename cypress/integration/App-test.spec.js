describe('Complete e to e testing', () => {
  it('e to e test', () => {
    cy.visit('/');

    // Basic hooks test
    cy.contains('initial state');
    cy.contains('State Change Button').click();
    cy.contains('State changed!!!');
    cy.contains('my name');
    cy.contains('Change Name').click();
    cy.contains('Jai');

    // useReducer test
    cy.contains('stateprop1 is false');
    cy.contains('Dispatch Success').click();
    cy.contains('stateprop1 is true');

    //useContext test
    cy.contains('Some Text');
    cy.contains('Change Text').click();
    cy.contains('Some Other Text');

    // form test
    cy.get('#text1').type('New Text {enter}');
    cy.contains('Change: New Text');
    cy.contains('Submit Value: New Text');

    //axios test
    cy.request('https://jsonplaceholder.typicode.com/posts/1').should((res) => {
      expect(res.body).not.to.be.null;
      console.log(res.body.body);
      cy.contains(res.body.title);
    });
  });
});
