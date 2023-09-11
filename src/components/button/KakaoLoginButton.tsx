'use client';

import React from 'react';
import kakao from '../../public/images/kakao-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { kakaoAuthUrl } from '../../service/kakao-login';

interface LoginButtonProps {
  children: React.ReactNode;
  type: 'kakao';
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, type }) => {
  return (
    <Link href={kakaoAuthUrl}>
      <button className='w-5/6 border-main-color border-solid rounded-full py-3 relative mb-5'>
        <Image
          src={kakao}
          width={18}
          height={18}
          className='absolute ml-5 mt-0.5'
          alt={type}
        />
        {children}
      </button>
    </Link>
  );
};

export default LoginButton;
