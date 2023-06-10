import React from 'react';

interface OwnProps {
  number: number;
  title: string;
}

const FollowNumber: React.FC<OwnProps> = ({ number, title }) => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-xl text-bold'>{number}</p>
      <p className='text-xxs'>{title}</p>
    </div>
  );
};

export default FollowNumber;
