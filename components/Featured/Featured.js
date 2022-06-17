import React from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  return (
    <div className="px-36 py-8">
      <div className="flex justify-between py-4">
        <h1 className="text-white font-Audiowide text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#85D3FF] to-[#E584FC]">Featured</h1>
        <img src="/arrow.svg" className='w-16'/>
      </div>
      <div className="flex justify-between">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>

    </div>
  );
};

export default Featured;
