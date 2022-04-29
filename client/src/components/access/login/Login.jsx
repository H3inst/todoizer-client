import { useState } from 'react';
import { Lock, UserAdmin, Mail } from 'grommet-icons';

import LoginSvg from '../../../assets/access/login.svg';

function Login() {
  const [openForm, setOpenForm] = useState('login');

  const handleSetLoginForm = () => {
    setOpenForm('login');
  }
  const handleSetRegisterForm = () => {
    setOpenForm('register');
  }

  const renderLogin = () => {
    return (
      <div>
        <h1 className="Title-Text mb-20">Sign in</h1>
        <div className="Textfield-With-Icon w-70">
          <Mail />
          <input
            type="email"
            name="user_email"
            placeholder="Type your email"
          />
        </div>
        <div className="Textfield-With-Icon w-70 mt-10">
          <Lock />
          <input
            type="password"
            name="user_email"
            placeholder="Type your password"
          />
        </div>
        <button className="Button Button__Primary w-70 mt-20">Sign in</button>
        <p className="Link-Text mt-30" onClick={handleSetRegisterForm}>
          Or create an account here.
        </p>
      </div>
    );
  }

  const renderRegister = () => {
    return (
      <div>
        <h1 className="Title-Text mb-20">Sign up</h1>
        <div className="Textfield-With-Icon w-70">
          <UserAdmin />
          <input
            type="text"
            name="user_name"
            placeholder="Type your name"
          />
        </div>
        <div className="Textfield-With-Icon w-70 mt-10">
          <Mail />
          <input
            type="email"
            name="user_email"
            placeholder="Type your email"
          />
        </div>
        <div className="Textfield-With-Icon w-70 mt-10">
          <Lock />
          <input
            type="password"
            name="user_email"
            placeholder="Type your password"
          />
        </div>
        <div className="Textfield-With-Icon w-70 mt-10">
          <Lock />
          <input
            type="password"
            name="user_email"
            placeholder="Confirm your password"
          />
        </div>
        <button className="Button Button__Primary w-70 mt-20">Sign up</button>
        <p className="Link-Text mt-30" onClick={handleSetLoginForm}>
          Already have an account?
        </p>
      </div>
    );
  }

  const render = () => {
    return (
      <div className="Access-Layout__Card-Content">
        {openForm === 'login' && renderLogin()}
        {openForm === 'register' && renderRegister()}
        <div className="bg-primary_light">
          <img
            src={LoginSvg}
            className="Image"
            alt="access"
            width="80%"
          />
        </div>
      </div>
    );
  }

  return render();
}

export default Login;