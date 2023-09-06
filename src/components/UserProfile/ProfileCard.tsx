'use client';
// import { useAtom } from 'jotai';
// import { kakaoAtom, userAtom } from '../../store/authStore';
import React from 'react';
import ProfileImg from './ProfileImg';

interface ProfileCardProps {
  userId: string;
  name: string;
  profileImage: string;
  introduce: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  userId,
  name,
  profileImage,
  introduce,
}) => {

  return (
    <div className='flex items-center'>
      <ProfileImg
        width={45}
        height={45}
        alt='프로필 이미지'
        src={profileImage}
      />
      <div className='flex flex-col ml-2'>
        <p className='leading-tight'>
          {name}
          {/* {userId?.length === 0 ? kakaoName : userId} */}
        </p>
        <span className={`text-xxs text-grey-C9`}>{introduce}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
