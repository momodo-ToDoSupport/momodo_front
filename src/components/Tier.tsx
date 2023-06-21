import Image from 'next/image';
import React from 'react';
import tierIconRed from '../../public/images/tierIcon-red-1.svg';

const Tier = () => {
  return (
    <div className='flex items-center justify-around my-10'>
      <Image src={tierIconRed} alt='티어 레벨1' width={150} />
      <div className='flex-col self-end'>
        <span className='mt-4 bg-grey-2D px-4 py-3 rounded-full text-sm self-end'>Level.1</span>
        <p className='text-xs mt-5 self-end'>💪 2레벨까지 ~~ 남았어요!</p>
      </div>
    </div>
  );
};

export default Tier;
