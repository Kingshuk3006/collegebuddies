import React from 'react';
import {FaDiscord} from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi';

const EventCard = () => {
  return (
    
    <div className="bg-[#242424] mx-8 grid grid-cols-2 divide-x rounded-2xl font-gilroy ">
        
        <div className='p-8 space-y-4'>
            <div className="flex justify-center">
                <h1 className="text-4xl font-semibold text-white">Nascent</h1>
            </div>
            <div className="flex justify-left">
                <h1 className="text-3xl font-semibold text-violet">About</h1>
            </div>
            <div className="flex justify-left">
                <h3 className="text-xl text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                </h3>
            </div>
            <button className="font-Audiowide text-white bg-violet px-6 py-2 rounded-xl hover:bg-gradient-to-bl from-[#EA4DFB] to-[#2B55E4]">
                Tech
            </button>

            <div className="grid grid-cols-2 divide-x">
                <div>
                    <h1 className="flex justify-start space-x-2 text-white text-lg items-center">
                    <span><HiOutlineLocationMarker className="text-violet text-xl cursor-pointer" /></span>
                    <span>20th July, 2022</span>
                    </h1>
                </div>
                <div>
                    <h1 className="flex justify-start space-x-2 text-white text-lg items-center">
                    <span><HiOutlineLocationMarker className="text-violet text-xl cursor-pointer" /></span>
                    <span>Heritage Institute of Technology</span>
                    </h1>
                </div>
            </div>

        </div>
        <div className='space-y-4'>
            <div class="mt-10 flex justify-center ">
                <img src="/featuredcardimg1.svg" className="w-[25rem] h-[20rem] " />
            </div>
            <div class=" flex justify-center ">
                <button className="text-xl text-white bg-violet px-6 py-2 rounded-xl hover:bg-gradient-to-bl from-[#EA4DFB] to-[#2B55E4]">
                    https://www.heritageit.edu/
                </button>
            </div>
        </div>
        
        

    </div>
  );
};

export default EventCard;
