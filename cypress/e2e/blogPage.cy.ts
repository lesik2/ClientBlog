describe('Blog page', () => {
  beforeEach(() => {
    cy.visit('/blog');
    cy.url().should('include', '/blog');
  });
  it('Should navigate to post page after clicking on read more in header component', () => {
    cy.get('[data-cy="blogLink"]').click();
    cy.url().should('include', '/blog/1');
  });
  it('Should render buttons for pagination prev button should be disabled and next enabled', () => {
    cy.get('[data-cy="nextBtn"]').should('exist');
    cy.get('[data-cy="prevBtn"]').should('exist');

    cy.get('[data-cy="nextBtn"]').should('not.be.disabled');
    cy.get('[data-cy="prevBtn"]').should('be.disabled');
  });
  it('Should render 5 posts on page', () => {
    cy.get('[data-cy="postCard"]').should('have.length', 5);
  });
  it('After clicking pagination buttons should change card and disabled buttons if no more cards', () => {
    cy.get('[data-cy="postCard"]').should('have.length', 5);
    cy.get('[data-cy="nextBtn"]').click();
    cy.get('[data-cy="nextBtn"]').should('be.disabled');
    cy.get('[data-cy="prevBtn"]').should('not.disabled');
    cy.get('[data-cy="postCard"]').should('have.length', 1);
    cy.get('[data-cy="prevBtn"]').click();
    cy.get('[data-cy="nextBtn"]').should('not.be.disabled');
    cy.get('[data-cy="prevBtn"]').should('be.disabled');
    cy.get('[data-cy="postCard"]').should('have.length', 5);
  });
  it('After navigate to Specific category after clicking on category card', () => {
    cy.get('[data-cy="Economy"]').click();
    cy.url().should('include', '/category/Economy');
    cy.contains('Economy');
  });
});
