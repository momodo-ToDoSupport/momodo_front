'use client';
import Image from 'next/image';
import React from 'react';
import tierIcon1 from '../../public/images/tierIcon-red-1.svg';
import tierIcon2 from '../../public/images/tierIcon-green-2.svg';
import tierIcon3 from '../../public/images/tierIcon-blue-3.svg';
import tierIcon4 from '../../public/images/tierIcon-rainbow-4.svg';
// import { useAtom } from 'jotai';
// import { userAtom } from '../store/authStore';

const Tier = () => {
  const tier =localStorage.getItem('Tier');
  let tierIconSrc = '';
  let tierLevel = '';
  if (tier === 'RED') {
    tierIconSrc = tierIcon1;
    tierLevel = 'LV.1';
  } else if (tier === 'GREEN') {
    tierIconSrc = tierIcon2;
    tierLevel = 'LV.2';
  } else if (tier === 'BLUE') {
    tierIconSrc = tierIcon3;
    tierLevel = 'LV.3';
  } else if (tier === 'RAINBOW') {
    tierIconSrc = tierIcon4;
    tierLevel = 'LV.4';
  }

  return (
    <div className='flex items-center justify-around py-5 px-5 my-10 bg-grey-2D rounded-xl'>
      <Image
        src={tierIconSrc}
        alt='티어 레벨1'
        width={50}
        className='ml-2 mr-6'
      />
      <div className='grow'>
        <div className='flex mb-2 justify-between'>
          <span className='text-xxs'>{tierLevel}</span>
          <span className='text-xxs'>💪30% 달성</span>
        </div>
        <div className='w-full h-4 border-solid border-white border-2 rounded'>
          <div
            className='h-full rounded progressbar'
            style={{ width: `${40}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Tier;
