import React from 'react';
import {BsLinkedin, BsInstagram} from 'react-icons/bs';
import {FaDiscord} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#26113B] lg:px-32 md:px-20 md:py-16 py-8 px-8 text-white space-y-6 font-gilroy">
      <div className="flex justify-between py-4 items-center">
        <h1 className="font-Audiowide md:text-2xl text-lg">College Buddies</h1>
        <button className="bg-violet px-4 py-2 rounded-full md:text-lg text-sm font-semibold">
          Contact Us
        </button>
      </div>
      <hr className="border-zinc-500 border-0.5" />
      <div className="flex md:flex-row flex-col space-y-8 md:space-y-0  justify-between md:child:space-y-0 child:items-center child:text-lg">
        <div>
          <img src="/logo.png" className='mx-auto'/>
        </div>
        <ul className="child:cursor-pointer flex flex-col md:flex-row justify-center items-center md:space-x-8 child:text-center space-y-8">
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
        <div className="child:text-2xl child:cursor-pointer flex flex-row space-x-4 justify-center">
          <BsLinkedin className="hover:text-violet" />
          <BsInstagram className="hover:text-violet" />
          <FaDiscord className="hover:text-violet" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
