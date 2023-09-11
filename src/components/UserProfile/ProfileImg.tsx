import Image from 'next/image';
import React from 'react';
import defaultProfileImg from '../../../public/images/profile-default.svg';

interface ProfileImgProps {
  width: number;
  height: number;
  src: string;
  alt: string;
  defaultImg?: string;
  type: string | '';
}

const ProfileImg: React.FC<ProfileImgProps> = ({
  width,
  height,
  src,
  alt,
  defaultImg,
  type,
}) => {
  return (
    <>
      {type === 'modify' ? (
        <Image className='cursor-pointer profileEidtImage' width={width} height={height} src={src} alt={alt} />
      ) : (
        <Image
          className='profileImage cursor-pointer'
          width={width}
          height={height}
          src={src}
          alt={alt}
        />
      )}
    </>
  );
};

export default ProfileImg;
