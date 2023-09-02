import React from 'react';
import moment from 'moment';
import CalendarButton from './CalendarButton';

type Props = {
  week: moment.Moment[];
  currentMonth: moment.Moment;
  currentDate: moment.Moment;
  historyData: TodoHistory[];
  selectDate: (day: moment.Moment) => void;
};
type TodoHistory = {
  id: number;
  count: number;
  completedCount: number;
  step?: number;
  dueDate: string;
};

const CalendarWeek: React.FC<Props> = ({
  week,
  currentMonth,
  currentDate,
  historyData,
  selectDate,
}) => {
  return (
    <>
      {week.map((day, dayIndex) => (
        <CalendarButton
          key={dayIndex}
          day={day}
          currentMonth={currentMonth}
          currentDate={currentDate}
          historyData={historyData}
          selectDate={selectDate}
        />
      ))}
    </>
  );
};

export default CalendarWeek;
