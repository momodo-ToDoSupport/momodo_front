import Image from 'next/image';
import React from 'react';
import defaultProfileImg from '../../public/images/profile-default.svg';

const ProfileImg = ({ width, height, src, alt }) => {
  return <Image width={width} height={height} src={src} alt={alt} />;
};

ProfileImg.defaultProps = {
  src: defaultProfileImg,
};

export default ProfileImg;
