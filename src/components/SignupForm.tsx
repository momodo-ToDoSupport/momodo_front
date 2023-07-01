import React from 'react';
import Button from './Button';
import Input from './Input';
import Label from './Label';

interface SignupFormProps {
  onBlur(e: React.FocusEvent<HTMLInputElement>): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
  disabled: boolean;
}

const signupForm: React.FC<SignupFormProps> = ({
  onBlur,
  onChange,
  onSubmit,
  disabled,
}) => {
  return (
    <form className=' flex flex-col' onSubmit={onSubmit}>
      <h1 className='text-2xl text-center py-2'>회원가입</h1>

      <Label htmlFor='userId' labelText='아이디'>
        <Input
          type='text'
          id='userId'
          placeholder='아이디를 입력하세요'
          onBlur={onBlur}
          onChange={onChange}
        />
      </Label>

      <Label htmlFor='password' labelText='비밀번호'>
        <Input
          type='password'
          id='password'
          placeholder='비밀번호를 입력하세요'
          onBlur={onBlur}
          onChange={onChange}
        />
      </Label>

      <Label htmlFor='name' labelText='이름'>
        <Input
          type='text'
          id='name'
          placeholder='이름을 입력하세요'
          onBlur={onBlur}
          onChange={onChange}
        />
      </Label>

      <Label htmlFor='email' labelText='이메일'>
        <Input
          type='text'
          id='email'
          placeholder='이메일을 입력하세요'
          onBlur={onBlur}
          onChange={onChange}
        />
      </Label>

      <Label htmlFor='phone' labelText='전화번호'>
        <Input
          type='number'
          id='phone'
          placeholder='전화번호를 입력하세요'
          onBlur={onBlur}
          onChange={onChange}
        />
      </Label>
      <Button buttonSize='large' disabled={disabled}>
        회원가입
      </Button>
    </form>
  );
};

export default signupForm;
