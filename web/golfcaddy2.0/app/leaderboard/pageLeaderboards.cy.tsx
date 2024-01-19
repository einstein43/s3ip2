import React from 'react'
import Leaderboards from './page'

describe('<Leaderboards />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Leaderboards />)
  })
})