import React from 'react';
import ProfileImg from './ProfileImg';

const ProfileCard = () => {
  return (
    <div className='flex items-center'>
      <ProfileImg width={45} height={45} alt='프로필 이미지' />
      <div className='flex flex-col ml-2'>
        <p className='leading-tight'>username</p>
        <span className='text-xxs'>FE Dev</span>
      </div>
    </div>
  );
};

export default ProfileCard;
