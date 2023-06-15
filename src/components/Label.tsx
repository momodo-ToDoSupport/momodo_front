import React from 'react';

interface LabelProps {
  htmlFor: string;
  children?: React.ReactElement<HTMLInputElement>;
  labelText: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, labelText }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-xs ${htmlFor === 'email' ? '' : 'pb-4'} ${
        htmlFor === 'email-domain' && 'px-3 pb-0 pt-5'
      }`}
    >
      {labelText}
      {children}
    </label>
  );
};

export default Label;
