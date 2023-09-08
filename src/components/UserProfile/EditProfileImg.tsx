import React from 'react';
import ProfileImg from './ProfileImg';
import test from '../../../public/images/TodayTier3.svg';

// 수정필요
// type Props = {
//   defaultImg: any;
// };

const EditProfileImg: React.FC = () => {
  return (
    <div className='my-8'>
      <label htmlFor='profileImg'></label>
      <input type='file' id='profileImg' accept='image/*' />
      <ProfileImg
        width={80}
        height={80}
        alt='프로필 이미지'
        // defaultImg={defaultImg}
        src={test}
        type={'modify'}
      />
    </div>
  );
};

export default EditProfileImg;
