import axios from 'axios';
import { instance } from './axios-api';

const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
const KAKAO_BASE_URL = process.env.NEXT_PUBLIC_KAKAO_BASE_URL;
export const kakaoAuthUrl = `${KAKAO_BASE_URL}/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

const kakaoInstance = axios.create({
  baseURL: KAKAO_BASE_URL,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
  },
});

export const postKakaoLogin = async (code: string | string[]) => {
  const body = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`;

  const response = await kakaoInstance.post('/oauth/token', body);
  return response.data;
};

export const sendKakaoToken = async (accesstoken: string) => {
  const response = await instance.post('/api/v1/social-login/kakao', {
    loginType: 'KAKAO',
    accessToken: accesstoken,
  });
  return response.data.data;
};

export const getKakaoUser = async (kakaoToken: string) => {
  const response = await instance.get('https://kapi.kakao.com/v2/user/me', {
    headers: {
      Authorization: `Bearer ${kakaoToken}`,
    },
  });
  return response.data;
};
