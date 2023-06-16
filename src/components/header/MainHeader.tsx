import Image from 'next/image';
import React from 'react';
import momodoLogo from '../../../public/images/momodo.svg';
import calendarIcon from '../../../public/images/calendarIcon.svg';
import logoutIcon from '../../../public/images/logoutIcon.svg';

interface MainHeaderProps {
  toggleCalender?(): void;
  option: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ toggleCalender, option }) => {
  return (
    <header className='flex justify-center relative mb-10'>
      <Image src={momodoLogo} alt='모모두' width={73} className='' />
      {option === 'todo' ? (
        <button onClick={toggleCalender}>
          <Image src={calendarIcon} alt='캘린더 버튼' className='absolute right-0 top-0' />
        </button>
      ) : (
        <button className='absolute right-0 top-0'>
          <Image src={logoutIcon} alt='로그아웃 버튼' />
        </button>
      )}
    </header>
  );
};

export default MainHeader;
