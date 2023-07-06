import axios from 'axios';

//TODO: 로그인 브랜치 머지 후, .env파일에 추가하기
const REST_API_KEY = '4e1139581b80cf6a908aecebbba2492f';
const REDIRECT_URI = 'http://localhost:3000/kakaologin';
const KAKAO_AUTH_URL = 'https://kauth.kakao.com';
export const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

const kakaoInstance = axios.create({
  baseURL: KAKAO_AUTH_URL,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

export const postKakaoLogin = async (code: string) => {
  const body = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`;

  const response = await kakaoInstance.post('/oauth/token', body);
  return response.data;
};
