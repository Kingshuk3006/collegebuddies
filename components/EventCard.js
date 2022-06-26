import React from 'react';
import {FaDiscord} from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {GrSchedule} from 'react-icons/gr';
import {MdReport} from 'react-icons/md';
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';

const EventCard = ({event}) => {
  console.log (event);
  const [open, setOpen] = React.useState (false);
  const handleOpen = () => setOpen (true);
  const handleClose = () => setOpen (false);
  return (
    <div className="bg-[#242424] md:p-8 p-4 flex flex-col justify-center items-center space-y-8 rounded-2xl border-b-8 border-violet max-w-[75rem] mx-auto relative">
      <h1 className="font-Audiowide md:text-4xl text-2xl text-white">
        {event.eventName}
      </h1>
      <MdReport
        className="text-red-500 text-2xl absolute md:top-0 -top-3 right-7 "
        onClick={handleOpen}
      />
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
            {event.eventAbout}
          </p>
          <div>
            <h1 className="bg-violet text-white font-Audiowide max-w-fit px-4 py-2 rounded-full">
              Tech
            </h1>
          </div>
          <div className="child:flex child:space-x-2 child:font-gillroy flex flex-col space-y-8 child:items-center text-white font-semibold">
            <section>
              <img src="mapmarker.svg" className="w-12" />
              <p>{event.collegeName}, {event.location}</p>
            </section>
            <section>
              <img src="calendar.svg" className="w-12" />
              <p>23/12/2021 - 28/12/2021</p>
            </section>
          </div>
        </section>
      </div>

      <Link href={event.eventLink}>
        <button className="bg-violet text-white px-6 py-2 rounded-md  w-1/2 font-Audiowide hover:bg-gradient-to-r from-violet to-pink-600 duration-300">Know More</button>
      </Link>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#242424]  flex flex-col p-8  space-y-4 md:max-w-fit rounded-xl">
            <h1 className="text-center text-2xl font-Audiowide text-red-500">
              Report
            </h1>
            <div className="text-white text-lg font-gilroy space-y-2">
              <h1>Why do you want to report?</h1>
              <CheckboxLabels />
            </div>

          </div>
        </div>
      </Modal>
    </div>
  );
};

export function CheckboxLabels () {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Wrong Content" />
      <FormControlLabel control={<Checkbox />} label="Request to verify data" />
      <FormControlLabel control={<Checkbox />} label="others" />
    </FormGroup>
  );
}
export default EventCard;
