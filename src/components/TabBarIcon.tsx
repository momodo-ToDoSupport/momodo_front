'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import mytodoActive from '../../public/images/todoIcon-active.svg';
import searchActive from '../../public/images/searchIcon-active.svg';
import feedActive from '../../public/images/feedIcon-active.svg';
import myprofileActive from '../../public/images/profileIcon-active.svg';

interface TabBarProps {
  src: string;
  name: string;
  path: string;
}

type ActiveImageMap = {
  [key: string]: string;
};

const TabBarIcon: React.FC<TabBarProps> = ({ src, name, path }) => {
  const pathname = usePathname();
  const isActivePage = pathname === `/${path}`;
  const activeImageMap: ActiveImageMap = {
    mytodo: mytodoActive,
    search: searchActive,
    feed: feedActive,
    myprofile: myprofileActive,
  };

  const activeImagePath = activeImageMap[path] || src;

  return (
    <li
      className={`text-xs pt-2 mt-2 w-full ${
        isActivePage ? 'text-main-color' : 'text-grey-65'
      }`}
    >
      <Link href={`/${path}`} className='flex flex-col items-center'>
        <Image
          src={isActivePage ? activeImagePath : src}
          alt={name}
          className='pb-2'
          width={25}
          height={25}
        />
        {name}
      </Link>
    </li>
  );
};

export default TabBarIcon;
