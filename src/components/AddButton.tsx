import Image from 'next/image';
import React from 'react';
import addButton from '../../public/images/plusIcon.svg';

const AddButton = () => {
  return (
    <button className='w-10 h-10 bg-main-color rounded-full flex justify-center items-center mx-auto my-0 mt-4'>
      <Image src={addButton} />
    </button>
  );
};

export default AddButton;
