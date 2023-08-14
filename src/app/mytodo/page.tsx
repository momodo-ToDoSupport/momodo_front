'use client';

import React, { useState } from 'react';
import MonthCalender from '../../components/Calender/MonthCalender';
import UserProfile from '../../components/UserProfile/UserProfile';
import TabBar from '../../components/TabBar';
import TodoList from '../../components/TodoList/TodoList';
import WeeklyCalender from '../../components/Calender/WeeklyCalender';
import MainHeader from '../../components/header/MainHeader';

const MyTodo = () => {
  const [showMonthCalender, setShowMonthCalender] = useState<boolean>(true);

  const toggleCalender = () => {
    setShowMonthCalender(!showMonthCalender);
  };

  return (
    <div className='p-6 w-full h-screen'>
      <MainHeader toggleCalender={toggleCalender} option='todo' />
      <UserProfile />
      {showMonthCalender ? <MonthCalender /> : <WeeklyCalender />}
      <TodoList />
      <TabBar />
    </div>
  );
};

export default MyTodo;
