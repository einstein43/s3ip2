import React from 'react'
import MatchCard from './matchcard.molecule'
export {};

describe('<MatchCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MatchCard />)
  })
})