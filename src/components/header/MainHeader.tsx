'use client';
import Image from 'next/image';
import momodoLogo from '../../../public/images/momodo.svg';
import logoutIcon from '../../../public/images/logoutIcon.svg';
import menuIcon from '../../../public/images/menuIcon.svg';
import useModal from '../../hooks/useModal';
import InnerModal from '../Modal/InnerModal';
import ProfileModal from '../Modal/ProfileModal';
interface HeaderProps {
  option?: string;
}
const MainHeader: React.FC<HeaderProps> = ({ option }) => {
  const { modalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <header className='flex justify-center relative mb-5'>
        <Image src={momodoLogo} alt='모모두' width={73} />
        <button className='absolute right-0 top-0' onClick={openModal}>
          {option === 'myprofile' ? (
            <Image src={menuIcon} alt='메뉴 버튼' width={20} />
          ) : (
            <Image src={logoutIcon} alt='로그아웃 버튼' />
          )}
        </button>
      </header>
      {modalOpen && (
        <>
          {option === 'myprofile' && (
            <ProfileModal type='myprofile' closeModal={closeModal} />
          )}
          {option === 'mytodo' && (
            <InnerModal type={'logout'} id={0} closeModal={closeModal} />
          )}
        </>
      )}
    </>
  );
};

export default MainHeader;
