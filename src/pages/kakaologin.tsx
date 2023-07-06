import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { postKakaoLogin } from '../api/kakao-login';

const KakaoLogin = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
  }, []);

  // const mutation = useMutation(postKakaoLogin, {
  //   onSuccess(data) {},
  // });

  return <div>KakaoLogin</div>;
};
export default KakaoLogin;
