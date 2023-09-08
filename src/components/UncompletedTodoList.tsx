import React from 'react';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import { getUncompletedTodolistFns } from '../utils/queryFns/todoListQueryFns';
import { TodoData } from '../types/todolistType';

type Props = {
  yearMonthkey: string;
};

const UncompletedTodoList: React.FC<Props> = ({ yearMonthkey }) => {
  const currentMonth = moment().format('YYYY년 MM월');
  const { data } = useQuery<TodoData[]>({
    queryKey: ['UnTodoList', yearMonthkey],
    queryFn: () => getUncompletedTodolistFns(yearMonthkey),
  });

  return (
    <>
      <span className='mt-5 text-xl'>{currentMonth}</span>
      <div className='w-full my-8 overflow-y-auto '>
        {data?.length === 0 ? (
          <div className='flex items-center justify-center h-full '>
            <span className='text-center text-xxl'>
              🎉미완료된 TodoList 목록이 없습니다!🎉
            </span>
          </div>
        ) : (
          <ul className='space-y-2'>
            {data?.map((todo) => (
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
        )}
      </div>
    </>
  );
};

export default UncompletedTodoList;
