import React, { useEffect, useRef } from 'react';
import TfnSoftClient from '../../libs/axios.lib';
import { checkEmail, checkPassword, checkLength, MailError, PasswordError } from '../../utils/validator.util';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setUserData } from '../../store/user/user.slice';
import { useDispatch } from 'react-redux';
import useRecaptcha from '../../hooks/use-recaptcha.hook';
import { EMAIL_PLACEHOLDER, PASSWORD_PLACEHOLDER, INPUT_CLASSNAME } from '../../utils/input.util';
import { clearErrors, setUserError  } from '../../utils/input.util';

const LinkButton = styled(Link).attrs({
  className: "block text-center font-semibold text-md text-primary hover:text-secondary transition"
})`
`;


function LoginForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const email = useRef();
  const password = useRef();
  const error = useRef();
  const submitButton = useRef();


  const {captcha, ReCAPTHA } = useRecaptcha({taskFn});

  
  useEffect(() => {
    email.current.focus();
    return () => {
      console.log("unmount run");
    }
  }, []);


  async function taskFn(captchaToken){

    try {

      checkLength(captchaToken, 1); // alt least 1 char

      submitButton.current.disabled = true;

      const body = {
        token: captchaToken,
        e_mail:  email.current.value,
        password: password.current.value
      }

      const { data:{ token, user }} = await TfnSoftClient.post('/user/login', body);
      
      email.current.value = '';
      password.current.value = '';
      error.current.innerHTML = '';


      dispatch(setUserData({userInfo:{userId: user.email, isAdmin:true}, token}));

      navigate('/');
      

    } catch(err) {

      error.current.innerHTML = err.message;

    } finally {

      submitButton.current.disabled = false;

    }

  }


  async function onClickHandler (e){

    try {
      
      checkEmail(email.current.value);
      checkPassword(password.current.value);
      captcha.current.execute();
    } catch(err) {

      if (err instanceof PasswordError) {
        setUserError(password, err.message);
      } else if (err instanceof MailError) {
        setUserError(email, err.message);
      }  else {
        error.current.innerHTML = err.message;
      }
      
    } 

  }

  
  return (

    <div className='flex justify-center items-center w-full'>
    <div className="w-11/12 md:w-1/3 h-fit rounded-md bg-white shadow-md flex flex-col">

      <h2 className="mx-4 my-4 text-black-900 text-lg text-center font-medium title-font"> Sign In </h2>
      <div className="block mx-5 pb-4">
        
        <p ref={error} className ="text-sm font-semibold text-secondary"></p> 

        <label className="block text-sm py-1 mt-4" >{EMAIL_PLACEHOLDER}</label>
        <input type="text" 
          name = "email"
          placeholder={EMAIL_PLACEHOLDER} 
          onFocus={()=> clearErrors(error, email, EMAIL_PLACEHOLDER)}   
          ref={email} 
          className={INPUT_CLASSNAME}/>

        <label className="block text-sm py-1 mt-4" >{PASSWORD_PLACEHOLDER}</label>
        <input type="password" 
          name = "password" 
          placeholder={PASSWORD_PLACEHOLDER} 
          onFocus={()=> clearErrors(error, password, PASSWORD_PLACEHOLDER)}
          ref={password} 
          className={INPUT_CLASSNAME}/>

        <ReCAPTHA />

        <button ref={submitButton} 
          onClick = { onClickHandler}  
          className="submit-btn">
          Sign In 
        </button>

      <hr className="my-5 border-1 border-gray-300" />

      <div className="flex justify-between">
        <LinkButton to ="/forget" > Forget Password </LinkButton>
        <LinkButton to ="/signup">Sign Up</LinkButton>
      </div>

      </div>
    </div>

    </div>

    
  )
}

export default LoginForm