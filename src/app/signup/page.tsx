'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postSignup } from '../../api/auth';
import SignupForm, { InputValue } from '../../components/SignupForm';

const Signup = () => {
  const initialState: InputValue = {
    userId: '',
    password: '',
    name: '',
    email: '',
    phone: '',
  };
  const [isBlurs, setIsBlurs] = useState<InputValue>({
    userId: false,
    password: false,
    name: false,
    email: false,
    phone: false,
  });
  const [inputValue, setInputValue] = useState<InputValue>({ ...initialState });
  const [errors, setErrors] = useState<InputValue>({ ...initialState });
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAllErrorsEmpty = Object.values(errors).every(
      (value) => value === ''
    );
    setIsFormValid(isAllErrorsEmpty);
  }, [errors]);

  const submitMutation = useMutation(postSignup, {
    onSuccess(data) {
      console.log(data);
      router.push('/login');
      alert('회원가입이 완료되었습니다 😄');
    },
    onError(error) {
      console.error(error);
      if (error.response?.data?.error.message === '회원 중복') {
        alert('이미 사용 중인 아이디입니다. 다른 아이디를 입력해주세요.');
      }
    },
  });

  const isValids = (target: string, targetName: string) => {
    if (targetName === 'userId') {
      return /^[a-z]+[a-zA-Z0-9]{5,19}$/g.test(target);
    } else if (targetName === 'password') {
      return /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/g.test(target);
    } else if (targetName === 'email') {
      return /^[A-Z0-9a-z._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g.test(target);
    } else if (targetName === 'phone') {
      return /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/g.test(target);
    } else if (targetName === 'name') {
      return target === '' ? false : true;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length !== 0) {
      setIsBlurs({ ...isBlurs, [name]: true });
    }
    if (!value) {
      setErrors({ ...errors, [name]: '필수 정보입니다.' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });

    if (value) {
      const errorMessages: InputValue = {
        userId:
          '6자 이상 20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
        password: '비밀번호는 6자 이상, 영소문자를 포함해야 합니다.',
        phone: '핸드폰번호는 01*으로 시작해야 하는 10~11자리 숫자여야 합니다.',
        email: '유효한 이메일 형식으로 입력해주세요.',
        name: '이름을 입력해주세요.',
      };

      if (!isValids(value, name)) {
        setErrors({ ...errors, [name]: errorMessages[name] });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    } else {
      setErrors({ ...errors, [name]: '필수 정보입니다.' });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitMutation.mutate({
      ...inputValue,
      type: 'MOMODO',
    });
  };

  return (
    <div className='p-6 pb-16 flex flex-col justify-between h-screen w-full'>
      <SignupForm
        onBlur={handleBlur}
        isBlurs={isBlurs}
        onChange={handleChange}
        onSubmit={handleSubmit}
        disabled={!isFormValid}
        errorMsg={errors}
      />
    </div>
  );
};

export default Signup;
