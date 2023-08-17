import React, { useState } from 'react';
import MonthCalender from '../../components/Calender/MonthCalender';
import WeeklyCalender from '../../components/Calender/WeeklyCalender';

export default function CalenderContainer() {
  const [showMonthCalender, setShowMonthCalender] = useState<boolean>(true);

  const toggleCalender = () => {
    setShowMonthCalender(!showMonthCalender);
  };
  return <>{showMonthCalender ? <MonthCalender /> : <WeeklyCalender />}</>;
}
