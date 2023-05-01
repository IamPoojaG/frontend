import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifyPasscode() {
  const navigate = useNavigate();
  const home = () => {
    navigate('/');
  };
  const signIn = () => {
    navigate('/SignIn');
  };
  return (
    <div className='passcode_container'>
      <div className='inner_container'>
        <h2>Enter a 4 digit code</h2>
        <p>
          A four-digit code should have come to your email address that you
          indicated
        </p>

        <div className='passcode_input'>
          <input type='number'></input>
          <input type='number'></input>
          <input type='number'></input>
          <input type='number'></input>
        </div>
        <div className='passcode_button'>
          <button className='btn' onClick={() => signIn()}>
            Confirm
          </button>
          <button className='btn_outer' onClick={() => home()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
