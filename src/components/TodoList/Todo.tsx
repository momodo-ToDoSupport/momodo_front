import Image from 'next/image';
import React from 'react';
import editTodo from '../../../public/images/editTodoIcon.svg';
import checkbutton from '../../../public/images/checkButtonIcon.svg';

const Todo = () => {
  return (
    <li className='flex items-center relative w-7/8 bg-white p-3 rounded-2xl'>
      <p className='bg-[#E9E9E9] text-xxl w-11 h-11 rounded-xl text-center mr-3 ml-1'>🖍️</p>
      <p className='text-black'>호호호</p>
      <div className='absolute right-4'>
        <button className='mr-3'>
          <Image src={editTodo} />
        </button>
        <button>
          <Image src={checkbutton} />
        </button>
      </div>
    </li>
  );
};

export default Todo;
