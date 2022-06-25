import React from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  return (
    <div className="md:px-36 md:py-8 px-4 py-4">
      <div className="flex justify-between py-4">
        <h1 className="text-white font-Audiowide md:text-5xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#85D3FF] to-[#E584FC]">Featured</h1>
        <img src="/arrow.svg" className='md:w-16 w-8' />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2   gap-8 place-items-center">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
      <div>

      </div>


    </div>
  );
};

export default Featured;
