import Image from 'next/image';
import React from 'react';
import tierIconRed from '../../public/images/tierIcon-red-1.svg';

const Tier = () => {
  return (
    <div className='flex items-center justify-around p-2 my-10 bg-grey-2D '>
      <Image src={tierIconRed} alt='티어 레벨1' width={50} className='ml-2 mr-6' />
      <div className='grow'>
        <div className='flex mb-2 justify-between'>
          <span className='text-xxs'>LV.1</span>
          <span className='text-xxs'>💪30% 달성</span>
        </div>
        <div className='border-solid border-white border-2 text-xxs'></div>
      </div>
    </div>
  );
};

export default Tier;
