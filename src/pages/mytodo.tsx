import React, { useState } from 'react';
import MonthCalender from '../components/Calender/MonthCalender';
import MytodoHeader from '../components/Header/MytodoHeader';
import UserProfile from '../components/UserProfile/UserProfile';
import TabBar from '../components/TabBar';
import TodoList from '../components/TodoList/TodoList';
import YourtodoHeader from '../components/Header/YourtodoHeader';
import WeeklyCalender from '../components/Calender/WeeklyCalender';

const mytodo = () => {
  const [showMonthCalender, setShowMonthCalender] = useState<boolean>(true);

  const toggleCalender = () => {
    setShowMonthCalender(!showMonthCalender);
  };

  return (
    <div className='p-6 w-full h-screen'>
      {/* <YourtodoHeader /> */}
      <MytodoHeader toggleCalender={toggleCalender} />
      <UserProfile />
      {showMonthCalender ? <MonthCalender /> : <WeeklyCalender />}
      <TodoList />
      <TabBar />
    </div>
  );
};

export default mytodo;
