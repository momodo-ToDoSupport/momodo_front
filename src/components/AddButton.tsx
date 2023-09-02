import Image from 'next/image';
import React from 'react';
import addButton from '../../public/images/plusIcon.svg';
import nonButton from '../../public/images/non-addIcon.svg';

interface AddButtonProps {
  openModal: () => void;
  todayDate: string;
  selectedDate: string;
}

const AddButton: React.FC<AddButtonProps> = ({
  openModal,
  todayDate,
  selectedDate,
}) => {
  const isDisabled = todayDate > selectedDate;
  return (
    <>
      <button
        onClick={openModal}
        disabled={isDisabled}
      >
        {!isDisabled ? (
          <Image src={addButton} alt='투두 추가하기 버튼' />
        ) : (
          <Image src={nonButton} alt='투두 추가 불가' />
        )}
      </button>
    </>
  );
};

export default AddButton;
