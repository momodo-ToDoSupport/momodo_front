'use client';

import Image from 'next/image';
import React from 'react';
import Todo from './Todo.client';
import todayTodos from '../../../../public/images/today-todos.svg';
import AddButton from '../../AddButton';
import useModal from '../../../hooks/useModal';
import Modal from '../../Modal/Modal';
import { useQuery } from '@tanstack/react-query';
// import { getTodoData } from '../../../api/todo';
import { getTodoListQueryFns } from '../../../queryFns/todoListQueryFns';
import moment from 'moment';

interface TaskData {
  id: number;
  title: string;
  emoji: string;
  dueDate: string;
  completed: boolean;
}

interface Props {
  selectedDate: string;
  todoList: TaskData[];
}

const TodoList: React.FC = () => {
  const { modalOpen, openModal, closeModal } = useModal();
  const selectedDay = moment().format('YYYY-MM-DD');

  const { data } = useQuery<TaskData[]>({
    queryKey: ['todolist', selectedDay],
    queryFn: () => getTodoListQueryFns(selectedDay),
  });
  console.log(data);

  if (!data) return <div>Not found</div>;

  return (
    <section className={`mt-8`}>
      <h2 className='hidden'>투두리스트</h2>
      <div className='flex justify-between items-center relative mb-4'>
        <Image src={todayTodos} className='ml-1' alt='오늘의 투두리스트' />
        <AddButton openModal={openModal} />
      </div>
      <ul>
        {data.map((todoList) => (
          <Todo todoList={todoList} key={todoList.id} />
        ))}
      </ul>
      {modalOpen && <Modal type='newtodo' closeModal={closeModal} />}
    </section>
  );
};

export default TodoList;
