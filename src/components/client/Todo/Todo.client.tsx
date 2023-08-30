'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import editTodo from '../../../../public/images/editTodoIcon.svg';
import { TodoData } from '../../../types/todolistType';
import ToggleCheckButton from '../../button/ToggleCheckButton';
import { todoCompleted } from '../../../service/todo';
import { useQueryClient} from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

interface Props {
  todoList: TodoData;
}
const Todo: React.FC<Props> = ({ todoList }) => {
  const queryClient = useQueryClient()
  const {id, title, emoji, dueDate, completed } = todoList;
  const [checked, setChecked] = useState(completed);
  const mutation = useMutation(()=>todoCompleted(id), {
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey: ['todolist'] })
    }
  })
  
  const handleCompleted = async(checked:boolean) => {
    try {
      await mutation.mutateAsync()
      setChecked(checked)
    } catch (error) {
      console.log('에러'+error)
    }
  };

  return (
    <>
      <li className={`flex items-center relative w-7/8 ${checked ? `bg-[#656565]`: `bg-white`} p-3 mb-2 rounded-2xl`}>
        <span className='bg-[#E9E9E9] text-xxl w-11 h-11 rounded-xl text-center mr-3 ml-1'>
          {emoji}
        </span>
        <p className='text-black'>{title}</p>
        <div className='absolute right-4 pt-1'>
          <button className='mr-3'>
            <Image src={editTodo} alt='투두 수정하기' />
          </button>
          <ToggleCheckButton toggled={checked} onToggle={handleCompleted}/>
        </div>
      </li>
    </>
  );
};

export default Todo;
