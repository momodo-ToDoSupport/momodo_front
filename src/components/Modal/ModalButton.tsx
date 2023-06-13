import React from 'react';

interface ModalProps {
  name: string;
}

const ModalButton: React.FC<ModalProps> = ({ name }) => {
  return <button className='mb-8 ml-5 text-left'>{name}</button>;
};

export default ModalButton;
