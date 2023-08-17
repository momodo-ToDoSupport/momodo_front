import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import leftArrow from '../../../public/images/left-arrow.svg';
import rightArrow from '../../../public/images/right-arrow.svg';
import Image from 'next/image';
import CalendarButton from '../button/CalendarDayButton';
import { getTodoData } from '../../api/todo';

const MonthCalender = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [selectedDate, setSelectedDate] = useState();
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
  const generateCalendarData = () => {
    const calendarData = [];

    // 현재 월의 시작일과 마지막일을 구함
    const startDay = currentMonth.clone().startOf('month').startOf('week');
    const endDay = currentMonth.clone().endOf('month').endOf('week');

    let day = startDay.clone().subtract(1, 'day');

    while (day.isBefore(endDay, 'day')) {
      calendarData.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, 'day').clone())
      );
    }
    return calendarData;
  };
  const calendarData = generateCalendarData();


  const selectDate = (day) => {
    setSelectedDate(day);
    const selecctedDay = moment(day).format('YYYY-MM-DD');
    const todoData = getTodoData(selecctedDay)
    console.log(selecctedDay);
    console.log(todoData);
  };

  return (
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
              <CalendarButton
                key={dayIndex}
                day={day}
                currentMonth={currentMonth}
                currentDate={currentDate}
                onClick={() => selectDate(day)}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default MonthCalender;
