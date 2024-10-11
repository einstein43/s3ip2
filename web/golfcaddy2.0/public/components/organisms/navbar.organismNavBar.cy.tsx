import React from 'react'
import { NavBar } from './navbar.organism'
export {};

describe('<NavBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavBar />)
  })
})