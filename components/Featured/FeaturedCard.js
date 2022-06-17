import React from 'react';
import {FaDiscord} from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi';

const FeaturedCard = () => {
  return (
    <div className="bg-[#242424] max-w-fit rounded-2xl font-gilroy">
      <img src="/featuredcardimg1.svg" className="w-[22rem]" />
      <div className='p-8 space-y-4'>
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-white">Nascent</h1>
          <FaDiscord className="text-2xl text-violet" />
        </div>
        <h1 className="flex justify-start space-x-2 text-white text-lg items-center">
          <span><HiOutlineLocationMarker className="text-violet text-xl cursor-pointer" /></span>
          <span>Heritage Institute of Technology</span>

        </h1>
        <div className='w-full text-center'>
        <button className="font-Audiowide text-white bg-violet px-6 py-2 rounded-xl hover:bg-gradient-to-bl from-[#EA4DFB] to-[#2B55E4]">
          Discover
        </button>
        </div>
        
      </div>

    </div>
  );
};

export default FeaturedCard;
