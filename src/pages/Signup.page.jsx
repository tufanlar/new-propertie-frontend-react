import React from 'react'
import SignupForm from '../components/body/signup-form.component'
import PageContainer from '../components/container/page/page-container.component'
import background from '../assets/img/bg.png';

function SignUpPage() {
  return (
    <PageContainer>
      <div className='flex rounded-md bg-gray-100 w-full bg-cover' style = {{ backgroundImage: `url(${background})` }} >
        <SignupForm />
      </div>
    </PageContainer>
  )
}

export default SignUpPage