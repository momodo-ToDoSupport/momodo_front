import React from 'react';

interface InputProps {
  type: string;
  id: string;
  placeholder?: string;
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      name={props.id}
      className='w-full border border-grey-97 rounded-2xl p-3 bg-bg-color text-xs mt-2 placeholder-grey-65'
      required
      {...props}
    />
  );
};

export default Input;
