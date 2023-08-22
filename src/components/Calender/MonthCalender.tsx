'use client';

import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import leftArrow from '../../../public/images/left-arrow.svg';
import rightArrow from '../../../public/images/right-arrow.svg';
import Image from 'next/image';
import { getTodoData } from '../../api/todo';
import TodoList from '../TodoList/TodoList';
import { generateCalendarData } from '../../utils/dateDataCreate'; // 모듈 import

const MonthCalender = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [selectedDate, setSelectedDate] = useState('');
  const [todoList, setTodolist] = useState([]);
  const currentDate = moment();
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // 이전 달로 이동하는 함수
  const goToPreviousMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
  };

  // 다음 달로 이동하는 함수
  const goToNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, 'month'));
  };

  // 현재 월의 캘린더 데이터를 생성하는 함수
  const calendarData = generateCalendarData();

  // 클릭한 날짜 추출
  const selectDate = async (day:any) => {
    const selecctedDay = moment(day).format('YYYY-MM-DD');
    setSelectedDate(selecctedDay);
    const data = await getTodoData(selecctedDay);
    setTodolist(data);
  };
  return (
    <>
      <section className='bg-[#242424] rounded-3xl px-5 py-4'>
        <div className='flex items-center justify-between pb-3'>
          <span>{currentMonth.format('YYYY년 MMMM')}</span>
          <div className='relative top-1'>
            <button onClick={goToPreviousMonth} className=''>
              <Image src={leftArrow} alt='이전 버튼' />
            </button>
            <button onClick={goToNextMonth} className='ml-5'>
              <Image src={rightArrow} alt='다음 버튼' />
            </button>
          </div>
        </div>
        <div className='grid grid-cols-7 gap-4 text-center'>
          {weekdays.map((weekday, index) => (
            <div key={index} className='text-lg text-[#ADADAD] font-bold'>
              {weekday}
            </div>
          ))}
          {calendarData.map((week, weekIndex) => (
            <React.Fragment key={weekIndex}>
              {week.map((day, dayIndex) => (
                <button
                  key={dayIndex}
                  className={`flex justify-center items-center h-30 border border-black ${
                    day.month() === currentMonth.month() ? '' : 'text-[#535252]'
                  } ${day.isSame(currentDate, 'day') ? 'relative' : ''}`}
                  onClick={() => selectDate(day)}
                >
                  {day.format('D')}
                  {day.isSame(currentDate, 'day') && (
                    <span className='absolute top-[-7px] h-[6px] w-[6px] rounded-full bg-main-color'></span>
                  )}
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>
      <TodoList selectedDate={selectedDate} todoList={todoList} />
    </>
  );
};

export default MonthCalender;
