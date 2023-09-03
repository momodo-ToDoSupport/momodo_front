
'use client'

import Image from 'next/image';
import momodoLogo from '../../../public/images/momodo.svg';
import calendarIcon from '../../../public/images/calendarIcon.svg';
import menuIcon from '../../../public/images/menuIcon.svg';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import ModalButton from '../Modal/ModalButton';
import Link from 'next/link';


const MainHeader: React.FC<MainHeaderProps> = ({ toggleCalender, option }) => {
  const { modalOpen, openModal, closeModal } = useModal();

import logoutIcon from '../../../public/images/logoutIcon.svg';
import useModal from '../../hooks/useModal';
import InnerModal from '../Modal/InnerModal';

const MainHeader: React.FC = () => {
  const { modalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <header className='flex justify-center relative mb-10'>
        <Image src={momodoLogo} alt='모모두' width={73} className='' />
        <button className='absolute right-0 top-0' onClick={openModal}>
          <Image src={logoutIcon} alt='로그아웃 버튼' />
        </button>
      </header>
      {modalOpen && <InnerModal type={'logout'} id={0} closeModal={closeModal} />}
    </>
  );
};

export default MainHeader;
