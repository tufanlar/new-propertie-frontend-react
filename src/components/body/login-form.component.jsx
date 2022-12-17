import React from 'react'

function LoginForm() {
  return (

    <div className='flex justify-center items-center w-full'>
    <div className="w-11/12 md:w-1/3 bg-white h-fit rounded-md shadow-md flex flex-col">

      <h2 className="mx-4 my-4 text-black-900 text-lg text-center font-medium title-font"> Sign In </h2>
      <form id="new-user-form"  action="/user-save" method="post" className="block mx-5 pb-4">


        <label for="e_mail" className="block text-sm py-1 mt-4" >E-Mail</label>
        <input type="text" name="e_mail" className="w-full py-3 input"/>

        <label for="name_surname" class="block text-sm py-1 mt-4" >Password</label>
        <input type="text" name="password" className="w-full py-3 input"/>

        <button className="w-full mt-5 text-white bg-primary border-1 py-3 px-8
        focus:outline-none hover:bg-secondary transition duration-500 rounded text-lg g-recaptcha"
        data-sitekey="6Lfd7MwhAAAAAHuqZcWj1DdXx1IssLzA3NYWa0Bn"
        data-callback="onSubmit">
        Sign In <i className="fas fa-right-to-bracket ml-5" ></i>
      </button>

      <hr class="my-5 border-1 border-gray-300" />

      <div class="flex justify-between">
        <a href="/forget" className="block text-center font-semibold text-md
                text-primary hover:text-secondary transition">
            Forget Password
        </a>
        <a href="/signup" className="block text-center font-semibold text-md
                text-primary hover:text-secondary transition">
            Sign Up
        </a>
      </div>

      </form>
    </div>

    </div>

    
  )
}

export default LoginForm