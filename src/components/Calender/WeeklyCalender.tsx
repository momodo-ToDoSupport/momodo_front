import moment from 'moment';
import React from 'react';

const WeeklyCalendar = () => {
  const currentMonth = moment().format('YYYY년 MM월');
  const currentDate = moment().locale('en');
  const firstDayOfMonth = currentDate.clone().startOf('month');
  const lastDayOfMonth = currentDate.clone().endOf('month');

  const totalDaysInMonth = lastDayOfMonth.diff(firstDayOfMonth, 'days') + 1;
  const dates = Array.from({ length: totalDaysInMonth }, (_, index) => {
    const date = firstDayOfMonth.clone().add(index, 'days');
    const dayOfWeek = date.format('ddd');
    const dayOfMonth = date.format('DD');
    const isToday = date.isSame(moment(), 'day');

    return { dayOfWeek, dayOfMonth, isToday };
  });

  return (
    <section className='flex flex-col items-center'>
      <h2>TodoHistory</h2>
      <span className='mt-2'>{currentMonth}</span>
      <div className='grid grid-cols-4 gap-4 py-3 overflow-y-auto max-h-96'>
        {dates.map((date, index) => (
          <div
            key={index}
            className={`text-center inline-flex flex-col items-center px-5 py-4 border-2 rounded-2xl mr-3 border-main-color font-medium ${
              date.isToday ? 'bg-main-color text-black' : ''
            }`}
          >
            <div className='text-sm'>{date.dayOfWeek}</div>
            <div className='text-xxl text-center'>{date.dayOfMonth}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyCalendar;
