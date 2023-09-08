'use client';

import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import BasicHeader from '../../header/BasicHeader';
import ProfileForm from '../../ProfileForm';
import TabBar from '../../TabBar';
import uploadImg from '../../../../public/images/upload-file.svg';
import { getUserInfo, putUserProfile } from '../../../service/auth';
import ProfileImg from '../ProfileImg';
import Image from 'next/image';

const EditProfileFrom = () => {
  const { data: userInfo } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(),
  });
  const [profileName, setprofileName] = useState<string>(userInfo.name);
  const [profileIntroduce, setprofileIntroduce] = useState<string>(
    userInfo.introduce
  );
  const [selectedFile, setSelectedFile] = useState(userInfo.profileImage);
  const handleNameChange = (newValue: string) => {
    setprofileName(newValue);
  };

  const handleIntroChange = (newValue: string) => {
    setprofileIntroduce(newValue);
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;
    setSelectedFile(file);
  };

  const queryClient = useQueryClient();
  const saveMutation = useMutation(putUserProfile, {
    onSuccess(data) {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    },
    onError(error) {
      console.log(error);
    },
  });

  const handleSave = async () => {
    const formData = new FormData();
    const updateData = {
      name: profileName,
      introduce: profileIntroduce,
    };

    if (selectedFile !== null) {
      formData.append('file', selectedFile);
      const updateDto = new Blob([JSON.stringify(updateData)], {
        type: 'application/json',
      });
      formData.append('updateDto', updateDto);
    }

    saveMutation.mutate(formData);
    queryClient.invalidateQueries({ queryKey: ['userInfo'] });
  };

  return (
    <>
      <BasicHeader onSave={handleSave} />
      <form className='flex-1 flex flex-col items-center p-7'>
        <div className='my-8 relative rounded-full'>
          <ProfileImg
            width={70}
            height={70}
            alt='프로필 이미지'
            src={userInfo.profileImage}
            type={'modify'}
          />
          <label htmlFor='profileImg'>
            <Image className='midifyBtn' src={uploadImg} alt={'수정버튼'} />
          </label>
          <input
            type='file'
            id='profileImg'
            className='hidden'
            accept='image/*'
            onChange={handleFileChange}
          />
        </div>
        <div className='flex flex-col items-center mb-12'>
          <p className='pb-3 text-lg'>{userInfo.userId}</p>
          <p className='pb-3 text-lg'>{userInfo.name}</p>
        </div>
        <ProfileForm
          title='Name'
          placeholder='닉네임을 입력해주세요'
          content={profileName}
          onInputChange={handleNameChange}
        />
        <ProfileForm
          title='introduce'
          placeholder='소개글을 입력해주세요.(최대 15글자)'
          content={profileIntroduce}
          onInputChange={handleIntroChange}
        />
      </form>
      <TabBar />
    </>
  );
};

export default EditProfileFrom;
