'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import editTodo from '../../../../public/images/editTodoIcon.svg';
import { TodoData } from '../../../types/todolistType';
import ToggleCheckButton from '../../button/ToggleCheckButton';

interface Props {
  todoList: TodoData;
}
const Todo: React.FC<Props> = ({ todoList }) => {
  const [checked, setChecked] = useState(false);
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
          <ToggleCheckButton toggled={checked} onToggle={setChecked}/>
        </div>
      </li>
    </>
  );
};

export default Todo;
