import React from 'react';
import Button from '../components/Button';
import LoginForm from '../components/LoginForm';

const login = () => {
  return (
    <div className='p-6 pb-16 flex flex-col justify-between h-screen'>
      <LoginForm />
      <Button buttonSize='large' disabled={true}>
        로그인
      </Button>
    </div>
  );
};

export default login;
