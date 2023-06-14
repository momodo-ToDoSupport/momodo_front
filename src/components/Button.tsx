import React from 'react';

interface OwnProps {
  children: string;
  onClick(): void;
  disabled: boolean;
  buttonSize: 'small' | 'medium' | 'large';
}

const Button: React.FC<OwnProps> = ({ children, onClick, disabled, buttonSize }) => {
  const buttonActive = disabled ? 'bg-[#87712D] cursor-not-allowed ' : 'bg-[#F0C23A] text-black';

  let buttonSizeClass = '';
  switch (buttonSize) {
    case 'small':
      buttonSizeClass = 'py-2 px-5 text-sm rounded-3xl';
      break;
    case 'medium':
      buttonSizeClass = 'w-1/2 py-3.5  rounded-full mx-auto my-0 block';
      break;
    case 'large':
      buttonSizeClass = 'w-full py-3.5 px-8 text-lg rounded-full font-medium mx-auto my-0 block';
      break;
    default:
      buttonSizeClass = 'py-3.5 px-6 rounded-full mx-auto my-0 block';
      break;
  }

  return (
    <button
      className={`${buttonActive} ${buttonSizeClass}`}
      onClick={onClick}
      disabled={disabled}
      style={{ color: 'black' }}
    >
      {children}
    </button>
  );
};

export default Button;
