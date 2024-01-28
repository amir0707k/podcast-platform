import React, { useState } from 'react'
import Header from '../components/common/Header'
import SignupForm from '../components/SignupComponents/SignupForm';
import LoginForm from '../components/SignupComponents/LoginForm'; 


function SignUpPage() {
  
  const [flag,setFlag] = useState(false);

  return (
    <div>
        <Header />
        <div className='input-wrapper'>
          {!flag ?<h1>Sign Up</h1>:<h1>Login</h1>}
          {!flag ?<SignupForm />: <LoginForm />}
          {!flag ? (
            <p style={{cursor:"pointer"}} onClick={() =>setFlag(!flag)} >Already Have An Account? Click here to Login</p>
          ):(
            <p style={{cursor:"pointer"}} onClick={() =>setFlag(!flag)} >Don't Have An Account? Click here to Signup</p>
          )}
        </div>
    </div>
  )
}

export default SignUpPage;