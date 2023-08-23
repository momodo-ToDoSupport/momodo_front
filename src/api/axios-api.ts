// import { getCookie, useCookies } from 'cookies-next';
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from '../app/action';

interface MoAxiosRequestConfig extends AxiosRequestConfig {
  headers: {
    [key: string]: string | undefined;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const accessInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

accessInstance.interceptors.request.use(
  async (config) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const newAccessToken = accessToken || (await refreshAccessToken());

      console.log('intercepter newAccessToken', newAccessToken);

      if (newAccessToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };
      }

      return config;
    } catch (error) {
      console.log(error);
      localStorage.removeItem('accessToken');
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AccessToken 재발급
export const refreshAccessToken = async () => {
  const token = await getCookie('refreshToken');

  if (!token) {
    // TODO: 모달형태로 알림 제공하고 모달 내에서 로그인 페이지로 이동하는 버튼 제공하기
    alert('다시 로그인해주세요.');
    window.location.href = '/login';
  }

  try {
    const response = await accessInstance.put('/api/v1/authentication/token', {
      token,
    });

    // TODO: 추후 access토큰 만료시 변경하기
    console.log(response.data);

    if (response.data?.response.accessToken) {
      const newAccessToken = response.data.response.accessToken;
      console.log(newAccessToken);
      localStorage.setItem('accessToken', newAccessToken);
      return newAccessToken;
    } else {
      // TODO: 새로운 accessToken을 받아오지 못한 경우 처리
      return null;
    }
  } catch (error) {
    // TODO: 요청 실패 또는 에러 발생 시 처리
    console.error('Failed to refresh accessToken:', error);
    return null;
  }
};
