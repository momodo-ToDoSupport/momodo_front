import React from 'react';

interface ProfileFormProps {
  title: string;
  placeholder?: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ title, placeholder }) => {
  return (
    <form className='w-full mb-7 border-b-3 border-grey-65 border-b pb-3 flex'>
      <label htmlFor={title} className='w-1/4 mr-4'>
        {title}
      </label>
      <input
        type='text'
        id={title}
        className='border-none w-full bg-bg-color placeholder-grey-65'
        placeholder={placeholder}
        maxLength={15}
      />
    </form>
  );
};

export default ProfileForm;
