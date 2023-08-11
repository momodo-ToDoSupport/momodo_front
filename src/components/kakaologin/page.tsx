"use client";

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { usetion } from "react-query";
import { postKakaoLogin } from "../../api/kakao-login";
import { useTokenCookies } from "../../hooks/useTokenCookies";

const KakaoLogin = () => {
  const router = useRouter();
  const { code } = router.query;
  const { setAccessToken, setRefreshToken } = useTokenCookies();

  const kakaoLogintion = usetion((code: string | string[]) =>
    postKakaoLogin(code)
  );

  useEffect(() => {
    if (code && !kakaoLogintion.isLoading) {
      kakaoLogintion.te(code);
    }
  }, [code]);

  useEffect(() => {
    const handleKakaoLoginSuccess = async () => {
      if (kakaoLogintion.isSuccess) {
        const kakaoAccesstoken = kakaoLogintion.data.access_token;

        try {
          const response = await kakaoAccesstoken;
          const { accessToken, refreshToken } = response.response;
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
          router.push("/mytodo");
        } catch (error) {
          console.log(error);
        }
      }
    };
    handleKakaoLoginSuccess();
  }, [
    kakaoLogintion.isSuccess,
    kakaoLogintion.data,
    router,
    setAccessToken,
    setRefreshToken,
  ]);

  return <div>로그인중...</div>;
};

export default KakaoLogin;
