import React from 'react';
import {BsFillStarFill} from 'react-icons/bs';

const Joineecard = () => {
  return (
    <div className="bg-[#242424] max-w-fit p-4 flex flex-col">
      <div>
        <BsFillStarFill className="text-yellow-300" />
      </div>
      <div className="relative">
        <img src="/Avatar.svg" className="rounded-full w-[12rem]" />
        <img src="/Ellipse.svg" className="absolute -top-3 -right-2.5" />
      </div>
      <section>
        <h1>
          Joeylene Rivera
        </h1>
        <h1>
          Web Developer
        </h1>
      </section>
      <section>
        <h1>
          A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma
        </h1>
      </section>
      <section>
        <button className='py-2 px-6 '>kingsartkar3006@gmail.com</button>
        <div>
            
        </div>
      </section>
    </div>
  );
};

export default Joineecard;
