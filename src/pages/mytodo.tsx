import React from 'react';
import MonthCalender from '../components/MonthCalender';
import MytodoHeader from '../components/Header/MytodoHeader';
import UserProfile from '../components/UserProfile';
import TabBar from '../components/TabBar';
import TodoList from '../components/TodoList/TodoList';

const mytodo = () => {
  return (
    <div className='p-6 w-full h-screen'>
      <MytodoHeader />
      <UserProfile />
      <MonthCalender />
      <TodoList />
      <TabBar />
    </div>
  );
};

export default mytodo;
