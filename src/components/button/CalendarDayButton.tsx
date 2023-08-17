import React from 'react';

interface DateProps {
  day: moment.Moment;
  currentMonth: moment.Moment;
  currentDate: moment.Moment;
  onClick: () => void;
}

const CalendarButton: React.FC<DateProps> = ({
  day,
  currentMonth,
  currentDate,
  onClick,
}) => {
  const isSameMonth = day.month() === currentMonth.month();
  const isCurrentDate = day.isSame(currentDate, 'day');

  const buttonClasses = `flex justify-center items-center h-30 border border-black ${
    isSameMonth ? '' : 'text-[#535252]'
  } ${isCurrentDate ? 'relative' : ''}`;

  return (
    <button key={day.format('D')} className={buttonClasses} onClick={onClick}>
      {day.format('D')}
      {isCurrentDate && (
        <span className='absolute top-[-7px] h-[6px] w-[6px] rounded-full bg-main-color'></span>
      )}
    </button>
  );
};
export default CalendarButton;
