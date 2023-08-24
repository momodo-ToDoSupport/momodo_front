import React from 'react';
import calendarIcon from '../../../public/images/calendarIcon.svg';
import Image from 'next/image';

type Props = {
  toggleCalender: () => void;
};

const toggleCalenderBtn: React.FC<Props> = ({ toggleCalender }) => {
  return (
    <button onClick={toggleCalender}>
      <Image
        src={calendarIcon}
        alt='캘린더 버튼'
        className='absolute right-0 top-0'
      />
    </button>
  );
};

export default toggleCalenderBtn;
