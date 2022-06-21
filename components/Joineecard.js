import React from 'react';
import {BsFillStarFill} from 'react-icons/bs';

const Joineecard = () => {
  return (
    <div className="bg-[#242424] max-w-[22rem] p-8 pt-4 flex flex-col rounded-2xl space-y-4 child:text-center">
      <div>
        <BsFillStarFill className="text-yellow-300 absolute" />
      </div>
      <div className="mx-auto">
        <img
          src="/Avatar.svg"
          className="rounded-full w-[11rem] h-[11rem] mx-auto border-4 border-violet p-1"
        />
      </div>
      <section>
        <h1 className="text-white text-2xl font-gilroy font-medium">
          Joeylene Rivera
        </h1>
        <h1 className="font-xl text-violet font-medium">
          Web Developer
        </h1>
      </section>
      <section className="text-zinc-300">
        <h1>
          A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma
        </h1>
      </section>
      <section>
        <button className="py-2 px-6 bg-violet text-white rounded-md">
          kingsartkar3006@gmail.com
        </button>
        <div />
      </section>
    </div>
  );
};

export default Joineecard;
