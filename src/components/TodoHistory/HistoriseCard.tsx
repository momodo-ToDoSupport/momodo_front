import React from 'react'
import Image from 'next/image';
import checkBtnActive from '../../../public/images/check-btn-active.svg';

const HistoriseCard = () => {
  return (
    <div className='flex-col bg-[#444444] p-2 max-w-md h-52 rounded-lg overflow-hidden'>
    <p className='mb-4'>dueDate : 2023-08-25</p>
    <ul className='shrink h-32'>
      <li className='flex gap-2'>
        <Image
          src={checkBtnActive}
          className='w-4'
          alt={'투두완료버튼'}
        />
        <p>todoList Title</p>
      </li>
    </ul>
    <div>3/3</div>
  </div>
  )
}

export default HistoriseCard
