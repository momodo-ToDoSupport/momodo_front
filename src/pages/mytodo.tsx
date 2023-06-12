import React from 'react';
import MonthCalender from '../components/MonthCalender';
import MytodoHeader from '../components/header/MytodoHeader';
import UserProfile from '../components/UserProfile';

const mytodo = () => {
  return (
    <div className='p-6'>
      <MytodoHeader />
      <UserProfile />
      <MonthCalender />
    </div>
  );
};

export default mytodo;
