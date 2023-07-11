import { useState } from 'react';

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log('열렸음');
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log('닫혔음');
  };

  return { modalOpen, openModal, closeModal };
};

export default useModal;
