import * as React from 'react';
import { useNavigate } from 'react-router-dom';
export default function WelcomePage() {
  const navigate = useNavigate();
  const signInPage = () => {
    navigate('/SignIn');
  };
  const signUpPage = () => {
    navigate('/SignUp');
  };
  return (
    <div className='welcome_container'>
      <div className='heading'>
        <h1>Welcome</h1>
        <p>Let's get started</p>
      </div>
      <div className='content'>
        <p>Existing customer / Get started</p>
        <button onClick={() => signInPage()} className='btn'>
          Sign in
        </button>
        <p>
          New customer?{' '}
          <span onClick={() => signUpPage()}>Create a new account</span>
        </p>
      </div>
    </div>
  );
}
