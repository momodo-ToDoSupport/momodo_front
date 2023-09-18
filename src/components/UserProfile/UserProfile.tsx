'use client';

import Image from 'next/image';
import tierIcon1 from '../../../public/images/tierIcon-red-1.svg';
import tierIcon2 from '../../../public/images/tierIcon-green-2.svg';
import tierIcon3 from '../../../public/images/tierIcon-blue-3.svg';
import tierIcon4 from '../../../public/images/tierIcon-rainbow-4.svg';
import ProfileCard from './ProfileCard';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../service/auth';

const UserProfile: React.FC = () => {
  const { data: userInfoData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(),
    staleTime: 10 * 10 * 2000,
  });

  let tierIconSrc = '';
  let tierLevel = '';
  if (userInfoData?.tier === 'RED') {
    tierIconSrc = tierIcon1;
    tierLevel = 'LV.1 : Red';
  } else if (userInfoData?.tier === 'GREEN') {
    tierIconSrc = tierIcon2;
    tierLevel = 'LV.2 : Green';
  } else if (userInfoData?.tier === 'BLUE') {
    tierIconSrc = tierIcon3;
    tierLevel = 'LV.3 : Blue';
  } else if (userInfoData?.tier === 'RAINBOW') {
    tierIconSrc = tierIcon4;
    tierLevel = 'LV.4 : RainBow';
  }

  return (
    <section className='flex items-center justify-between mb-4'>
      <h1 className='hidden'>유저 프로필</h1>
      <ProfileCard
        userId={userInfoData?.userId}
        name={userInfoData?.name}
        profileImage={userInfoData?.profileImage}
        introduce={userInfoData?.introduce}
      />
      <div className='flex flex-col items-center justify-around'>
        <Image
          width={40}
          height={40}
          src={tierIconSrc}
          alt='티어 1단계'
          className='ml-auto'
        />
        <span className='text-xxs mt-2'>{tierLevel}</span>
      </div>
    </section>
  );
};

export default UserProfile;
