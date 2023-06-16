import React from 'react';
import ProfileImg from './ProfileImg';

interface ProfileCardProps {
  option?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ option }) => {
  return (
    <div className='flex items-center'>
      <ProfileImg width={45} height={45} alt='프로필 이미지' />
      <div className='flex flex-col ml-2'>
        <p className='leading-tight'>username</p>
        <span className={`${option === 'chat' ? 'text-sm' : 'text-xxs'} text-grey-C9`}>FE Dev</span>
      </div>
    </div>
  );
};

export default ProfileCard;
