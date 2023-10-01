import React from 'react'
import { RegisterForm } from 'components/RegisterForm/RegisterForm'
import { StyledPage } from './RegisterPage.styled'

const RegisterPage = () => {
  return (
    <StyledPage>
      <h1>REGISTER PAGE</h1>
      <RegisterForm />
    </StyledPage>
  )
}

export default RegisterPage
