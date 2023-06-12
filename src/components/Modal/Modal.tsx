import React from 'react';

const Modal = ({ children }) => {
  return (
    <article className='bg-grey-44 z-10 w-full fixed bottom-0 left-0 rounded-tr-3xl rounded-tl-3xl'>
      <h1 className='hidden'>모달창</h1>
      <span className='block w-1/5 h-1 bg-grey-65 rounded-md mx-auto mt-4 mb-8 ' />
      <div className='w-full flex flex-col '>{children}</div>
    </article>
  );
};

export default Modal;
