describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pokemon', function() {
  it('ivysaur page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur').click()
    cy.contains('ivysaur')
    cy.contains('overgrow')
  })
})