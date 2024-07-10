 describe('Login Functionality', () => {
    it('should login with valid credentials', () => {
      // Replace with your actual login URL
      cy.visit('http://localhost:3000/login');
  
      // Use data-testid or other reliable selectors
      cy.get('[data-testid=email]').type('test@gmail.com');
      cy.get('[data-testid=password]').type('123456');
  
      // Submit the form (button or form submission)
      cy.get('[data-testid=submit-button]').click();
  
      // Assert successful login (e.g., redirected to a different page)
      cy.url().should('include', '/dashboard'); // Replace with expected URL
    });
    it('should show error message for invalid username ', () => {
      cy.visit('http://localhost:3000/login');
  
      cy.get('[data-testid=email]').type('invalid_username@gmail.com');
      cy.get('[data-testid=password]').type('valid_password');
      cy.get('[data-testid=submit-button]').click();
  
      // Assert error message is displayed (text content or class existence)
      cy.get('.text-red-500').should('contain.text', 'Usuario/Password inexistente');
    });    
  });



  describe('Signup Functionality', () => {
    it('should login with valid credentials', () => {
      // Replace with your actual login URL
      cy.visit('http://localhost:3000/signup');
  
      // Use data-testid or other reliable selectors
      cy.get('[data-testid=name]').type('test2');
      cy.get('[data-testid=email]').type('test3@gmail.com');
      cy.get('[data-testid=password]').type('123456');
      cy.get('[data-testid=confirm-password]').type('123456');

      
      // Submit the form (button or form submission)
      cy.get('[data-testid=submit-button]').click();
  
      // Assert successful login (e.g., redirected to a different page)
      cy.url().should('include', '/dashboard'); // Replace with expected URL
    });

    it('should show error message when password not equal ', () => {
      // Replace with your actual login URL
      cy.visit('http://localhost:3000/signup');
  
      // Use data-testid or other reliable selectors
      cy.get('[data-testid=name]').type('test2');
      cy.get('[data-testid=email]').type('test2@gmail.com');
      cy.get('[data-testid=password]').type('123456');
      cy.get('[data-testid=confirm-password]').type('1234567');
  
      cy.get('[data-testid=submit-button]').click();

      // Assert error message is displayed (text content or class existence)
      cy.get('.text-red-500').should('contain.text', 'Las contraseñas no coinciden');
    });    
  });

  describe("Navigation to Section Recent Orders", () => {
    it("should navigate to the Sales page", () => {

      cy.visit("http://localhost:3000/login");
  
      cy.get('[data-testid=email]').type('test@gmail.com');
      cy.get('[data-testid=password]').type('123456');
      cy.get('[data-testid=submit-button]').click();
  
      // Assert successful login (e.g., redirected to a different page)
      cy.url().should('include', '/dashboard'); // Replace with expected URL

      cy.get('[data-testid=ventas]').click();

      cy.url().should('include', '/dashboard/sales'); // Replace with expected URL
      
      cy.get('[data-testid="sale-item-1"]')
      
          });
  });