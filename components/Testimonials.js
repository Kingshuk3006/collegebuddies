import React from 'react';
import {FaQuoteLeft} from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div className="lg:px-36 px-8 md:px-20 font-gilroy py-8">
      <h1 className="child:text-white font-Audiowide md:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#85D3FF] to-[#E584FC]">
        Testimonials
      </h1>
      <div className="grid xl:grid-cols-3 grid-rows-2 gap-8 child:bg-gradient-to-b from-violet via-[#3F0B73] to-[#04001F] child:rounded-xl py-10">
        <section className="text-white flex justify-between p-4 xl:col-span-2 max-h-fit">
          <FaQuoteLeft className="absolute text-4xl text-[rgba(255,255,255,0.6)]" />
          <h1 className="mt-12 md:px-8 px-2 text-lg text-zinc-300 py-4 h-fit">
            Really enjoyed the course. I felt like I was getting what you had advertised online and much more!
          </h1>
          <div className="flex flex-col space-y-4 items-center child:text-center justify-end">
            <img src="/Avatar.svg" className="w-32" />
            <h1>
              Fionn Norris
            </h1>
          </div>
        </section>
        <section className="text-white flex xl:flex-col md:flex-row flex-col justify-between p-4 xl:row-span-2">
          <FaQuoteLeft className="absolute text-4xl text-[rgba(255,255,255,0.6)]" />
          <h1 className="mt-12 md:px-8 px-2 text-lg text-zinc-300 py-4">
            I was able to learn a large amount in a short amount of time. The practical nature helped me understand what we were trying to do, and how to achieve it.I was able to learn a large amount in a short amount of time. The practical nature helped me understandThe practical nature helped me understand what we were trying to do, and how to achieve it.
          </h1>
          <div className="child:space-y-4 flex xl:justify-end justify-center items-center child:text-center w-full">
            <div className='flex flex-col items-end justify-center'>
              <img src="/Avatar.svg" className="xl:w-24 w-32" />
              <h1 className='text-center w-full'>
                Fionn Norris
              </h1>
            </div>

          </div>
        </section>
        <section className="text-white flex xl:flex-col md:flex-row flex-col justify-between p-4 xl:col-span-2 items-end">
          <FaQuoteLeft className="absolute text-4xl text-[rgba(255,255,255,0.6)]" />
          <h1 className="mt-12 md:px-8 px-2 text-lg text-zinc-300 py-4">
            Really enjoyed the course. I felt like I was getting what you had advertised online and much more!
          </h1>
          <div className="flex flex-col  space-y-4 items-center child:text-center justify-center md:w-fit w-full">
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
