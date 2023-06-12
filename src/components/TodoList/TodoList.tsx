import Image from 'next/image';
import React from 'react';
import Todo from './Todo';
import todayTodo from '../../../public/images/todayTodoText.svg';

const TodoList = () => {
  return (
    <section className='mt-8'>
      <h1 className='hidden'>투두리스트</h1>
      <Image src={todayTodo} />
      <ul>
        <Todo />
      </ul>
    </section>
  );
};

export default TodoList;
