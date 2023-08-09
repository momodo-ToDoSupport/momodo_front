import React, { useState } from 'react';
import newtodo from '../../../public/images/newtodoIcon.svg';
import edittodo from '../../../public/images/edittodo.svg';
import close from '../../../public/images/closeIcon.svg';
import Image from 'next/image';
import Button from '../Button';
import TodoEmoji from './TodoEmoji';
import moment from 'moment';
import { useMutation } from 'react-query';
import { postTodoData } from '../../api/todo';

interface TodoFormProps {
  type: string;
  closeModal(): void;
}

export interface TodoData {
  title: string;
  emoji: string;
  dueDate: string;
  repeatDays: string;
}

const TodoForm: React.FC<TodoFormProps> = ({ type, closeModal }) => {
  //TODO: 실제 유저가 선택한 날짜와 연결해주기
  const curretDate = moment().format('YYYY-MM-DD');
  const [todoValue, setTodoValue] = useState('');
  const [todoEmoji, setTodoEmoji] = useState('🎉');
  const [repeatDays, setRepeatDays] = useState('');
  // const [todoData, setTodoData] = useState<TodoData>({
  //   title: '',
  //   emoji: '',
  //   dueDate: curretDate,
  //   repeatDays: '',
  // });

  const selectWeek = [
    { value: '0', name: '일요일 마다' },
    { value: '1', name: '월요일 마다' },
    { value: '2', name: '화요일 마다' },
    { value: '3', name: '수요일 마다' },
    { value: '4', name: '목요일 마다' },
    { value: '5', name: '금요일 마다' },
    { value: '6', name: '토요일 마다' },
  ];

  const handleTodoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTodoValue(e.target.value);
  };

  const handleRepeatDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRepeatDays(e.target.value);
  };

  const mutation = useMutation(postTodoData, {
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todoData: TodoData = {
      title: todoValue,
      emoji: todoEmoji,
      dueDate: curretDate,
      repeatDays,
    };

    mutation.mutate(todoData);

    setTodoValue('');
  };

  return (
    <article>
      <h2 className='hidden'>투두 추가 모달</h2>
      <div className='flex relative mt-4 mb-10'>
        <Image
          src={type === 'newtodo' ? newtodo : edittodo}
          alt='투두모달'
          className='mx-auto my-0'
        />
        <button className='absolute right-4' onClick={closeModal}>
          <Image src={close} alt='닫기 버튼' />
        </button>
      </div>
      <TodoEmoji setTodoEmoji={setTodoEmoji} />
      <form className='flex flex-col items-center' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Todo를 입력해주세요'
          className='bg-grey-65 rounded-lg text-xs px-3 py-2 w-4/6 mb-3'
          value={todoValue}
          onChange={handleTodoChange}
        />
        <div className='flex items-center mb-10'>
          <p className='text-xs bg-grey-65 px-3 py-2 rounded-lg mr-2'>반 복</p>
          <select
            className='bg-grey-65 rounded-lg pl-28 pr-3 py-2 text-right text-xs'
            onChange={handleRepeatDay}
          >
            <option value='안 함'>안 함</option>
            {selectWeek.map((day) => (
              <option key={day.value} value={day.value}>
                {day.name}
              </option>
            ))}
          </select>
        </div>
        {type === 'newtodo' ? (
          <Button disabled={todoValue.length === 0}>추가하기</Button>
        ) : (
          <div className='flex w-4/6 justify-around'>
            <Button disabled={true}>삭제하기</Button>
            <Button disabled={true}>수정하기</Button>
          </div>
        )}
      </form>
    </article>
  );
};

export default TodoForm;
