import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import TabBar from '../../components/TabBar';
import MainHeader from '../../components/header/MainHeader';
import MonthCalender from '../../components/Calender/MonthCalender';

const MyTodo = () => {
  return (
    <div className='p-6 w-full h-screen'>
      <MainHeader option='todo' />
      <UserProfile />
      <MonthCalender />
      <TabBar />
    </div>
  );
};

export default MyTodo;
