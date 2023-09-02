import Image from 'next/image';
import React from 'react';
import defaultProfileImg from '../../../public/images/profile-default.svg';

interface ProfileImgProps {
  width: number;
  height: number;
  src?: string;
  alt: string;
  defaultImg?: string;
}

const ProfileImg: React.FC<ProfileImgProps> = ({
  width,
  height,
  src = defaultProfileImg,
  alt,
  defaultImg,
}) => {
  return <Image width={width} height={height} src={src} alt={alt} />;
};

export default ProfileImg;
