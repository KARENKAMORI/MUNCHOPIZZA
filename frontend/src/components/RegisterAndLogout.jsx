import React from 'react'
import RegisterPage from '../pages/RegisterPage'

const RegisterAndLogout = () => {
    localStorage.clear()
    return <RegisterPage />
}

export default RegisterAndLogout