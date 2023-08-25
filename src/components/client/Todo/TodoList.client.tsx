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
import { getTodoListQueryFns } from '../../../utils/queryFns/todoListQueryFns';
import { TodoData } from '../../../types/todolistType';

interface Props {
  selectedDate: string;
}

const TodoList: React.FC<Props> = ({ selectedDate }) => {
  const { modalOpen, openModal, closeModal } = useModal();
  const showTodoListDate = selectedDate || moment().format('YYYY-MM-DD');

  // react-Query를 활용한 Data Fetching
  const { data, isLoading, isError } = useQuery<TodoData[]>({
    queryKey: ['todolist', showTodoListDate],
    queryFn: () => getTodoListQueryFns(showTodoListDate),
  });
  console.log(data);

  if (!data) return <div>작성된 Todo가 없습니다.</div>;
  if (isLoading) return <div>TodoList를 불러오고있습니다.</div>;
  if (isError) return <div>잘못된 페이지 입니다. Error!! </div>;

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
