import Image from 'next/image';
import React from 'react';
import notFound from '../../public/images/404Icon.svg';
import Button from '../components/Button';
import Link from 'next/link';

const notfound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen pb-24'>
      <Image
        src={notFound}
        alt='페이지를 찾을 수 없습니다.'
        className='mb-16'
      />
      <Link href='/' className='mt-1'>
        <Button disabled={false} buttonSize='medium'>
          Login 페이지로 이동하기
        </Button>
      </Link>
    </div>
  );
};

export default notfound;
