import React from 'react';
import ChatInput from '../components/ChatInput';
import BasicHeader from '../components/Header/BasicHeader';

const chatroom = () => {
  return (
    <>
      <BasicHeader option='chatroom' />
      <ChatInput />
    </>
  );
};

export default chatroom;
