'use client';

import Image from 'next/image';
import React from 'react';
import momodoLogo from '../../../public/images/momodo.svg';
import calendarIcon from '../../../public/images/calendarIcon.svg';
import menuIcon from '../../../public/images/menuIcon.svg';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import ModalButton from '../Modal/ModalButton';
import Link from 'next/link';

interface MainHeaderProps {
  toggleCalender?(): void;
  option: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ toggleCalender, option }) => {
  const { modalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <header className='flex justify-center relative mb-10'>
        <Image src={momodoLogo} alt='모모두' width={73} className='' />
        {option === 'todo' ? (
          <button onClick={toggleCalender}>
            <Image
              src={calendarIcon}
              alt='캘린더 버튼'
              className='absolute right-0 top-0'
            />
          </button>
        ) : (
          <button className='absolute right-0 top-0' onClick={openModal}>
            <Image src={menuIcon} alt='메뉴 버튼' />
          </button>
        )}
      </header>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <Link href='/editprofile'>
            <ModalButton name='프로필 수정하기' />
          </Link>
          <ModalButton name='로그아웃' />
        </Modal>
      )}
    </>
  );
};

export default MainHeader;
