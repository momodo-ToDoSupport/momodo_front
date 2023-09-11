import Image from 'next/image';
import React from 'react';
import leftArrow from '../../../public/images/left-arrow.svg';
import Button from '../button/Button';
import Link from 'next/link';

interface HeaderProps {
  onSave?: () => void;
}

const BasicHeader: React.FC<HeaderProps> = ({ onSave }) => {
  return (
    <header className='flex mt-4 items-center mx-4 justify-between'>
      <Link href='/myprofile' className='mt-1'>
        <Image src={leftArrow} alt='뒤로가기' width={30} />
      </Link>
      <p className='relative left-4'>프로필 설정</p>
      <div onClick={onSave}>
        <Button buttonSize='small' disabled={false}>
          확인
        </Button>
      </div>
    </header>
  );
};

export default BasicHeader;
