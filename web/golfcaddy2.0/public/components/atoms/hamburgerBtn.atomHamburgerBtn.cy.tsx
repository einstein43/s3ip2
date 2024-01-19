import React from 'react'
import HamburgerBtn from './hamburgerBtn.atom'

describe('<HamburgerBtn />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HamburgerBtn isOpen={false} setIsOpen={function (value: React.SetStateAction<boolean>): void {
      throw new Error('Function not implemented.')
    } } style={''} />)
  })
})