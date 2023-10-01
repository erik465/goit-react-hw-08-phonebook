import React from 'react'
import { LoginForm } from 'components/LoginForm/LoginForm'
import { StyledPage } from './LoginPage.styled'

const LoginPage = () => {
  return (
    <StyledPage>
      <h1>LOGIN PAGE</h1>
      <LoginForm />
    </StyledPage>
  )
}

export default LoginPage
