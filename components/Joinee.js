import React from 'react';
import Joineecard from './Joineecard';

const Joinee = () => {
  return (
    <div className='xl:px-36 lg:px-20 md:px-12 px-8 py-8 space-y-8' >
      <h1 className="text-white font-Audiowide md:text-5xl text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#85D3FF] to-[#E584FC]">
        Recent Joinee
      </h1>
      <div className='grid xl:grid-cols-3 gap-8 lg:grid-cols-2 grid-cols-1 place-items-center'>
        <Joineecard/>
        <Joineecard/>
        <Joineecard/>
      </div>
    </div>
  );
};

export default Joinee;
