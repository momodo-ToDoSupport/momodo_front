import React from 'react';
import ProfileImg from './ProfileImg';

const EditProfileImg = ({ defaultImg }) => {
  return (
    <form className='m-14'>
      <label htmlFor='profileImg'>
        <ProfileImg
          width={63}
          height={63}
          alt='프로필 이미지'
          defaultImg={defaultImg}
        />
      </label>
      <input type='file' id='profileImg' className='hidden' accept='image/*' />
    </form>
  );
};

export default EditProfileImg;
