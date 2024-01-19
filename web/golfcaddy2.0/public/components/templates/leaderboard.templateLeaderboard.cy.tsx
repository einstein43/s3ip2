import React from 'react'
import Leaderboard from './leaderboard.template'

describe('<Leaderboard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Leaderboard />)
  })
})