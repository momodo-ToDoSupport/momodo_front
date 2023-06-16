import moment from 'moment';
import 'moment/locale/ko';
import React from 'react';
import ProfileCard from './ProfileCard';

const ChatUserList = () => {
  // 시간은 기능구현시 디테일하게 수정
  const Date = moment().format('YYYY.MM.DD');
  const currentTime = moment().format('A hh:mm');

  return (
    <div className='flex justify-between mb-4'>
      <ProfileCard option='chat' />
      <span className='text-xs self-end text-grey-C9 pb-1'>
        {Date === moment().format('YYYY.MM.DD') ? currentTime : Date}
      </span>
      <span className='absolute h-[13px] w-[13px] rounded-full bg-main-color'></span>
    </div>
  );
};

export default ChatUserList;
