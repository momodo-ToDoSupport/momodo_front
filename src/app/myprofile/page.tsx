import React from 'react';
import MainHeader from '../../components/header/MainHeader';
import TabBar from '../../components/TabBar';
import Tier from '../../components/Tier';
import UserProfile from '../../components/UserProfile/UserProfile';
import { TodoManageMent } from '../../components/TodoManageMent';

const myprofile = () => {
  return (
    <div className='p-6 w-full h-screen'>
      <MainHeader option='myprofile' />
      <UserProfile option='follow' />
      <Tier />
      <TodoManageMent />
      <TabBar />
    </div>
  );
};

export default myprofile;
