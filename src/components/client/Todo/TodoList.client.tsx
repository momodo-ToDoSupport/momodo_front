'use client';

import Image from 'next/image';
import React from 'react';
import Todo from './Todo.client';
import todayTodos from '../../../../public/images/today-todos.svg';
import AddButton from '../../AddButton';
import useModal from '../../../hooks/useModal';
import Modal from '../../Modal/Modal';
import { TodoData } from '../../../types/todolistType';

interface Props {
  data?: TodoData[];
}

const TodoList: React.FC<Props> = ({ data }) => {
  const { modalOpen, openModal, closeModal } = useModal();

  return (
    <section className={`mt-8`}>
      <h2 className='hidden'>투두리스트</h2>
      <div className='flex justify-between items-center relative mb-4'>
        <Image src={todayTodos} className='ml-1' alt='오늘의 투두리스트' />
        <AddButton openModal={openModal} />
      </div>
      <ul>
        {data?.map((todoList) => (
          <Todo todoList={todoList} key={todoList.id} />
        ))}
      </ul>
      {modalOpen && <Modal type='newtodo' closeModal={closeModal} id={0} />}
    </section>
  );
};

export default TodoList;
