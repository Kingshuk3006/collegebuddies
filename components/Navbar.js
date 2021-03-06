import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DrawerSection from './DrawerSection';
import {useSession, signIn, signOut} from 'next-auth/react';
import {useEffect} from 'react';
import { useState } from 'react';

const navbarData = [
  {
    key: Date.now (),
    item: 'Home',
    link: '/',
  },
  {
    key: Date.now (),
    item: 'Events',
    link: '/activities',
  },
  {
    key: Date.now (),
    item: 'Community',
    link: '/community',
  },
  {
    key: Date.now (),
    item: 'Projects',
    link: '/projectsall',
  },
];

const Navbar = () => {
  const {data: session} = useSession ();

  // async function handleLogin () {
  //   const response = await fetch (
  //     'https://collegebuddies-backend.vercel.app/profiles',
  //     {
  //       method: 'POST',
  //       header: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify ({
  //         name: 'KINGSHUK',
  //         email: 'KINGSHUK',
  //         imageUrl: 'KINGSHUK',
  //       }),
  //     }
  //   );
  //   const data = await response.json ();
  //   console.log (data);
  // }
  // useEffect (() => {
  //   // console.log (session.user.name);
  //   handleLogin ();
  // }, []);

  // if (session) {
  //   response ();
  // }

  return (
    <div className="bg-[#0E0E0E] font-Audiowide text-xl text-white flex justify-between md:px-16 px-4 h-28 items-center">
      <div className="relative w-12 h-12 cursor-pointer">
        <Link href="/">
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </Link>
      </div>
      <div className="hidden md:block">
        {/* {session
          ? <h1 className="text-white">BOOM YOU ARE IN</h1>
          : <h1 className="text-white">BOOM YOU ARE not IN</h1>} */}

        <ul className="flex space-x-12">
          {navbarData.map ((item, i) => {
            return (
              <Link href={item.link} key={i}>
                <li
                  key={item.key}
                  className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 duration-900"
                >
                  {item.item}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="hidden md:block">
        <button
          className={`bg-white border-4 border-violet px-4 py-2 rounded-full text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transi duration-900 ${session ? 'hidden' : 'block'}`}
          onClick={signIn}
        >
          Log in
        </button>
        <button
          className={`bg-white border-4 border-violet px-4 py-2 rounded-full text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transi duration-900 ${session ? 'block' : 'hidden'}`}
          onClick={signOut}
        >
          Log out
        </button>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-between space-x-4">
          <button
            className={`bg-white border-2 border-violet px-4 text-sm py-1 rounded-full text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transi duration-900 ${session ? 'hidden' : 'block'}`}
          >
            Log in
          </button>
          <button
            className={`bg-white border-2 border-violet px-4 text-sm py-1 rounded-full text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transi duration-900 ${session ? 'block' : 'hidden'}`}
          >
            Log out
          </button>
          <DrawerSection />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
