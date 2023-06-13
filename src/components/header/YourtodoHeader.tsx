import Image from 'next/image';
import React from 'react';
import leftArrow from '../../../public/images/left-arrow.svg';
import Button from '../Button';

const YourtodoHeader = () => {
  return (
    <header className='flex justify-between mb-5'>
      <Image src={leftArrow} alt='뒤로가기' />
      <Button buttonSize='small'>팔로우</Button>
    </header>
  );
};

export default YourtodoHeader;
