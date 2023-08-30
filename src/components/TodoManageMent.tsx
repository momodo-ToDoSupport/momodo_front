'use client';

import React, { useState } from 'react';
import { HistoriseCards } from './TodoHistory/HistoriseCards';
import UncompletedTodoList from '../components/UncompletedTodoList'

type Props = {
  yearMonthkey:string
}
export const TodoManageMent: React.FC<Props> = ({yearMonthkey}) => {
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
      {activeContents === 1 ? <UncompletedTodoList yearMonthkey={yearMonthkey}/> : <HistoriseCards />}
    </section>
  );
};
