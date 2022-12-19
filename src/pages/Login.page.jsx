import React from 'react'
import LoginForm from '../components/body/login-form.component'
import PageContainer from '../components/container/page/page-container.component'


function LoginPage() {
  return (
    <PageContainer>
      <div className='flex bg-gray-100 w-full' >
        <LoginForm />
      </div>
    </PageContainer>
  )
}

export default LoginPage