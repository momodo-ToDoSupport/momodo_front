'use client';

import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getUserInfo, postUserLogin } from '../../service/auth';
import LoginForm from '../../components/LoginForm';
import { useRouter } from 'next/navigation';
import { setCookie } from '../action';

export interface LoginInput {
  userId: string;
  password: string;
}

const Login = () => {
  const [inputValue, setInputValue] = useState<LoginInput>({
    userId: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();
  const isInputValue = !inputValue.userId || !inputValue.password;

  const loginMutation = useMutation(postUserLogin, {
    onSuccess(data) {
      const { accessToken, refreshToken } = data.response;
      setCookie([
        { key: 'accessToken', value: accessToken },
        { key: 'refreshToken', value: refreshToken },
      ]);
      router.push('/mytodo');
    },
    onError(error) {
      console.log(error);
    },
  });

  const userInfoMutation = useMutation(getUserInfo, {
    onSuccess(data) {
      localStorage.setItem('userId', data.name);
      localStorage.setItem('tier', data.tier);
    },
    onError(error) {
      console.error(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.userId) {
      return setErrorMsg('아이디를 입력해주세요.');
    }
    if (!inputValue.password) {
      return setErrorMsg('비밀번호를 입력해주세요.');
    }
    loginMutation.mutate(inputValue);
    userInfoMutation.mutate(inputValue.userId);
  };

  return (
    <div className='p-6 pb-16 flex flex-col justify-between h-screen w-full'>
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        errorMsg={errorMsg}
        disabled={isInputValue}
      />
    </div>
  );
};

export default Login;
