'use client';
import Link from 'next/link';
import React from 'react';
import { kakaoAuthUrl } from '../../api/kakao-login';
import Button from '../../components/Button';

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Link href={kakaoAuthUrl}>
        <Button buttonSize='large'>카카오 계정으로 로그인하기</Button>
      </Link>
    </div>
  );
};

export default page;
