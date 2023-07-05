import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { postUserLogin } from '../api/axios-api';
import LoginForm from '../components/LoginForm';
import { useCookies } from 'react-cookie';

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
  const [cookies, setCookie] = useCookies(['refreshtoken']);

  const mutation = useMutation(postUserLogin, {
    onSuccess(data) {
      const { accessToken, refreshToken } = data.response;
      localStorage.setItem('accessToken', accessToken);
      setCookie('refreshtoken', refreshToken, {
        path: '/',
        httpOnly: true,
      });

      router.push('/mytodo');
    },
    onError(error) {
      setErrorMsg('아이디 또는 비밀번호가 일치하지 않습니다.');
      console.log(error);
    },
  });

  // useEffect(() => {
  //   const cookieValue = cookies['refreshtoken'];

  //   if (cookieValue) {
  //     console.log('있당');
  //     console.log(cookieValue);
  //   }

  //   if (!cookieValue) {
  //     console.log('없당');
  //   }
  // }, [cookies]);

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
    mutation.mutate(inputValue);
  };

  return (
    <div className='p-6 pb-16 flex flex-col justify-between h-screen'>
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        errorMsg={errorMsg}
      />
    </div>
  );
};

export default Login;
