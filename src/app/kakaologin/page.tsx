'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { postKakaoLogin, sendKakaoToken } from '../../service/kakao-login';
// import { useTokenCookies } from '../../hooks/useTokenCookies';

const KakaoLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  // const { setAccessToken, setRefreshToken } = useTokenCookies();

  const kakaoLoginMutation = useMutation((code: string | string[]) =>
    postKakaoLogin(code)
  );

  useEffect(() => {
    if (code && !kakaoLoginMutation.isLoading) {
      kakaoLoginMutation.mutate(code);
    }
  });

  useEffect(() => {
    const handleKakaoLoginSuccess = async () => {
      if (kakaoLoginMutation.isSuccess) {
        const kakaoAccesstoken = kakaoLoginMutation.data.access_token;

        try {
          const response = await sendKakaoToken(kakaoAccesstoken);
          console.log(response.response);
          const { accessToken } = response.response;
          localStorage.setItem('accessToken', accessToken);
          router.push('/mytodo');
        } catch (error) {
          console.log(error);
        }
      }
    };
    handleKakaoLoginSuccess();
  }, [kakaoLoginMutation.isSuccess, kakaoLoginMutation.data, router]);

  return <div>로그인중...</div>;
};

export default KakaoLogin;
