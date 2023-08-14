'use client';

import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getUserInfo, postUserLogin } from '../../api/auth';
import LoginForm from '../../components/LoginForm';
import { useTokenCookies } from '../../hooks/useTokenCookies';
import { useRouter } from 'next/navigation';

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
  const { setAccessToken, setRefreshToken } = useTokenCookies();

  const loginMutation = useMutation(postUserLogin, {
    onSuccess(data) {
      console.log(data);
      const { accessToken, refreshToken } = data.response;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      router.push('/mytodo');
    },
    onError(error) {
      console.log(error);
    },
  });

  const userInfoMutation = useMutation(getUserInfo, {
    onSuccess(data) {
      console.log(data);
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
