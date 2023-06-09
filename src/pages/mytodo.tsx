import React from 'react';
import TabBar from '../components/TabBar';
import UserProfile from '../components/UserProfile';

const mytodo = () => {
  return (
    <>
      <UserProfile option='follow' />
      <TabBar />
    </>
  );
};

export default mytodo;
