import React, { useEffect, useState } from 'react';

interface ProfileFormProps {
  title: string;
  placeholder?: string;
  content?: string | null;
  onInputChange?: (newValue: string) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  title,
  placeholder,
  content,
  onInputChange,
}) => {
  const [inputContent, setInputContent] = useState(content);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputContent(newValue);
    onInputChange?.(newValue);
  };

  useEffect(() => {
    setInputContent(content);
  }, [content]);

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
        value={inputContent}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default ProfileForm;
