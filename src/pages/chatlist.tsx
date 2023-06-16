import React from 'react';
import BasicHeader from '../components/Header/BasicHeader';
import TabBar from '../components/TabBar';
import ChatUserList from '../components/UserProfile/ChatUserList';

const chatlist = () => {
  return (
    <>
      <BasicHeader />
      <div className='p-5'>
        <ChatUserList />
        <ChatUserList />
        <ChatUserList />
      </div>
      <TabBar />
    </>
  );
};

export default chatlist;
