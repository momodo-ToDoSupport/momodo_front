import React from 'react';
import Input from './Input';
import Label from './Label';

const LoginForm = () => {
  return (
    <form className=' flex flex-col'>
      <h1 className='text-2xl text-center py-10'>로그인</h1>
      <Label htmlFor='userId' labelText='아이디'>
        <Input type='text' id='userId' placeholder='아이디를 입력하세요' />
      </Label>
      <Label htmlFor='password' labelText='비밀번호'>
        <Input type='password' id='password' placeholder='비밀번호를 입력하세요' />
      </Label>
    </form>
  );
};

export default LoginForm;
