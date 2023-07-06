import React from 'react';

interface LabelProps {
  htmlFor: string;
  children?: React.ReactElement<HTMLInputElement>;
  labelText: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, labelText }) => {
  return (
    <label htmlFor={htmlFor} className='block text-xs pb-2 px-3 pt-5 relative'>
      {labelText}
      {children}
    </label>
  );
};

export default Label;
