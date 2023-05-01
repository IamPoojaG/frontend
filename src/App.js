import * as React from 'react';
import ForgotPassword from './ForgotPassword';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import './App.css';
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VerifyPasscode from './VerifyPasscode.js';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} exact />
          <Route path='/SignIn' element={<SignInPage />} exact />
          <Route path='/SignUp' element={<SignUpPage />} exact />
          <Route path='/ForgotPassword' element={<ForgotPassword />} exact />
          <Route path='/VerifyPasscode' element={<VerifyPasscode />} exact />
        </Routes>
      </Router>
    </div>
  );
}
