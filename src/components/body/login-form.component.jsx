import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import TfnSoftClient from '../../libs/axios.lib';
import { checkEmail, checkPassword, getLength, MailError, PasswordError } from '../../utils/validator.util';

const EMAIL_PLACEHOLDER = "Email";
const PASSWORD_PLACEHOLDER = "Password";
const INPUT_ERR_CLASSNAME = "input-error";
const INPUT_CLASSNAME = "input";

function LoginForm() {

  const email = useRef();
  const password = useRef();
  const error = useRef();
  const submitButton = useRef();
  const recaptchaRef = useRef(null);
  

  const [emailClass , setEmailClass] = useState(INPUT_CLASSNAME);
  const [passwordClass , setPasswordClass] = useState(INPUT_CLASSNAME);
  

  
  useEffect(() => {
    email.current.focus();
  }, [])

  const clearError = () => {
    error.current.innerHTML = '';
  }

  const emailClearFn = useCallback(() => {
    clearError();
    email.current.placeholder = EMAIL_PLACEHOLDER;
    setEmailClass(INPUT_CLASSNAME);
  }, []);

  const passwordClearFn = useCallback(() => {
    clearError();
    password.current.placeholder = PASSWORD_PLACEHOLDER;
    setPasswordClass(INPUT_CLASSNAME);
  }, []);

    

  const handleUserLogin = async (event) => {

    try {

      event.preventDefault();
      submitButton.current.disabled = true;
      const token = await recaptchaRef.current.executeAsync();
      if (getLength(token) === 0)
        throw new Error("Must be a valid token !");

      const username = email.current.value;
      const userPassword = password.current.value;
      checkEmail(username);
      checkPassword(userPassword);

      const body = {
        token,
        e_mail:  username,
        password: userPassword
      }

      await TfnSoftClient.post('/user/login', body);
      
      email.current.value = '';
      password.current.value = '';
      error.current.innerHTML = '';
      

    } catch(err) {

      error.current.innerHTML = err.message;

      if (err instanceof PasswordError) {
        password.current.value = '';
        password.current.placeholder = err.message; 
        setPasswordClass(INPUT_ERR_CLASSNAME);
      }
      
      if (err instanceof MailError) {
        email.current.value = '';
        email.current.placeholder = err.message;
        setEmailClass(INPUT_ERR_CLASSNAME); 
      }


    } finally {
      recaptchaRef.current.reset();
      submitButton.current.disabled = false;
    }
  

  }

  return (

    <div className='flex justify-center items-center w-full'>
    <div className="w-11/12 md:w-1/3 h-fit rounded-md bg-white shadow-md flex flex-col">

      <h2 className="mx-4 my-4 text-black-900 text-lg text-center font-medium title-font"> Sign In </h2>
      <form id="new-user-form"  onSubmit={ handleUserLogin } className="block mx-5 pb-4">


        <p ref={error} className ="text-sm font-semibold text-secondary"></p> 
        <label className="block text-sm py-1 mt-4" >E-Mail</label>
        <input type="text"  placeholder={EMAIL_PLACEHOLDER} onFocus={emailClearFn}   ref={email} className={`w-full py-3 ${emailClass}`}/>

        <label className="block text-sm py-1 mt-4" >Password</label>
        <input type="password"  placeholder={PASSWORD_PLACEHOLDER} onFocus={passwordClearFn} ref={password} className={`w-full py-3 ${passwordClass}`}/>


        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.REACT_APP_PROPERTIE_RECAPTCHA_SITE_KEY}
        />

        <button ref={submitButton}  className="w-full mt-5 text-white bg-primary border-1 py-3 px-8
        focus:outline-none hover:bg-secondary transition duration-500 rounded text-lg" type='submit'>
        Sign In <i className="fas fa-right-to-bracket ml-5" ></i>
      </button>

      <hr className="my-5 border-1 border-gray-300" />

      <div className="flex justify-between">
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