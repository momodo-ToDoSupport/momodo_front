import Image from 'next/image';
import React from 'react';
import addButton from '../../public/images/plusIcon.svg';

interface AddButonProps {
  openModal(): void;
}

const AddButton: React.FC<AddButonProps> = ({ openModal }) => {
  return (
    <>
      <button
        className='w-8 h-8 bg-main-color rounded-full flex justify-center items-center'
        onClick={openModal}
      >
        <Image src={addButton} alt='투두 추가하기 버튼' />
      </button>
    </>
  );
};

export default AddButton;
