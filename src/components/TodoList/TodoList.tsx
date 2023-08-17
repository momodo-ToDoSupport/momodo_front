'use client';

import Image from 'next/image';
import React from 'react';
import Todo from './Todo';
import todayTodos from '../../../public/images/today-todos.svg';
import AddButton from '../AddButton';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';

const TodoList = () => {
  const { modalOpen, openModal, closeModal } = useModal();
  return (
    <section className={`mt-8`}>
      <h2 className='hidden'>투두리스트</h2>
      <div className='flex justify-between items-center relative mb-4'>
        <Image src={todayTodos} className='ml-1' alt='오늘의 투두리스트' />
        <AddButton openModal={openModal} />
      </div>
      <ul>
        <Todo />
      </ul>
      {modalOpen && <Modal type='newtodo' closeModal={closeModal} />}
    </section>
  );
};

export default TodoList;
