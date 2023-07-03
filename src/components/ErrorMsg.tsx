import React from 'react';

interface ErrorMsgProps {
  msg: string | boolean;
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ msg }) => {
  return <p className='text-xxs text-main-color absolute pt-1 pl-1'>{msg}</p>;
};

export default ErrorMsg;
