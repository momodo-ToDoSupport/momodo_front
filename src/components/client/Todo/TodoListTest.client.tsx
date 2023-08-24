'use client';

import Image from 'next/image';
import React from 'react';
import Todo from './Todo.client';
import todayTodos from '../../../../public/images/today-todos.svg';
import AddButton from '../../AddButton';
import useModal from '../../../hooks/useModal';
import Modal from '../../Modal/Modal';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import { getTodoListQueryFnss } from '../../../queryFns/todoListQueryFns';

interface TodoData {
  id: number;
  title: string;
  emoji: string;
  dueDate: string;
  completed: boolean;
}

interface Props {
  selectedDate: string;
}

const TodoList: React.FC = () => {
  const { modalOpen, openModal, closeModal } = useModal();
  // const showTodoListDate = selectedDate || moment().format('YYYY-MM-DD');

  // react-Query를 활용한 Data Fetching
  // selectedDate가 존재할 때만 데이터 패치
  const { data, isLoading, isError } = useQuery<TodoData[]>({
    queryKey: ['todolist'],
    queryFn: getTodoListQueryFnss,
    // enabled: !!selectedDate,
    // selectedDate가 있을 때만 표시
  });

  if (!data) return <div>작성된 Todo가 없습니다.</div>;
  if (isLoading) return <div>TodoList를 불러오고 있습니다.</div>;
  if (isError) return <div>잘못된 페이지입니다. 에러가 발생했습니다.</div>;

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
