import React from 'react';
import ProfileImg from './ProfileImg';

// 수정필요
type Props = {
  defaultImg: any;
};

const EditProfileImg: React.FC<Props> = ({ defaultImg }) => {
  return (
    <form className='m-14'>
      <label htmlFor='profileImg'>
        <ProfileImg
          width={63}
          height={63}
          alt='프로필 이미지'
          defaultImg={defaultImg}
          src={'defaultProfileImg'}
        />
      </label>
      <input type='file' id='profileImg' className='hidden' accept='image/*' />
    </form>
  );
};

export default EditProfileImg;
