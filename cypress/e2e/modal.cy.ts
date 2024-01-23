describe('Modal video', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', '/');
  });
  it('Should render button for opening modal', () => {
    cy.get('[data-cy="open-modal"]').should('exist');
  });
  it('Should open modal after clicking on button', () => {
    cy.get('[data-cy="open-modal"]').click();
    cy.get('[data-cy="modal"]').should('be.visible');
  });
  it('Should close modal after clicking on close icon', () => {
    cy.get('[data-cy="open-modal"]').click();
    cy.get('[data-cy="modal"]').should('be.visible');
    cy.get('[data-cy="close-modal"]').click();
    cy.get('[data-cy="modal"]').should('not.exist');
  });
});
