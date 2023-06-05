import React from 'react';

const signupForm = () => {
  return (
    <form className=' flex flex-col'>
      <h1 className='text-2xl text-center py-10'>회원가입</h1>
      <label htmlFor='id' className='block text-xs pb-2'>
        아이디
      </label>
      <input
        type='text'
        id='id'
        name='username'
        required
        className='w-full border border-[#979797] rounded-xl p-2 bg-bg-color text-xs mb-4'
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
        className='w-full border border-[#979797] rounded-xl p-2 bg-bg-color text-xs mb-4'
        placeholder='비밀번호를 입력하세요'
      />
      <label htmlFor='name' className='block text-xs pb-2'>
        이름
      </label>
      <input
        type='text'
        id='name'
        name='name'
        required
        className='w-full border border-[#979797] rounded-xl p-2 bg-bg-color text-xs mb-4'
        placeholder='이름을 입력하세요'
      />

      <label htmlFor='email' className='block text-xs pb-2'>
        이메일
      </label>
      <div className='flex items-center mb-4'>
        <input
          type='text'
          id='email'
          name='email'
          required
          className='border border-[#979797] rounded-xl p-2 bg-bg-color text-xs flex-grow mr-2'
          placeholder='이메일을 입력하세요'
        />
        <label htmlFor='email-domain' className='text-xs pb-2 flex-grow-0'>
          @
        </label>
        <input
          type='text'
          id='email-domain'
          name='email-domain'
          required
          className='border border-[#979797] rounded-xl p-2 bg-bg-color text-xs flex-grow ml-2'
        />
      </div>
      <label htmlFor='phone' className='block text-xs pb-2'>
        전화번호
      </label>
      <input
        type='number'
        id='phone'
        name='phone'
        required
        className='w-full border border-[#979797] rounded-xl p-2 bg-bg-color text-xs mb-4'
        placeholder='전화번호를 입력하세요'
      />
    </form>
  );
};

export default signupForm;
