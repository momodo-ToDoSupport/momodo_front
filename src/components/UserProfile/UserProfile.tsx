import Image from 'next/image';
import React from 'react';
import tierIcon1 from '../../../public/images/tierIcon-red-1.svg';
import FollowNumber from '../FollowNumber';
import ProfileCard from './ProfileCard';

interface ProfileProps {
  option?: string | null;
}

const UserProfile: React.FC<ProfileProps> = ({ option }) => {
  return (
    <section className='flex items-center justify-between mb-4'>
      <h1 className='hidden'>유저 프로필</h1>
      <ProfileCard />
      {option === 'follow' ? (
        <div className='flex flex-row gap-6'>
          <FollowNumber number={0} title={'팔로워'} />
          <FollowNumber number={0} title={'팔로잉'} />
        </div>
      ) : (
        <Image width={51} height={37} src={tierIcon1} alt='티어 1단계' className='ml-auto' />
      )}
    </section>
  );
};

export default UserProfile;
