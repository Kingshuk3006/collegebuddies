import React from 'react';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';

const CommunityPersonCard = () => {
  return (
    <div className="bg-[#242424] rounded-xl hover:bg-gradient-to-b from-violet via-[#2f1e36] to-[#000000] hover:scale-105 transition-all  ease-in-out flex justify-between py-2 px-4 space-x-4">
      
        <img src="/Avatar.svg" className='w-24'/>
    
      <div className=" space-y-2">
        <h1 className="font-Audiowide text-white text-lg">
          Kingshuk Sarkar
        </h1>
        <section className="flex justify-between items-start space-x-2 ">
          <img src="hat.svg" />
          <section className="space-y-2">
            <h1 className="text-white">Heritage Institute of Technology</h1>
            <h2 className="text-violet">CSE (AI-ML)</h2>
          </section>
        </section>
        <section className="flex justify-start space-x-8 child:text-2xl child:text-violet">
          <BsGithub />
          <BsInstagram />
          <BsLinkedin />
        </section>
      </div>
    </div>
  );
};

export default CommunityPersonCard;
