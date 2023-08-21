'use client';
import React from 'react';
import MonthCalender from '../../components/Calender/MonthCalender';
import WeeklyCalender from '../../components/Calender/WeeklyCalender';
import { useQuery } from '@tanstack/react-query';
import { getTodoData } from '../../api/todo';


const test = '2023-08-17';
const CalenderContainer = () => {

  return (
    <div>
      <MonthCalender />
    </div>
  );
};
export default CalenderContainer;

// interface CalenderContainerProps {
//   showMonthCalender: boolean;
// }

// const CalenderContainer: React.FC<CalenderContainerProps> = ({
//   showMonthCalender,
// }) => {
//   return (
//     <div>
//       {/* {showMonthCalender ? <MonthCalender /> : <WeeklyCalender />} */}
//       <MonthCalender />
//       <TodoList />
//     </div>
//   );
// };
// export default CalenderContainer;
