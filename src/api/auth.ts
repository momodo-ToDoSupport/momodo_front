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
