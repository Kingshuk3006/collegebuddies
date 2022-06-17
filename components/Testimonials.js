import React from 'react';
import {FaQuoteLeft} from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div className="px-36 font-gilroy py-8">
      <h1 className="child:text-white font-Audiowide text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#85D3FF] to-[#E584FC]">
        Testimonials
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-8 child:bg-gradient-to-b from-violet via-[#3F0B73] to-[#04001F] child:rounded-xl py-10">
        <section className="text-white flex justify-between p-4 col-span-2 ">
          <FaQuoteLeft className="absolute text-4xl text-[rgba(255,255,255,0.6)]" />
          <h1 className="mt-12 px-8 text-xl py-4">
            Really enjoyed the course. I felt like I was getting what you had advertised online and much more!
          </h1>
          <div className="flex flex-col space-y-4 items-center child:text-center justify-end">
            <img src="/Avatar.svg" className="w-32" />
            <h1>
              Fionn Norris
            </h1>
          </div>
        </section>
        <section className="text-white flex flex-col justify-between p-4 row-span-2">
          <FaQuoteLeft className="absolute text-4xl text-[rgba(255,255,255,0.6)]" />
          <h1 className="mt-12 px-8 text-xl py-4">
            I was able to learn a large amount in a short amount of time. The practical nature helped me understand what we were trying to do, and how to achieve it.I was able to learn a large amount in a short amount of time. The practical nature helped me understandThe practical nature helped me understand what we were trying to do, and how to achieve it.
          </h1>
          <div className="child:space-y-4 flex justify-end child:text-center">
            <div>
              <img src="/Avatar.svg" className="w-24" />
              <h1>
                Fionn Norris
              </h1>
            </div>

          </div>
        </section>
        <section className="text-white flex justify-between p-4 col-span-2 ">
          <FaQuoteLeft className="absolute text-4xl text-[rgba(255,255,255,0.6)]" />
          <h1 className="mt-12 px-8 text-xl py-4">
            Really enjoyed the course. I felt like I was getting what you had advertised online and much more!
          </h1>
          <div className="flex flex-col space-y-4 items-center child:text-center justify-end">
            <img src="/Avatar.svg" className="w-32" />
            <h1>
              Fionn Norris
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
