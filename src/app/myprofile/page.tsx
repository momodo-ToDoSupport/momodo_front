import React from 'react';
import MainHeader from '../../components/header/MainHeader';
import TabBar from '../../components/TabBar';
import Tier from '../../components/Tier';
import UserProfile from '../../components/UserProfile/UserProfile';

const myprofile = () => {
  return (
    <div className='p-6'>
      <MainHeader option='myprofile' />
      <UserProfile option='follow' />
      <Tier />
      <TabBar />
    </div>
  );
};

export default myprofile;
