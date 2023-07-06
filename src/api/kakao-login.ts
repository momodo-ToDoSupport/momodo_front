import axios from 'axios';

//TODO: 로그인 브랜치 머지 후, .env파일에 추가하기
const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
const KAKAO_BASE_URL = process.env.NEXT_PUBLIC_KAKAO_BASE_URL;
export const kakaoAuthUrl = `${KAKAO_BASE_URL}/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

const kakaoInstance = axios.create({
  baseURL: KAKAO_BASE_URL,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

export const postKakaoLogin = async (code: string) => {
  const body = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`;

  const response = await kakaoInstance.post('/oauth/token', body);
  return response.data;
};
