import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';

export interface LoginInput {
  userId: string;
  password: string;
}

const Login = () => {

  return (
    <div className='p-6 pb-16 flex flex-col justify-between h-screen w-full'>
      <LoginForm />
    </div>
  );
};

export default Login;
