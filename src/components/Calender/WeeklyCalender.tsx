import moment from 'moment';
import React from 'react';

const WeeklyCalender = () => {
  const currentDate = moment().locale('en');
  const dates = [];

  for (let i = 0; i <= 30; i++) {
    const date = currentDate.clone().add(i, 'days');
    const dayOfWeek = date.format('ddd');
    const dayOfMonth = date.format('DD');
    const isToday = date.isSame(moment(), 'day');

    dates.push({ dayOfWeek, dayOfMonth, isToday });
  }

  return (
    <div className='flex py-4 overflow-x-scroll hide-scrollbar'>
      {dates.map((date, index) => (
        <div
          key={index}
          className={`text-center flex-col items-center inline-block px-5 py-4 border-2 rounded-2xl mr-3 border-main-color font-medium ${
            date.isToday && 'bg-main-color text-black'
          }`}
        >
          <div className='text-sm'>{date.dayOfWeek}</div>
          <div className='text-mxl text-center'>{date.dayOfMonth}</div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyCalender;
