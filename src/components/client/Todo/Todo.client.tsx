'use client';

import Image from 'next/image';
import React from 'react';
import editTodo from '../../../../public/images/editTodoIcon.svg';
import checkbutton from '../../../../public/images/checkButtonIcon.svg';
import { TodoData } from '../../../types/todolistType';

interface Props {
  todoList: TodoData;
}
const Todo: React.FC<Props> = ({ todoList }) => {
  return (
    <>
      <li className='flex items-center relative w-7/8 bg-white p-3 mb-2 rounded-2xl'>
        <p className='bg-[#E9E9E9] text-xxl w-11 h-11 rounded-xl text-center mr-3 ml-1'>
          {todoList.emoji}
        </p>
        <p className='text-black'>{todoList.title}</p>
        <div className='absolute right-4 pt-1'>
          <button className='mr-3'>
            <Image src={editTodo} alt='투두 수정하기' />
          </button>
          <button>
            <Image src={checkbutton} alt='투두 체크' />
          </button>
        </div>
      </li>
    </>
  );
};

export default Todo;
