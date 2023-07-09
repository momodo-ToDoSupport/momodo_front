import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { postKakaoLogin, sendKakaoToken } from '../api/kakao-login';

const KakaoLogin = () => {
  const router = useRouter();
  const { code } = router.query;
  console.log(code);

  useEffect(() => {
    if (code) {
      postKakaoLogin(code)
        .then((data) => {
          console.log(data);
          console.log(data.access_token);
          const accesstoken = data.access_token;
          sendKakaoToken(accesstoken);
        })
        .catch((error) => {
          console.error(error);
          // 에러 처리 로직 추가
        });
    }
  }, [code]);

  return <div>KakaoLogin</div>;
};
export default KakaoLogin;
