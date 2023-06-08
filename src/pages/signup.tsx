import React from 'react';
import Button from '../components/Button';
import SignupForm from '../components/SignupForm';

const signup = () => {
  return (
    <div className='p-6 pb-16 flex flex-col justify-between h-screen'>
      <SignupForm />
      <Button buttonSize='large' disabled={true}>
        회원가입
      </Button>
    </div>
  );
};

export default signup;
