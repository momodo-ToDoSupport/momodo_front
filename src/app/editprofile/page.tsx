'use client';

import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BasicHeader from '../../components/header/BasicHeader';
import ProfileForm from '../../components/ProfileForm';
import TabBar from '../../components/TabBar';
import EditProfileImg from '../../components/UserProfile/EditProfileImg';
import { getUserInfo } from '../../service/auth';

const EditProfile = () => {
  const [profileImg, setProfileImg] = useState('');
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const userId = localStorage.getItem('userId');
  const userMutation = useMutation(getUserInfo, {
    onSuccess(data) {
      if (data) {
        console.log(data);
        setProfileImg(data.profileImage);
        setName(data.name);
        setIntroduce(data.introduce);
      }
    },
    onError(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    if (userId !== null) {
      userMutation.mutate(userId);
    }
  }, []);

  return (
    <div className='h-screen w-full'>
      <BasicHeader option='myprofile' />
      <div className='flex flex-col items-center p-7'>
        <EditProfileImg img={profileImg} />
        <p className='pb-12 text-lg'>{userId}</p>
        <ProfileForm title='이름' placeholder='이름 입력' content={name} />
        <ProfileForm
          title='자기소개'
          placeholder='자기소개 입력 (최대 15글자)'
          content={introduce}
        />
      </div>
      <TabBar />
    </div>
  );
};

export default EditProfile;
