import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { postSignup } from '../api/axios-api';
import SignupForm from '../components/SignupForm';

interface InputValue {
  userId: string;
  type: string;
  password: string;
  name: string;
  email: string;
  phone: string;
}

const Signup = () => {
  const initialState: InputValue = {
    userId: '',
    type: 'MOMODO',
    password: '',
    name: '',
    email: '',
    phone: '',
  };
  const [isBlurs, setIsBlurs] = useState({
    userId: false,
    password: false,
    name: false,
    email: false,
    phone: false,
  });
  const [inputValue, setInputValue] = useState<InputValue>({ ...initialState });
  const [errors, setErrors] = useState<InputValue>({ ...initialState });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isAllBlurred = Object.values(inputValue).every(
      (value) => value.length !== 0
    );
    setIsFormValid(isAllBlurred);
  }, [inputValue]);

  const submitMutation = useMutation(postSignup, {
    onSuccess(data) {
      console.log(data);
      alert('성공인가?');
    },
    onError(error) {
      console.error(error);
    },
  });

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
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitMutation.mutate({
      ...inputValue,
    });
  };

  return (
    <div className='p-6 pb-16 flex flex-col justify-between h-screen'>
      <SignupForm
        onBlur={handleBlur}
        onChange={handleChange}
        onSubmit={handleSubmit}
        disabled={!isFormValid}
      />
    </div>
  );
};

export default Signup;
