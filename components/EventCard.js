import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GrSchedule } from 'react-icons/gr';

const EventCard = () => {
  return (
    <div className="bg-[#242424] md:p-8 p-4 flex flex-col justify-center items-center space-y-8 rounded-2xl border-b-8 border-violet max-w-[75rem] mx-auto">
      <div className='flex justify-between my-3'>
        <h1 className="font-Audiowide md:text-4xl text-2xl text-white">
          NASCENT
        </h1>
        <section>
          <img src="calendar.svg" className='w-12' />
          <p>23/12/2021 - 28/12/2021</p>
        </section>
      </div>
      <div className=" grid md:grid-cols-2 child:space-y-4">
        <section className="flex flex-col items-center mx-4">
          <img
            src="collegeevnt.jpg"
            className="md:h-[28rem] h-[20rem] rounded-2xl border-b-4 border-l-4 border-violet pl-4 pb-4"
          />
        </section>
        <section className="mx-4">
          <h1 className="font-Audiowide text-2xl text-violet">About</h1>
          <p className=" text-white text-start md:text-lg text-md">
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur
          </p>
          <div>
            <h1 className="bg-violet text-white font-Audiowide max-w-fit px-4 py-2 rounded-full">
              Tech
            </h1>
          </div>
          <div className="child:flex child:space-x-2 child:font-gillroy flex flex-col space-y-8 child:items-center text-white font-semibold">

            <section>
              <img src="mapmarker.svg" className='w-12' />
              <p>Heritage Institute of Technology</p>
            </section>
          </div>
        </section>
      </div>
      <button className="bg-violet text-white px-6 py-2 rounded-md w-1/2 font-Audiowide hover:bg-gradient-to-r from-violet to-pink-600 duration-300">
        Know More
      </button>
    </div>
  );
};

export default EventCard;
