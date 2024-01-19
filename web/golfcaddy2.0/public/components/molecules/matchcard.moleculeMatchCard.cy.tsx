import React from 'react'
import MatchCard from './matchcard.molecule'

describe('<MatchCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MatchCard />)
  })
})