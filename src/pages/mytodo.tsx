import React from 'react';
import MonthCalender from '../components/MonthCalender';
import MytodoHeader from '../components/Header/MytodoHeader';
import UserProfile from '../components/UserProfile';
import TabBar from '../components/TabBar';
import TodoList from '../components/TodoList/TodoList';
import YourtodoHeader from '../components/Header/YourtodoHeader';

const mytodo = () => {
  return (
    <div className='p-6 w-full h-screen'>
      <YourtodoHeader />
      {/* <MytodoHeader /> */}
      <UserProfile />
      <MonthCalender />
      <TodoList />
      <TabBar />
    </div>
  );
};

export default mytodo;
