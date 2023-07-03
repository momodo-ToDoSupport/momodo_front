import React from 'react';
import Button from './Button';
import Input from './Input';
import Label from './Label';

export interface InputValue {
  userId: string | boolean;
  password: string | boolean;
  name: string | boolean;
  email: string | boolean;
  phone: string | boolean;
  [key: string]: string | boolean;
}

interface SignupFormProps {
  onBlur(e: React.FocusEvent<HTMLInputElement>): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
  isBlurs: InputValue;
  disabled: boolean;
  errorMsg: InputValue;
}

const SignupForm: React.FC<SignupFormProps> = ({
  onBlur,
  onChange,
  onSubmit,
  isBlurs,
  disabled,
  errorMsg,
}) => {
  return (
    <form className=' flex flex-col relative h-full w-full' onSubmit={onSubmit}>
      <h1 className='text-2xl text-center py-5'>회원가입</h1>

      <Label htmlFor='userId' labelText='아이디'>
        <>
          <Input
            type='text'
            id='userId'
            placeholder='아이디를 입력하세요'
            onBlur={onBlur}
            onChange={onChange}
          />
          {!isBlurs.userId && errorMsg.userId && (
            <p className='text-xxs text-main-color absolute pt-1 pl-1'>
              {errorMsg.userId}
            </p>
          )}
        </>
      </Label>

      <Label htmlFor='password' labelText='비밀번호'>
        <>
          <Input
            type='password'
            id='password'
            placeholder='비밀번호를 입력하세요'
            onBlur={onBlur}
            onChange={onChange}
          />
          {errorMsg.password && (
            <p className='text-xxs text-main-color absolute pt-1 pl-1'>
              {errorMsg.password}
            </p>
          )}
        </>
      </Label>

      <Label htmlFor='name' labelText='이름'>
        <>
          <Input
            type='text'
            id='name'
            placeholder='이름을 입력하세요'
            onBlur={onBlur}
            onChange={onChange}
          />
          {errorMsg.name && (
            <p className='text-xxs text-main-color absolute pt-1 pl-1'>
              {errorMsg.name}
            </p>
          )}
        </>
      </Label>

      <Label htmlFor='email' labelText='이메일'>
        <>
          <Input
            type='text'
            id='email'
            placeholder='이메일을 입력하세요'
            onBlur={onBlur}
            onChange={onChange}
          />
          {errorMsg.email && (
            <p className='text-xxs text-main-color absolute pt-1 pl-1'>
              {errorMsg.email}
            </p>
          )}
        </>
      </Label>

      <Label htmlFor='phone' labelText='전화번호'>
        <>
          <Input
            type='number'
            id='phone'
            placeholder='전화번호를 입력하세요'
            onBlur={onBlur}
            onChange={onChange}
          />
          {errorMsg.phone && (
            <p className='text-xxs text-main-color absolute pt-1 pl-1'>
              {errorMsg.phone}
            </p>
          )}
        </>
      </Label>
      <div className='absolute bottom-7 w-full'>
        <Button buttonSize='large' disabled={disabled}>
          회원가입
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
