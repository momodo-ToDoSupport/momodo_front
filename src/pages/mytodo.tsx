import React from 'react';
import MonthCalender from '../components/MonthCalender';
import MytodoHeader from '../components/header/MytodoHeader';
import UserProfile from '../components/UserProfile';
import TabBar from '../components/TabBar';

const mytodo = () => {
  return (
    <div className='p-6 w-full h-screen'>
      <MytodoHeader />
      <UserProfile />
      <MonthCalender />
      <TabBar />
    </div>
  );
};

export default mytodo;
