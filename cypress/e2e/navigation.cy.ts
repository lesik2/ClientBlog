describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', '/');
  });
  it('Should navigate to Home page', () => {
    cy.get('[data-cy="header"]').should('exist');
    cy.get('[data-cy="navigation"]').should('exist');
  });
  it('should render 4 links on navigation', () => {
    cy.get('[data-cy="navigation-list"]>li').should('have.length', 9);
    cy.contains('Home');
    cy.contains('Blog');
    cy.contains('About Us');
    cy.contains('Contact us');
    cy.contains('Privacy Policy');
  });
  it('should navigate to page after clicking on link on navigation', () => {
    cy.get('[data-cy="header-/blog"]').click();
    cy.url().should('include', '/blog');

    cy.get('[data-cy="header-/about-us"]').click();
    cy.url().should('include', '/about-us');

    cy.get('[data-cy="header-/contact"]').click();
    cy.url().should('include', '/contact');

    cy.get('[data-cy="footer-/privacy-policy"]').click();
    cy.url().should('include', '/privacy-policy');
  });
  it('should color active link', () => {
    cy.get('[data-cy="header-/"]').should('have.css', 'color', 'rgb(255, 208, 80)');
    cy.get('[data-cy="header-/blog"]').click();

    cy.get('[data-cy="header-/blog"]').should('have.css', 'color', 'rgb(255, 208, 80)');

    cy.get('[data-cy="header-/about-us"]').click();
    cy.get('[data-cy="header-/about-us"]').should('have.css', 'color', 'rgb(255, 208, 80)');

    cy.get('[data-cy="header-/contact"]').click();
    cy.get('[data-cy="header-/contact"]').should('have.css', 'color', 'rgb(255, 208, 80)');

    cy.get('[data-cy="footer-/privacy-policy"]').click();
    cy.get('[data-cy="footer-/privacy-policy"]').should('have.css', 'color', 'rgb(255, 208, 80)');
  });
});
