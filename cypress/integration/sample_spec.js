describe('My First Test', function() {
    beforeEach(() => {
        cy.visit('https://bergurijohansen.github.io/prime-master')
    })

    it('Visits the Kitchen Sink', function() {
      cy.visit('https://bergurijohansen.github.io/prime-master')
    })

    it('find name of machine', () => {
        cy.get('p').should('contain', 'master 20001')
    })

  })