import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProps, UserAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, loginWithGoogle } = UserAuth() as ContextProps;
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      loginWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(currentUser){
      navigate('/chat')
    }
  },[currentUser])

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Firebase Web Chat App</h1>
          <p className='py-6'></p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                className='input input-bordered'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
                className='input input-bordered'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>
            <div className='form-control mt-6'>
              <button onClick={handleLogin} className='btn'>
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
