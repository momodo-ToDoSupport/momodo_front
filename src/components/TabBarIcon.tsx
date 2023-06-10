import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TabBarProps {
  src: string;
  name: string;
}

const TabBarIcon: React.FC<TabBarProps> = ({ src, name }) => {
  return (
    <Link href='/' className='flex flex-col items-center mt-2'>
      <Image src={src} alt={name} />
      <p className='text-xs text-grey-65 pt-2'>{name}</p>
    </Link>
  );
};

export default TabBarIcon;
