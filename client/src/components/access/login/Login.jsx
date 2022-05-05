import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Lock, UserAdmin, Mail } from 'grommet-icons';

function Login() {
  const [openForm, setOpenForm] = useState('login');
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleSetLoginForm = () => {
    setOpenForm('login');
  }
  const handleSetRegisterForm = () => {
    setOpenForm('register');
  }

  const renderLogin = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="Title-Text mb-20">Sign in</h1>
        <div className="Textfield-With-Icon w-70">
          <Mail />
          <input
            type="email"
            name="user_email"
            placeholder="Type your email"
            {...register('user_email', { required: true })}
          />
        </div>
        <div className="Textfield-With-Icon w-70 mt-10">
          <Lock />
          <input
            type="password"
            name="user_email"
            placeholder="Type your password"
            {...register('user_password', { required: true })}
          />
        </div>
        <button className="Button Button__Primary Button__Lg w-70 mt-20">
          Sign in
        </button>
        <p className="Link-Text mt-30" onClick={handleSetRegisterForm}>
          Or create an account here.
        </p>
      </form>
    );
  }

  const renderRegister = () => {
    return (
      <form>
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
        <button className="Button Button__Primary Button__Lg w-70 mt-20">Sign up</button>
        <p className="Link-Text mt-30" onClick={handleSetLoginForm}>
          Already have an account?
        </p>
      </form>
    );
  }

  const render = () => {
    return (
      <div className="Access-Layout__Card-Content">
        {openForm === 'login' && renderLogin()}
        {openForm === 'register' && renderRegister()}
        <div className="flex flex-1 align-center justify-center bg-primary">
          <h1 className="display-1 fw-bolder text-white pl-20">
            Get started creating your todo's for you and your teams!
          </h1>
        </div>
      </div>
    );
  }

  return render();
}

export default Login;