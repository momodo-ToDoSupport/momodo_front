'use client';

import React from 'react';
import UncompletedTodoList from './UncompletedTodoList';
import Image from 'next/image';
import unCompletedTodo from '../../../public/images/Uncompleted-todos.svg';

type Props = {
  yearMonthkey: string;
};
export const TodoManageMent: React.FC<Props> = ({ yearMonthkey }) => {
  return (
    <section className=' p-3 flex flex-col grow items-center bg-grey-2D h-1 rounded-xl'>
      <h2 className='mt-4'>
        <Image
          src={unCompletedTodo}
          alt='미완료투두리스트타이틀'
          width={250}
          height={300}
        />
      </h2>
      <UncompletedTodoList yearMonthkey={yearMonthkey} />
    </section>
  );
};
