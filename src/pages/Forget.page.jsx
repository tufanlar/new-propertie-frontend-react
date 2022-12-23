import React from 'react'
import ForgetForm from '../components/body/forget-form.component'
import PageContainer from '../components/container/page/page-container.component'
import background from '../assets/img/bg.png';

function ForgetPage() {
  return (
    <PageContainer>
      <div className='flex rounded-md bg-gray-100 w-full bg-cover' style = {{ backgroundImage: `url(${background})` }} >
        <ForgetForm />
      </div>
    </PageContainer>
  )
}

export default ForgetPage