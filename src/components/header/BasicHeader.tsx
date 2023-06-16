import Image from 'next/image';
import React from 'react';
import leftArrow from '../../../public/images/left-arrow.svg';
import menuIcon from '../../../public/images/menuIcon.svg';
import Button from '../Button';

interface HeaderProps {
  option?: string;
}

const BasicHeader: React.FC<HeaderProps> = ({ option }) => {
  return (
    <header className='flex mt-4 items-center mx-4 justify-between'>
      <button className='mt-1'>
        <Image src={leftArrow} alt='뒤로가기' width={30} />
      </button>
      {option === 'search' && (
        <input
          type='text'
          placeholder='계정 검색'
          className='w-full bg-grey-2D p-3 pl-5 ml-3 rounded-full placeholder-grey-65'
        />
      )}
      {option === 'chatroom' && (
        <>
          <p className='text-xl'>username</p>
          <button>
            <Image src={menuIcon} alt='메뉴' />
          </button>
        </>
      )}
      {option === 'myprofile' && (
        <>
          <p className='relative left-4'>프로필 설정</p>
          <Button disabled buttonSize='small'>
            확인
          </Button>
        </>
      )}
      {option === 'yourhome' && (
        <Button disabled buttonSize='small'>
          팔로우
        </Button>
      )}
    </header>
  );
};

export default BasicHeader;
