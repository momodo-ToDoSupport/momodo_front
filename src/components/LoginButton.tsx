import React from 'react';
import kakao from '../../public/images/kakao-logo.svg';
import google from '../../public/images/google-logo.svg';
import momodo from '../../public/images/logo.svg';
import Image from 'next/image';

const imageMapping = {
  kakao,
  google,
  momodo,
};

const LoginButton = ({ children, type }) => {
  let imgSrc = imageMapping[type];
  return (
    <button className='w-5/6 border-main-color border-solid rounded-full py-3 relative mb-5'>
      <Image src={imgSrc} width={18} height={18} className='absolute ml-5 mt-0.5' />
      {children}
    </button>
  );
};

export default LoginButton;
