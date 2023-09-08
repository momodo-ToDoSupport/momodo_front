import React, { ReactNode, useRef } from 'react';
import useModal from '../../hooks/useModal';
import Link from 'next/link';

interface ModalProps {
  type?: string | null;
  closeModal(): void;
}

const Modal: React.FC<ModalProps> = ({ type, closeModal }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <article className='fixed inset-0 z-50 bg-grey-44 bg-opacity-30'>
      <h2 className='hidden'>모달창</h2>
      <div className='fixed bottom-0 w-full flex flex-col items-start p-5 bg-grey-44 rounded-t-2xl animate-slide-in'>
        <div className='before'></div>
        <button onClick={() => handleLogout()} className='mb-3 ml-5 text-base'>
          로그아웃
        </button>
        <Link href={`/editprofile`} className='mb-3 ml-5 text-base'>
          프로필 수정
        </Link>
        <button onClick={() => closeModal()} className='mb-3 ml-5 text-base'>
          취소
        </button>
      </div>
    </article>
  );
};

export default Modal;
