import React from 'react'
import HamburgerBtn from './hamburgerBtn.atom'

describe('<HamburgerBtn />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HamburgerBtn />)
  })
})