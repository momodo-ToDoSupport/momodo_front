import React from 'react';
import Image from 'next/image';
import unCompletedTodo from '../../public/images/Uncompleted-todos.svg';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import { getUncompletedTodolistFns } from '../utils/queryFns/todoListQueryFns';
import { TodoData } from '../types/todolistType';

const UncompletedTodoList = () => {
  const currentMonth = moment().format('YYYY년 MM월');
  const showTodoListDate = moment().format('YYYY-MM');
  const { data, isLoading, isError } = useQuery<TodoData[]>({
    queryKey: ['UnTodoList'],
    queryFn: () => getUncompletedTodolistFns(showTodoListDate),
  });

  if (!data) return <div>🎉미완료된 TodoList 목록이 없습니다!🎉</div>;
  if (isLoading) return <div>⏳TodoList를 불러오고있습니다⏳</div>;
  if (isError) return <div>❌데이터를 불러오지 못했습니다!❌</div>;

  return (
    <section className='flex flex-col items-center'>
      <h2>
        <Image
          src={unCompletedTodo}
          alt='미완료투두리스트타이틀'
          width={250}
          height={300}
        />
      </h2>
      <span className='mt-2'>{currentMonth}</span>
      <div className='w-full mt-4 overflow-y-auto max-h-96'>
        <ul className='space-y-2'>
          {data.map((todo) => (
            <li
              key={todo.id}
              className='flex items-center p-3 bg-white rounded-2xl'
            >
              <span className='bg-[#E9E9E9] text-2xl w-10 h-10 rounded-xl text-center leading-10 mr-3 ml-1'>
                {todo.emoji}
              </span>
              <p className='text-black'>{todo.title}</p>
              <div className='bg-[#434040] text-xs w-20 h-7 rounded-xl text-center leading-7 ml-auto'>
                {todo.dueDate}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UncompletedTodoList;
