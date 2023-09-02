import Image from 'next/image';
import React from 'react';
import momodoLogo from '../../../public/images/momodo.svg';
import calendarIcon from '../../../public/images/calendarIcon.svg';
import logoutIcon from '../../../public/images/logoutIcon.svg';

const MainHeader: React.FC = () => {
  return (
    <header className='flex justify-center relative mb-10'>
      <Image src={momodoLogo} alt='모모두' width={73} className='' />
      <button className='absolute right-0 top-0'>
        <Image src={logoutIcon} alt='로그아웃 버튼' />
      </button>
    </header>
  );
};

export default MainHeader;
