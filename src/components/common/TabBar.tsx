import React from 'react';
import todoIcon from '../../../public/images/todoIcon.svg';
import profileIcon from '../../../public/images/profileIcon.svg';
import TabBarIcon from './TabBarIcon';

const TabBar = () => {
  return (
    <ul className='flex justify-around sticky bottom-0 left-0 right-0 w-full bg-bg-color'>
      <TabBarIcon src={todoIcon} name='투두' path='mytodo' />
      <TabBarIcon src={profileIcon} name='프로필' path='myprofile' />
    </ul>
  );
};

export default TabBar;
