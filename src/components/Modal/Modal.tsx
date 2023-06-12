import React from 'react';
import newtodo from '../../../public/images/newtodoIcon.svg';
import close from '../../../public/images/closeIcon.svg';
import Image from 'next/image';
import change from '../../../public/images/switchIcon.svg';
import Button from '../Button';

const selectWeek = [
  { value: '안함', name: '안 함' },
  { value: '일요일마다', name: '일요일 마다' },
  { value: '월요일마다', name: '월요일 마다' },
  { value: '화요일마다', name: '화요일 마다' },
  { value: '수요일마다', name: '수요일 마다' },
  { value: '목요일마다', name: '목요일 마다' },
  { value: '금요일마다', name: '금요일 마다' },
  { value: '토요일마다', name: '토요일 마다' },
];

const Modal = ({ children, type }) => {
  return (
    <article className='bg-grey-44 z-10 w-full fixed bottom-0 left-0 rounded-tr-3xl rounded-tl-3xl pb-10'>
      <h1 className='hidden'>모달창</h1>

      {type === 'newtodo' ? (
        <>
          <div className='flex relative mt-4 mb-10'>
            <Image src={newtodo} alt='새로운 투두' className='mx-auto my-0' />
            <button className='absolute right-4'>
              <Image src={close} alt='닫기 버튼' />
            </button>
          </div>
          <div className='flex flex-col items-center justify-center text-center mb-12'>
            <p className='bg-grey-65 text-xxl w-16 h-16 rounded-xl pt-2'>🎒</p>
            <button className='text-[#909090] flex items-center mt-2'>
              <Image src={change} alt='이모지 변경하기 버튼' className='mr-1 mt-1' />
              Change icon
            </button>
          </div>
          <form className='flex flex-col items-center'>
            <input
              type='text'
              placeholder='Title...'
              className='bg-grey-65 rounded-lg text-xs px-3 py-2 w-4/6 mb-3'
            />
            <div className='flex items-center mb-10'>
              <p className='text-xs bg-grey-65 px-3 py-2 rounded-lg mr-2'>반 복</p>
              <select
                className='bg-grey-65 rounded-lg pl-28 pr-3 py-2 text-right text-xs'
                placeholder='안 함'
              >
                {selectWeek.map((day) => (
                  <option value={day.value} defaultValue='안 함'>
                    {day.name}
                  </option>
                ))}
              </select>
            </div>
            <Button disabled={true} buttonSize='medium'>
              추가하기
            </Button>
          </form>
        </>
      ) : (
        <>
          <span className='block w-1/5 h-1 bg-grey-65 rounded-md mx-auto mt-4 mb-8' />
          <div className='w-full flex flex-col'>{children}</div>
        </>
      )}
    </article>
  );
};

export default Modal;
