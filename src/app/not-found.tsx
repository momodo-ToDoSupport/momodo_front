import Image from 'next/image';
import React from 'react';
import notFound from '../../public/images/404Icon.svg';
import Button from '../components/Button';

const notfound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen pb-24'>
      <Image src={notFound} alt='페이지를 찾을 수 없습니다.' className='mb-16' />
      <Button buttonSize='medium'>이전 페이지</Button>
    </div>
  );
};

export default notfound;
