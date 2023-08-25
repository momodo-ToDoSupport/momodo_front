'use client';
import React, { useState } from 'react';
import { HistoriseCards } from './TodoHistory/HistoriseCards';

export const TodoManageMent: React.FC = () => {
  const [activeContents, setActiveContents] = useState<number | null>(2);

  const handleClick = (ContentsIndex: number) => {
    setActiveContents(ContentsIndex);
  };
  return (
    <section className='border p-3'>
      <div className='flex justify-around mb-3'>
        <button
          onClick={() => handleClick(1)}
          className={`${
            activeContents === 1 ? 'text-white' : 'text-[#535252]'
          }`}
        >
          <p className='pb-2 border-b-2'>미완료 투두</p>
        </button>
        <button
          onClick={() => handleClick(2)}
          className={`${
            activeContents === 2 ? 'text-white' : 'text-[#535252]'
          }`}
        >
          <p className='pb-2 border-b-2'>히스토리</p>
        </button>
      </div>
      {activeContents === 1 ? <div>미완료투두 목록</div> : <HistoriseCards />}
    </section>
  );
};
