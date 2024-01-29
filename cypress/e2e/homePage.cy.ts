describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', '/');
  });
  it('Should navigate to post page after clicking on read more in step by step blog', () => {
    cy.get('[data-cy="stepByStepLink"]').click();
    cy.url().should('include', '/blog/1');
  });
  it('Should navigate to blog page after clicking on View all in All posts blog', () => {
    cy.get('[data-cy="all-posts-link"]').click();
    cy.url().should('include', '/blog');
  });
  it('Should navigate to About us page after clicking on read more in About us blog', () => {
    cy.get('[data-cy="aboutUsLink"]').click();
    cy.url().should('include', '/about-us');
  });
  it('Should navigate to Category page after clicking on category card in Choose Category blog', () => {
    cy.get('[data-cy="Startup"]').click();
    cy.url().should('include', '/category/Startup');
  });
  it('Should navigate to About us page after clicking on Discover our story in Why we started blog', () => {
    cy.get('[data-cy="whyStartedLink"]').click();
    cy.url().should('include', '/about-us');
  });
  it('Should navigate to Author page after clicking on Author card in List of Authors blog', () => {
    cy.get('[data-cy="Floyd Miles"]').click();
    cy.url().should('include', '/author/1');
  });
  it('Should navigate to Contact page after clicking on Join Now in Join our team to be a part of our story blog', () => {
    cy.get('[data-cy="join-our-team-link"]').click();
    cy.url().should('include', '/contact');
  });
});
