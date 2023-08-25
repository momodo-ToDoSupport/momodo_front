'use client';
import { useAtom } from 'jotai';
import React from 'react';
import { kakaoAtom, userAtom } from '../../store/authStore';
import ProfileImg from './ProfileImg';

interface ProfileCardProps {
  option?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ option }) => {
  const [{ userId }] = useAtom(userAtom);
  const [{ kakaoName }] = useAtom(kakaoAtom);

  return (
    <div className='flex items-center'>
      <ProfileImg width={45} height={45} alt='프로필 이미지' />
      <div className='flex flex-col ml-2'>
        <p className='leading-tight'>
          {userId.length === 0 ? kakaoName : userId}
        </p>
        <span
          className={`${
            option === 'chat' ? 'text-sm' : 'text-xxs'
          } text-grey-C9`}
        >
          자기소개를 입력해주세요.
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
