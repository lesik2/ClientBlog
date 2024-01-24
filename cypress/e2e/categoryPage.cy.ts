describe('Category page', () => {
  beforeEach(() => {
    cy.visit('/category/Startup');
    cy.url().should('include', '/category/Startup');
  });
  it('Should render categories, tags, elastic search and title with certain Category', () => {
    cy.contains('Startup');
    cy.get('[data-cy="categoriesWrapper"]>button').should('have.length', 4);
    cy.get('[data-cy="tagsWrapper"]>button').should('have.length', 8);
    cy.get('[data-cy="elasticSearch"').should('exist');
    cy.get('[data-cy="postCard"').should('have.length.greaterThan', 1);
  });
  it('should render posts with current category', () => {
    cy.get('[data-cy="postCard"]').each((postCard) => {
      cy.wrap(postCard).contains('Startup');
    });
  });
  it('should be active current category', () => {
    cy.get('[data-cy="Startup"]').should('have.css', 'background-color', 'rgb(255, 208, 80)');
  });
  it('should change category page after clicking on category card', () => {
    cy.get('[data-cy="Business"]').click();
    cy.url().should('include', 'category/Business');
    cy.get('[data-cy="Business"]').should('have.css', 'background-color', 'rgb(255, 208, 80)');
    cy.get('[data-cy="postCard"]').each((postCard) => {
      cy.wrap(postCard).contains('Business');
    });
  });
  it('should type in elasticSearch input', () => {
    cy.get('[data-cy="searchInput"]').should('have.value', '');
    cy.get('[data-cy="searchInput"]').type('busi');
    cy.get('[data-cy="searchInput"]').should('have.value', 'busi');
  });
  it('should filter posts after clicking on tags', () => {
    cy.get('[data-cy="card-Life"]').click();
    cy.get('[data-cy="card-Life"]').should('have.css', 'background-color', 'rgb(255, 208, 80)');
    cy.get('[data-cy="postCard"]').each((postCard) => {
      cy.wrap(postCard).contains('Startup').contains('Life');
    });
    cy.get('[data-cy="card-Life"]').click();
    cy.get('[data-cy="card-Life"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });
  it('should show not found message', () => {
    cy.get('[data-cy="card-Economy"]').click();
    cy.contains('No posts found');
  });
  it('should show not lists of found tags during typing in elasticSearch input', () => {
    cy.get('[data-cy="searchInput"]').type('e');

    cy.get('[data-cy="searchList"]').should('exist');

    cy.get('[data-cy="searchList"] li').should('contain', 'Experience');
    cy.get('[data-cy="searchList"] li').should('contain', 'Economy');
  });
  it('should not show a list of found tags if there are no matches', () => {
    cy.get('[data-cy="searchInput"]').type('xyz');
    cy.get('[data-cy="searchList"]>li').should('have.length', 0);
  });
  it('should update input value after choosing item from list and filter posts', () => {
    cy.get('[data-cy="searchInput"]').type('l');
    cy.get('[data-cy="searchList"] li').first().click();
    cy.get('[data-cy="searchInput"]').should('have.value', 'Life');
    cy.get('[data-cy="postCard"]').each((postCard) => {
      cy.wrap(postCard).contains('Startup').contains('Life');
    });
    cy.get('[data-cy="postCard"').should('have.length', 2);
  });

  it('should combine filter from elastic search and tags', () => {
    cy.get('[data-cy="searchInput"]').type('l');
    cy.get('[data-cy="searchList"] li').first().click();
    cy.get('[data-cy="searchInput"]').should('have.value', 'Life');
    cy.get('[data-cy="card-Business"]').click();

    cy.get('[data-cy="postCard"]').each((postCard) => {
      cy.wrap(postCard).contains('Startup').contains('Life').contains('Business');
    });
    cy.get('[data-cy="postCard"').should('have.length', 1);
  });
});
