describe('Footer subscribe form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', '/');
  });
  it('Should render footer subscribe form', () => {
    cy.get('[data-cy="form-footer"]').should('exist');
    cy.get('[data-cy="input-footer"]').should('exist');
    cy.get('[data-cy="button-footer"]').should('exist');
  });
  it('Should type in input', () => {
    cy.get('[data-cy="input-footer"]').type('lesha@gmail.com');
    cy.get('[data-cy="input-footer"]').should('have.value', 'lesha@gmail.com');
  });
  it('Should show loader after submitting form', () => {
    cy.get('[data-cy="input-footer"]').type('lesha@gmail.com');
    cy.get('[data-cy="button-footer"]').click();
    cy.get('[data-cy="loader"]').should('exist');
  });
  it('Should show error message for invalid input', () => {
    cy.get('[data-cy="input-footer"]').type('1111111111');
    cy.get('[data-cy="button-footer"]').click();
    cy.get('[data-cy="footer-error"]').should('be.visible');
  });
  it('Should hide error message after focus input', () => {
    cy.get('[data-cy="input-footer"]').type('1111111111');
    cy.get('[data-cy="button-footer"]').click();
    cy.get('[data-cy="footer-error"]').should('be.visible');
    cy.get('[data-cy="input-footer"]').focus();
    cy.get('[data-cy="footer-error"]').should('not.exist');
  });
  it('Should show snackbar after success submit', () => {
    cy.get('[data-cy="input-footer"]').type('lesha@gmail.com');
    cy.get('[data-cy="button-footer"]').click();
    cy.get('[data-cy="snack-bar"]').should('be.visible');
    cy.get('[data-cy="snack-bar"]').should('have.text', 'We have received you email: lesha@gmail.com');
  });
  it('Should hide snack bar after 4s', () => {
    cy.get('[data-cy="input-footer"]').type('lesha@gmail.com');
    cy.get('[data-cy="button-footer"]').click();
    cy.get('[data-cy="snack-bar"]').should('be.visible');
    cy.get('[data-cy="snack-bar"]').should('have.text', 'We have received you email: lesha@gmail.com');
    cy.wait(5000);
    cy.get('[data-cy="snack-bar"]').should('not.exist');
  });
});
