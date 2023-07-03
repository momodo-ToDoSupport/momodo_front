import { LoginInput } from './../pages/login';
import axios from 'axios';
import { InputValue } from '../components/SignupForm';

const BASE_URL = 'http://3.86.91.142:8080';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

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
