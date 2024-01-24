describe('Contact page', () => {
  beforeEach(() => {
    cy.visit('/contact');
    cy.url().should('include', '/contact');
  });
  it('Should render email form, inputs and map', () => {
    cy.get('[data-cy="contactForm"]').should('exist');
    cy.get('[data-cy="contactUserInput"]').should('exist');
    cy.get('[data-cy="contactEmailInput"]').should('exist');
    cy.get('[data-cy="contactMessageTextInput"]').should('exist');
    cy.get('[data-cy="contactMap"]').should('exist');
    cy.get('[data-cy="dropDownButton"]').should('exist');
    cy.get('[data-cy="contactSubmit"]').should('exist');
  });
  it('Should render empty inputs  and disabled button', () => {
    cy.get('[data-cy="contactUserInput"]').should('have.value', '');
    cy.get('[data-cy="contactEmailInput"]').should('have.value', '');
    cy.get('[data-cy="contactMessageTextInput"]').should('have.value', '');
    cy.get('[data-cy="dropDownButton"]').should('have.text', 'Query Related');
    cy.get('[data-cy="contactSubmit"]').should('be.disabled');
  });
  it('Should open list after clicking on DropDown and after choosing item close list and display new value', () => {
    cy.get('[data-cy="dropDownButton"]').click();
    cy.get('[data-cy="dropDownList"]').should('be.visible');
    cy.contains('Confirmation Message').click();
    cy.get('[data-cy="dropDownList"]').should('not.be.visible');
    cy.get('[data-cy="dropDownButton"]').should('have.text', 'Confirmation Message');
  });
  it('Should type in input and textArea and after typing valid data enable button', () => {
    cy.get('[data-cy="contactUserInput"]').should('have.value', '');
    cy.get('[data-cy="contactUserInput"]').type('Alex');
    cy.get('[data-cy="contactUserInput"]').should('have.value', 'Alex');

    cy.get('[data-cy="contactEmailInput"]').should('have.value', '');
    cy.get('[data-cy="contactEmailInput"]').type('lesha@gmail.com');
    cy.get('[data-cy="contactEmailInput"]').should('have.value', 'lesha@gmail.com');

    cy.get('[data-cy="contactMessageTextInput"]').should('have.value', '');
    cy.get('[data-cy="contactMessageTextInput"]').type('Hi my name Alex and I have an issue');
    cy.get('[data-cy="contactMessageTextInput"]').should('have.value', 'Hi my name Alex and I have an issue');
    cy.get('[data-cy="contactSubmit"]').should('not.be.disabled');
  });

  it('Should show error message when invalid input and disabled button', () => {
    cy.get('[data-cy="contactUserInput"]').type('Alex23232323');
    cy.contains('Invalid input. Please enter letters and spaces.');

    cy.get('[data-cy="contactEmailInput"]').type('leshagmail.com');
    cy.contains('Invalid email address.');

    cy.get('[data-cy="contactMessageTextInput"]').type('Hi my n');
    cy.contains('Your message should include at least 10 symbols.');

    cy.get('[data-cy="contactSubmit"]').should('be.disabled');
  });

  it('Should show loader after submitting form', () => {
    cy.get('[data-cy="contactUserInput"]').type('Alex');
    cy.get('[data-cy="contactEmailInput"]').type('lesha@gmail.com');

    cy.get('[data-cy="contactMessageTextInput"]').type('Hi my name Alex and I have an issue');

    cy.get('[data-cy="contactSubmit"]').click();
    cy.get('[data-cy="loader"]').should('exist');
  });

  it('Should show snackbar after success submit', () => {
    cy.get('[data-cy="contactUserInput"]').type('Alex');
    cy.get('[data-cy="contactEmailInput"]').type('lesha@gmail.com');

    cy.get('[data-cy="contactMessageTextInput"]').type('Hi my name Alex and I have an issue');

    cy.get('[data-cy="contactSubmit"]').click();
    cy.get('[data-cy="snack-bar"]').should('be.visible');
    cy.get('[data-cy="snack-bar"]').should(
      'have.text',
      'We have received you message. And contact you as soon as possible',
    );

    cy.wait(5000);
    cy.get('[data-cy="snack-bar"]').should('not.exist');
  });
});
