import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import homeIcon from '../../public/images/homeIcon.svg';
import searchIcon from '../../public/images/searchIcon.svg';
import chatIcon from '../../public/images/chatIcon.svg';
import profileIcon from '../../public/images/profileIcon.svg';
import TabBarIcon from './TabBarIcon';

const TabBar = () => {
  // TabBar activeIcon으로 변경하는 로직 추가하기
  return (
    <ul className='flex justify-around fixed bottom-0 left-0 right-0 pb-4 w-full bg-bg-color'>
      <TabBarIcon src={homeIcon} name='피드' />
      <TabBarIcon src={searchIcon} name='검색' />
      <TabBarIcon src={chatIcon} name='채팅' />
      <TabBarIcon src={profileIcon} name='프로필' />
    </ul>
  );
};

export default TabBar;
