import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#26113B] md:px-44 md:py-16 text-white space-y-6 font-gilroy">
      <div className='flex justify-between py-4 items-center'>
        <h1 className='font-Audiowide text-2xl '>College Buddies</h1>
        <button className='bg-violet px-4 py-2 rounded-full text-lg font-semibold'>Contact Us</button>
      </div>
      <hr className='border-zinc-500 border-0.5' />
      <div className='flex justify-between child:flex child:space-x-8 child:items-center child:text-lg'>
        <img src="/logo.png" />
        <ul className='child:cursor-pointer'>
          <li>
            Team
          </li>
          <li>
            About Us
          </li>
          <li>
            Send Feedback
          </li>
        </ul>
        <div className='child:text-2xl child:cursor-pointer '>
          <BsLinkedin className='hover:text-violet' />
          <BsInstagram className='hover:text-violet' />
          <FaDiscord className='hover:text-violet' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
