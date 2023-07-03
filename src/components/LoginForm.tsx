import React from 'react';
import Button from './Button';
import Input from './Input';
import Label from './Label';

interface LoginFormProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
  idRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
  errorMsg: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onChange,
  onSubmit,
  idRef,
  passwordRef,
  errorMsg,
}) => {
  return (
    <form onSubmit={onSubmit} className=' flex flex-col relative h-full w-full'>
      <h1 className='text-2xl text-center py-8'>로그인</h1>
      <Label htmlFor='userId' labelText='아이디'>
        <Input
          type='text'
          id='userId'
          placeholder='아이디를 입력하세요'
          ref={idRef}
          onChange={onChange}
        />
      </Label>
      <Label htmlFor='password' labelText='비밀번호'>
        <Input
          type='password'
          id='password'
          placeholder='비밀번호를 입력하세요'
          ref={passwordRef}
          onChange={onChange}
        />
      </Label>
      <p>{errorMsg}</p>
      <div className='absolute bottom-7 w-full'>
        <Button buttonSize='large' disabled={false}>
          로그인
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
