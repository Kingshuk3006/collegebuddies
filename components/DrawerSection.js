import React from 'react';
import {Drawer, Box, IconButton} from '@material-ui/core';
import {useState} from 'react';
import {HiOutlineX} from 'react-icons/hi';
import Link from 'next/link';
import {TbSchool} from 'react-icons/tb';
import {MdOutlineEmojiEvents} from 'react-icons/md';
import {GiHamburgerMenu} from 'react-icons/gi';

const DrawerSection = ({path}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState (false);
  const sideNavItem = [
    {
      icons: <TbSchool className='text-white text-5xl'/>,
      text: 'Colleges',
      key: 'Colleges',
      link: '/college',
    },
    {
      icons: <MdOutlineEmojiEvents className='text-white text-5xl'/>,
      text: 'Activities',
      key: 'Activities',
      link: '/activities',
    },
  ];
  return (
    <div className="font-sweet_sans_pro">
      <IconButton onClick={() => setIsDrawerOpen (true)}>
        <GiHamburgerMenu className="text-white p-0" />
      </IconButton>
      <Drawer
        style={{height: 'full'}}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen (false)}
      >
        <Box textAlign="center" role="presentation">
          <div className="bg-[#000000] min-h-screen sm:h-full h-full flex flex-col text-lgit md:px-8 px-4 md:w-fit w-[80vw] space-y-8 py-4">
            <div className="text-white text-3xl flex flex-row items-center justify-between child:cursor-pointer">
              <Link href="/">
                <img src="/logo.png" className="w-16" />
              </Link>
              <HiOutlineX onClick={() => setIsDrawerOpen (false)} />
            </div>
            <div className="space-y-16">
              {sideNavItem.map (item => {
                return (
                  <Link
                    key={item.key}
                    href={path === '/' ? `${item.link}` : '/'}
                  >
                    <div
                      className="flex flex-row items-center justify-center space-x-2 md:text-xl text-lg font-sweet_sans_pro cursor-pointer"
                      onClick={() => {
                        setIsDrawerOpen (false);
                      }}
                    >
                      {item.icons}
                      <h1 className="text-white">{item.text}</h1>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center">
              <Link href="/connect">
                <button className="border-2 border-violet rounded-full font-gilroy text-white px-4 py-[2px] text-xl">
                  Add a event
                </button>
              </Link>

            </div>

          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerSection;
