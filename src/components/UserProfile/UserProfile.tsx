'use client';

import Image from 'next/image';
import tierIcon1 from '../../../public/images/tierIcon-red-1.svg';
import tierIcon2 from '../../../public/images/tierIcon-green-2.svg';
import tierIcon3 from '../../../public/images/tierIcon-blue-3.svg';
import tierIcon4 from '../../../public/images/tierIcon-rainbow-4.svg';
import FollowNumber from '../FollowNumber';
import ProfileCard from './ProfileCard';
import { useAtom } from 'jotai';
import { userAtom } from '../../store/authStore';

interface ProfileProps {
  option?: string | null;
}

const UserProfile: React.FC<ProfileProps> = ({ option }) => {
  const [{ tier }] = useAtom(userAtom);

  let tierIconSrc = '';
  if (tier === 'RED') {
    tierIconSrc = tierIcon1;
  } else if (tier === 'GREEN') {
    tierIconSrc = tierIcon2;
  } else if (tier === 'BLUE') {
    tierIconSrc = tierIcon3;
  } else if (tier === 'RAINBOW') {
    tierIconSrc = tierIcon4;
  } 

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
        <Image
          width={51}
          height={37}
          src={tierIconSrc}
          alt='티어 1단계'
          className='ml-auto'
        />
      )}
    </section>
  );
};

export default UserProfile;
