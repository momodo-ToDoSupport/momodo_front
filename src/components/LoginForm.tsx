import React from 'react';

const LoginForm = () => {
  return (
    <form className=' flex flex-col'>
      <h1 className='text-2xl text-center py-10'>로그인</h1>
      <label htmlFor='id' className='block text-xs pb-2'>
        아이디
      </label>
      <input
        type='text'
        id='id'
        name='username'
        required
        className='w-full border border-[#979797] rounded-xl p-2 bg-bg-color text-xs mb-5'
        placeholder='아이디를 입력하세요'
      />
      <label htmlFor='password' className='block text-xs pb-2'>
        비밀번호
      </label>
      <input
        type='password'
        id='password'
        name='password'
        required
        className='w-full border border-[#979797] rounded-xl p-2 bg-bg-color text-xs'
        placeholder='비밀번호를 입력하세요'
      />
    </form>
  );
};

export default LoginForm;
