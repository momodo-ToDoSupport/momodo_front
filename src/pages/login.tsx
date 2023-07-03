import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { postUserLogin } from '../api/axios-api';
import Button from '../components/Button';
import LoginForm from '../components/LoginForm';

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
  const idRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const router = useRouter();

  const mutation = useMutation(postUserLogin, {
    onSuccess(data) {
      console.log(data);
      router.push('/mytodo');
    },
    onError(error) {
      idRef.current.focus();
      setErrorMsg('아이디 또는 비밀번호가 일치하지 않습니다.');
      console.log(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.userId) {
      idRef.current.focus();
      return setErrorMsg('아이디를 입력해주세요.');
    }
    if (!inputValue.password) {
      passwordRef.current.focus();
      return setErrorMsg('비밀번호를 입력해주세요.');
    }
    mutation.mutate(inputValue);
  };

  return (
    <div className='p-6 pb-16 flex flex-col justify-between h-screen'>
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        idRef={idRef}
        passwordRef={passwordRef}
        errorMsg={setErrorMsg}
      />
    </div>
  );
};

export default Login;
