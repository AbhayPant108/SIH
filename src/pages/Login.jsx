import React from 'react'
import {Login as LoginComponent , Container} from '../components/index'

function Login() {
  return (
    <div className='h-full'>
        <Container>
            <LoginComponent />
        </Container>
    </div>
  )
}

export default Login