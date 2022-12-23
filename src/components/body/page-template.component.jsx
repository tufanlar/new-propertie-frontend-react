



import React from 'react'

function PageTemplate({pageName}) {
  return (
    <div className='flex p-4 bg-gray-100 w-full ' >
        <div className='flex justify-center items-center rounded-md bg-gray-100 w-full bg-cover' style = {{ backgroundImage: `url("/img/welcome.jpg")` }} >
          <div>
            <h1 className ="text-primary text-7xl font-semibold">Welcome to <span className="text-secondary">{pageName}</span></h1>
          </div>
        </div>
      </div>
  )
}

export default PageTemplate