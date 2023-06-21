import React from 'react';
import ChatBox from '../components/ChatBox';
import ChatInput from '../components/ChatInput';
import BasicHeader from '../components/Header/BasicHeader';

const chatroom = () => {
  return (
    <>
      <BasicHeader option='chatroom' />
      <div className='p-5 pt-2'>
        <ChatBox />
        <ChatBox />
        <ChatBox option='my' />
      </div>
      <ChatInput />
    </>
  );
};

export default chatroom;
