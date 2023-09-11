'use client';

import React from 'react';
import kakao from '../../../public/images/kakao-logo.svg';
import momodo from '../../../public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

interface LoginButtonProps {
  children: React.ReactNode;
  type: 'kakao' | 'momodo';
  href: string;
}

const imageMapping = {
  kakao,
  momodo,
};

const LoginButton: React.FC<LoginButtonProps> = ({ children, type, href }) => {
  let imgSrc = imageMapping[type];
  return (
    <Link href={href}>
      <button className='w-5/6 border-main-color border-solid rounded-full py-3 relative mb-5'>
        <Image
          src={imgSrc}
          width={18}
          height={18}
          className='absolute ml-5 mt-0.5'
          alt={imgSrc}
        />
        {children}
      </button>
    </Link>
  );
};

export default LoginButton;
