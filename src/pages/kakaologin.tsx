import { useRouter } from 'next/router';
import React from 'react';
import { useMutation } from 'react-query';
import { postKakaoLogin } from '../api/kakao-login';

const KakaoLogin = () => {
  const router = useRouter();
  const { code } = router.query;
  console.log(code);

  // const mutation = useMutation(postKakaoLogin, {
  //   onSuccess(data) {},
  // });

  return <div>KakaoLogin</div>;
};
export default KakaoLogin;
