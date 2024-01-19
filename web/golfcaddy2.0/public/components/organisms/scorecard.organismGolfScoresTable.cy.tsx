import React from 'react'
import GolfScoresTable from './scorecard.organism'

describe('<GolfScoresTable />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GolfScoresTable />)
  })
})