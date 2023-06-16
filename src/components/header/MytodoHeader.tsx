import Image from 'next/image';
import React from 'react';
import momodoLogo from '../../../public/images/momodo.svg';
import calendarIcon from '../../../public/images/calendarIcon.svg';

interface MytodoHeaderProps {
  toggleCalender(): void;
}

const MytodoHeader: React.FC<MytodoHeaderProps> = ({ toggleCalender }) => {
  return (
    <header className='flex justify-center relative mb-10 '>
      <Image src={momodoLogo} alt='모모두' width={73} className='' />
      <button onClick={toggleCalender}>
        <Image src={calendarIcon} alt='캘린더아이콘' className='absolute right-0' />
      </button>
    </header>
  );
};

export default MytodoHeader;
