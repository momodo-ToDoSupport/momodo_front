import React from 'react';

interface ModalProps {
  name: string;
  closeModal(): void;
}

const ModalButton: React.FC<ModalProps> = ({ name, closeModal }) => {
  return <button onClick={()=>closeModal()} className='mb-3 ml-5 text-base'>{name}</button>;
};

export default ModalButton;
