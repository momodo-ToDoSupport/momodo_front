import React from 'react';

interface InputProps {
  type: string;
  id: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, id, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      required
      placeholder={placeholder}
      className='w-full border border-grey-97 rounded-2xl p-3 bg-bg-color text-xs mt-2 placeholder-grey-65'
    />
  );
};

export default Input;
