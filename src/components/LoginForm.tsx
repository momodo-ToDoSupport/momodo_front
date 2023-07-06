import React from 'react';
import Button from './Button';
import Input from './Input';
import Label from './Label';

interface LoginFormProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
  errorMsg: string;
  disabled: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onChange,
  onSubmit,
  errorMsg,
  disabled,
}) => {
  return (
    <form onSubmit={onSubmit} className=' flex flex-col relative h-full w-full'>
      <h1 className='text-2xl text-center py-8'>로그인</h1>
      <Label htmlFor='userId' labelText='아이디'>
        <Input
          type='text'
          id='userId'
          placeholder='아이디를 입력하세요'
          onChange={onChange}
        />
      </Label>
      <Label htmlFor='password' labelText='비밀번호'>
        <Input
          type='password'
          id='password'
          placeholder='비밀번호를 입력하세요'
          onChange={onChange}
        />
      </Label>
      <p className='pl-4 pt-2 text-sm text-main-color'>{errorMsg}</p>
      <div className='absolute bottom-7 w-full'>
        <Button buttonSize='large' disabled={disabled}>
          로그인
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
