import { instance } from './axios-api';
import { LoginInput } from '../app/login/page';
import { InputValue } from '../components/SignupForm';

export const postSignup = async (formdata: InputValue) => {
  const response = await instance.post('/api/v1/user-app', formdata);
  return response.data;
};

export const postUserLogin = async (formdata: LoginInput) => {
  const response = await instance.post(
    '/api/v1/authentication/token',
    formdata
  );

  return response.data;
};

export const getUserInfo = async (userId: string) => {
  const response = await instance.get(`/api/v1/user-app/${userId}`);
  return response.data;
};

export const putRefreshToken = async (token: string | undefined) => {
  const response = await instance.put('/api/v1/authentication/token', token);
  return response.data.response;
};
