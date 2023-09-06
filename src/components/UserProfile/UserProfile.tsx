'use client';

import Image from 'next/image';
import tierIcon1 from '../../../public/images/tierIcon-red-1.svg';
import tierIcon2 from '../../../public/images/tierIcon-green-2.svg';
import tierIcon3 from '../../../public/images/tierIcon-blue-3.svg';
import tierIcon4 from '../../../public/images/tierIcon-rainbow-4.svg';
import FollowNumber from '../FollowNumber';
import ProfileCard from './ProfileCard';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../service/auth';

interface ProfileProps {
  option?: string | null;
}

const UserProfile: React.FC<ProfileProps> = ({ option }) => {
  const { data: userInfoData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(),
  });
  console.log(userInfoData);
  localStorage.setItem('Tier',userInfoData?.tier);

  let tierIconSrc = '';
  if (userInfoData.tier === 'RED') {
    tierIconSrc = tierIcon1;
  } else if (userInfoData.tier === 'GREEN') {
    tierIconSrc = tierIcon2;
  } else if (userInfoData.tier === 'BLUE') {
    tierIconSrc = tierIcon3;
  } else if (userInfoData.tier === 'RAINBOW') {
    tierIconSrc = tierIcon4;
  }

  return (
    <section className='flex items-center justify-between mb-4'>
      <h1 className='hidden'>유저 프로필</h1>
      <ProfileCard
        userId={userInfoData.userId}
        name={userInfoData.name}
        profileImage={userInfoData.profileImage}
        introduce={userInfoData.introduce}
      />
      {option === 'follow' ? (
        <div className='flex flex-row gap-6'>
          <FollowNumber number={0} title={'팔로워'} />
          <FollowNumber number={0} title={'팔로잉'} />
        </div>
      ) : (
        <Image
          width={51}
          height={37}
          src={tierIcon1}
          alt='티어 1단계'
          className='ml-auto'
        />
      )}
    </section>
  );
};

export default UserProfile;
