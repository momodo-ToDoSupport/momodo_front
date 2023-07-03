import React from 'react';

interface InputProps {
  type: string;
  id: string;
  placeholder?: string;
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  ref?: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  onBlur,
  onChange,
  ref,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      required
      placeholder={placeholder}
      className='w-full border border-grey-97 rounded-2xl p-3 bg-bg-color text-xs mt-2 placeholder-grey-65'
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
    />
  );
};

export default Input;
