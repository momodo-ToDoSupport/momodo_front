import React, { useEffect } from 'react';

const KakaoLogin = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
  }, []);
  return <div>KakaoLogin</div>;
};
export default KakaoLogin;
