import React from 'react';
import ProfileImg from './UserProfile/ProfileImg';

interface ChatBoxProps {
  option?: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ option }) => {
  return (
    <div className={`flex pt-5 items-start ${option === 'my' && 'flex-row-reverse'}`}>
      <ProfileImg width={42} height={42} alt='유저 프로필 이미지' />
      <p
        className={`px-3 py-2 rounded-xl  w-2/3 ${
          option === 'my'
            ? 'rounded-tr-none mr-3 bg-main-color text-black'
            : 'rounded-tl-none ml-3 bg-grey-44'
        } `}
      >
        우아오아우아오아우아오아우아오아우아오아우아오아우아오아우아오아우아오아우아오아우아오아우아오아우아오아
      </p>
    </div>
  );
};

export default ChatBox;
