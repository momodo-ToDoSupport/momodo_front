import React from 'react';
import Image from 'next/image';
import unCompletedTodo from '../../public/images/Uncompleted-todos.svg';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import { getUncompletedTodolistFns } from '../utils/queryFns/todoListQueryFns';
import { TodoData } from '../types/todolistType';

type Props = {
  yearMonthkey: string;
};

const UncompletedTodoList: React.FC<Props> = ({ yearMonthkey }) => {
  const currentMonth = moment().format('YYYY년 MM월');
  const { data, isLoading, isError } = useQuery<TodoData[]>({
    queryKey: ['UnTodoList', yearMonthkey],
    queryFn: () => getUncompletedTodolistFns(yearMonthkey),
  });

  if (!data) return <div>🎉미완료된 TodoList 목록이 없습니다!🎉</div>;
  if (isLoading) return <div>⏳TodoList를 불러오고있습니다⏳</div>;
  if (isError) return <div>❌데이터를 불러오지 못했습니다!❌</div>;

  return (
    <>
      <span className='mt-5 text-xxl'>{currentMonth}</span>
      <div className='w-full my-10 overflow-y-auto fix-height'>
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
    </>
  );
};

export default UncompletedTodoList;
