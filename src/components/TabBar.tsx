import React from 'react';
import todoIcon from '../../public/images/todoIcon.svg';
import searchIcon from '../../public/images/searchIcon.svg';
import feedIcon from '../../public/images/feedIcon.svg';
import profileIcon from '../../public/images/profileIcon.svg';
import TabBarIcon from './TabBarIcon';

const TabBar = () => {
  return (
    <ul className='flex justify-around fixed bottom-0 left-0 right-0 pb-4 w-full bg-bg-color'>
      <TabBarIcon src={todoIcon} name='투두' path='mytodo' />
      <TabBarIcon src={searchIcon} name='검색' path='search' />
      <TabBarIcon src={feedIcon} name='피드' path='feed' />
      <TabBarIcon src={profileIcon} name='프로필' path='myprofile' />
    </ul>
  );
};

export default TabBar;
