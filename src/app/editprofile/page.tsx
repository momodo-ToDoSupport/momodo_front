import React from 'react';
import BasicHeader from '../../components/header/BasicHeader';
import ProfileForm from '../../components/ProfileForm';
import TabBar from '../../components/TabBar';
import EditProfileImg from '../../components/UserProfile/EditProfileImg';

const editprofile = () => {
  return (
    <>
      <BasicHeader option='myprofile' />
      <div className='flex flex-col items-center p-7'>
        <EditProfileImg />
        {/* 기본 value로 username이 세팅되도록 구현하기 */}
        <ProfileForm title='이름' placeholder='이름 입력' />
        <ProfileForm title='자기소개' placeholder='자기소개 입력 (최대 15글자)' />
      </div>
      <TabBar />
    </>
  );
};

export default editprofile;
