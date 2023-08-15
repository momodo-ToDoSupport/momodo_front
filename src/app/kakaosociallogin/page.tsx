'use client';
import Link from 'next/link';
import React from 'react';
import { kakaoAuthUrl } from '../../api/kakao-login';

const page = () => {
  return <Link href={kakaoAuthUrl}>카카오 로그인</Link>;
};

export default page;
