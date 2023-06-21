import Image from 'next/image';
import React from 'react';
import imageIcon from '../../public/images/imageIcon.svg';

const ChatInput = () => {
  return (
    <form className='w-full fixed bottom-0 flex justify-between items-center p-5'>
      <label htmlFor='uploadImg' className='cursor-pointer mr-3'>
        <Image src={imageIcon} alt='이미지 업로드' />
      </label>
      <input type='file' id='uploadImg' className='hidden' />
      <label htmlFor='chatInput' className='hidden'>
        채팅창
      </label>
      <input
        type='text'
        id='chatInput'
        placeholder='메시지 입력하기'
        className='w-full bg-grey-44 rounded-full placeholder-grey-97 text-sm p-2 pl-4'
      />
      <button className='text-sm text-grey-97 absolute z-10 right-9'>전송</button>
    </form>
  );
};

export default ChatInput;
