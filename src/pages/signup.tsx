import React, { useState } from 'react';
import Button from '../components/Button';
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
  const [inputValue, setInputValue] = useState<InputValue>({ ...initialState });
  const [errors, setErrors] = useState<InputValue>({ ...initialState });
  const [isBlurs, setIsBlurs] = useState({
    userId: false,
    password: false,
    name: false,
    email: false,
    phone: false,
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

  console.log(isBlurs);
  // console.log(inputValue);
  console.log(errors);

  return (
    <div className='p-6 pb-16 flex flex-col justify-between h-screen'>
      <SignupForm onBlur={handleBlur} onChange={handleChange} />
      <Button buttonSize='large' disabled={true}>
        회원가입
      </Button>
    </div>
  );
};

export default Signup;
