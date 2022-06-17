import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navbarData = [
  {
    key: Date.now (),
    item: 'Home',
    link: '/',
  },
  {
    key: Date.now (),
    item: 'Activities',
    link: '/activities',
  },
  {
    key: Date.now (),
    item: 'Colleges',
    link: '/colleges',
  },
];

const Navbar = () => {
  return (
    <div className="bg-[#0E0E0E] font-Audiowide text-xl text-white flex justify-between px-16 h-28 items-center">
      <div className="relative w-12 h-12">
        <Image src="/logo.png" layout="fill" objectFit="contain" />
      </div>
      <ul className="flex space-x-12">
        {navbarData.map (item => {
          return (
            <Link href={item.link}>
              <li
                key={item.key}
                className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 duration-300"
              >
                {item.item}
              </li>
            </Link>
          );
        })}
      </ul>
      <div>
        <button className="bg-white border-4 border-violet px-4 py-2 rounded-full text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transi duration-900">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
