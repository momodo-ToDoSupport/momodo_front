import React, { useState } from 'react';
import newtodo from '../../../public/images/newtodoIcon.svg';
import edittodo from '../../../public/images/edittodo.svg';
import close from '../../../public/images/closeIcon.svg';
import Image from 'next/image';
import Button from '../Button';
import TodoEmoji from './TodoEmoji';

interface TodoFormProps {
  type: string;
  closeModal(): void;
}

const TodoForm: React.FC<TodoFormProps> = ({ type, closeModal }) => {
  const selectWeek = [
    { value: '일요일마다', name: '일요일 마다' },
    { value: '월요일마다', name: '월요일 마다' },
    { value: '화요일마다', name: '화요일 마다' },
    { value: '수요일마다', name: '수요일 마다' },
    { value: '목요일마다', name: '목요일 마다' },
    { value: '금요일마다', name: '금요일 마다' },
    { value: '토요일마다', name: '토요일 마다' },
  ];

  return (
    <article>
      <h2 className='hidden'>투두 추가 모달</h2>
      <div className='flex relative mt-4 mb-10'>
        <Image
          src={type === 'newtodo' ? newtodo : edittodo}
          alt='투두모달'
          className='mx-auto my-0'
        />
        <button className='absolute right-4' onClick={closeModal}>
          <Image src={close} alt='닫기 버튼' />
        </button>
      </div>
      <TodoEmoji />
      <form className='flex flex-col items-center'>
        <input
          type='text'
          placeholder='Title...'
          className='bg-grey-65 rounded-lg text-xs px-3 py-2 w-4/6 mb-3'
        />
        <div className='flex items-center mb-10'>
          <p className='text-xs bg-grey-65 px-3 py-2 rounded-lg mr-2'>반 복</p>
          <select className='bg-grey-65 rounded-lg pl-28 pr-3 py-2 text-right text-xs'>
            <option value='안 함'>안 함</option>
            {selectWeek.map((day) => (
              <option key={day.value} value={day.value}>
                {day.name}
              </option>
            ))}
          </select>
        </div>
        {type === 'newtodo' ? (
          <Button disabled={true}>추가하기</Button>
        ) : (
          <div className='flex w-4/6 justify-around'>
            <Button disabled={true}>삭제하기</Button>
            <Button disabled={true}>수정하기</Button>
          </div>
        )}
      </form>
    </article>
  );
};

export default TodoForm;
