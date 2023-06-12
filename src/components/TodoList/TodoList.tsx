import Image from 'next/image';
import React from 'react';
import Todo from './Todo';
import todayTodo from '../../../public/images/todayTodoText.svg';
import AddButton from '../AddButton';
import Modal from '../Modal/Modal';
import ModalButton from '../Modal/ModalButton';

const TodoList = () => {
  return (
    <section className='mt-8'>
      <h1 className='hidden'>투두리스트</h1>
      <Image src={todayTodo} className='mb-3 ml-1' alt='오늘의 투두리스트' />
      <ul>
        <Todo />
      </ul>
      <AddButton />
      <Modal type='newtodo' />
    </section>
  );
};

export default TodoList;
