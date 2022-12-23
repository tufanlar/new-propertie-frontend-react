import React from 'react'
import LoginForm from '../components/body/login-form.component'
import PageContainer from '../components/container/page/page-container.component'
// import background from '../assets/img/bg-4.png';




function LoginPage() {
  return (
    <PageContainer>
      <div className='flex rounded-md bg-gray-100 w-full bg-cover' style = {{ backgroundImage: `url("/img/bg.png")` }} >
        <LoginForm />
      </div>
    </PageContainer>
  )
}

export default LoginPage