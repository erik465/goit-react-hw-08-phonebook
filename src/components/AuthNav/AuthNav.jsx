import React from 'react'
import { StyledNav, StyledNavLink } from './AuthNav.styled'

const AuthNav = () => {
  return (
        <StyledNav>
            <h1>Phonebook</h1>
            <StyledNavLink  to="/register">
                Register
            </StyledNavLink>
            <StyledNavLink  to="/login">
                Log In
            </StyledNavLink>
        </StyledNav>
  )
}

export default AuthNav
