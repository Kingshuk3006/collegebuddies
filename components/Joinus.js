import React from 'react';

const Joinus = () => {
  return (
    <div className="flex px-36 py-8">
      <div className="text-white flex flex-col justify-between">
        <div className='space-y-8'>
          <h1 className="text-white font-Audiowide text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#85D3FF] to-[#E584FC]">
            Join us
          </h1>
          <h1 className="font-gilroy text-2xl w-3/4 leading-10">
            Join our community and get an opportunity to represent your college !
          </h1>
        </div>

        <div>
          <button className="bg-violet px-16 rounded-xl py-2 text-lg">
            Apply Now &gt;
          </button>
        </div>

      </div>
      <div>
        <img src="/joinusbg.svg" className="w-3/4 mx-auto" />
      </div>

    </div>
  );
};

export default Joinus;
