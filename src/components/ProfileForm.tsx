import React, { useState } from 'react';

interface ProfileFormProps {
  title: string;
  placeholder?: string;
  content?: string | null;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  title,
  placeholder: defaultPlaceholder,
  content,
}) => {
  // content 값이 null인 경우 defaultPlaceholder를 사용
  const actualPlaceholder = content === null ? defaultPlaceholder : undefined;

  // content를 로컬 상태로 관리
  const [inputContent, setInputContent] = useState(content || '');

  // input 요소의 값을 로컬 상태인 inputContent로 설정하고 변경 시 로컬 상태 업데이트
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  return (
    <form className='w-full mb-7 border-b-3 border-grey-65 border-b pb-3 flex'>
      <label htmlFor={title} className='w-1/4 mr-4'>
        {title}
      </label>
      <input
        type='text'
        id={title}
        className='border-none w-full bg-bg-color placeholder-grey-65'
        placeholder={actualPlaceholder}
        maxLength={15}
        value={inputContent}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default ProfileForm;
