import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TabBarProps {
  src: string;
  name: string;
}

const TabBarIcon: React.FC<TabBarProps> = ({ src, name }) => {
  return (
    <li className='text-xs text-grey-65 pt-2 mt-2 w-full'>
      <Link href='/' className='flex flex-col items-center'>
        <Image src={src} alt={name} className='pb-2' />
        {name}
      </Link>
    </li>
  );
};

export default TabBarIcon;
