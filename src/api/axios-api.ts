import { useMutation } from '@tanstack/react-query';
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from '../app/action';
import { putRefreshToken } from './auth';

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
    const accessToken = localStorage.getItem('accessToken');

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

accessInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const newAccessToken = await refreshAccessToken();
    console.log('refresh AccessToken!');
  }
);

// AccessToken 재발급
export const refreshAccessToken = async () => {
  const token = await getCookie('refreshToken');
  console.log('token', token);

  if (!token) {
    // TODO: 모달형태로 알림 제공하고 모달 내에서 로그인 페이지로 이동하는 버튼 제공하기
    alert('다시 로그인해주세요.');
    window.location.href = '/login';
  }

  try {
    const response = await putRefreshToken(token);

    if (response.accessToken) {
      const newAccessToken = response.accessToken;
      localStorage.setItem('accessToken', newAccessToken);
      return newAccessToken;
    }
  } catch (error) {
    // TODO: 요청 실패 또는 에러 발생 시 처리
    console.error('Failed to refresh accessToken:', error);
    return null;
  }
};
