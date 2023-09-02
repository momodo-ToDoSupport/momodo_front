'use client';

import Image from 'next/image';
import React, { useMemo } from 'react';
import Todo from './Todo.client';
import todayTodos from '../../../../public/images/today-todos.svg';
import AddButton from '../../AddButton';
import useModal from '../../../hooks/useModal';
import Modal from '../../Modal/Modal';
import { TodoData } from '../../../types/todolistType';
import moment from 'moment';

interface Props {
  todoListData?: TodoData[];
  selectedDate: string;
}
const calculateIsDueDatePassed = (
  dueDate: string,
  currentDate: string
): boolean => {
  return moment(dueDate).isBefore(currentDate, 'day');
};

const TodoList: React.FC<Props> = ({ todoListData, selectedDate }) => {
  const { modalOpen, openModal, closeModal } = useModal();
  const currentDate = moment().format('YYYY-MM-DD');

  const processedTodoListData = useMemo(
    () =>
      todoListData?.map((todoList) => ({
        ...todoList,
        isDueDatePassed: calculateIsDueDatePassed(
          todoList.dueDate,
          currentDate
        ),
      })),
    [todoListData, currentDate]
  );

  return (
    <section className={`mt-8`}>
      <h2 className='hidden'>투두리스트</h2>
      <div className='flex justify-between items-center relative mb-4'>
        <Image src={todayTodos} className='ml-1 mr-3' alt='오늘의 투두리스트' />
        <span className='text-x mr-auto'>{selectedDate}</span>
        <AddButton openModal={openModal} todayDate={currentDate} selectedDate={selectedDate}/>
      </div>
      <ul>
        {processedTodoListData?.map((todoList) => (
          <Todo
            todoList={todoList}
            key={todoList.id}
            isDueDatePassed={todoList.isDueDatePassed}
          />
        ))}
      </ul>
      {modalOpen && <Modal type='newtodo' closeModal={closeModal} id={0} />}
    </section>
  );
};

export default TodoList;
