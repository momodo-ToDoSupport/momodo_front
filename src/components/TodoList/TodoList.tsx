import Image from 'next/image';
import React from 'react';
import Todo from './Todo';
import todayTodo from '../../../public/images/todayTodoText.svg';
import AddButton from '../AddButton';

const TodoList = () => {
  return (
    <section className='mt-8'>
      <h1 className='hidden'>투두리스트</h1>
      <Image src={todayTodo} className='mb-3 ml-1' />
      <ul>
        <Todo />
      </ul>
      <AddButton />
    </section>
  );
};

export default TodoList;
