import Navbar from "../components/Navbar";
import Button1 from "../components/college page/Button1";
import Button2 from "../components/college page/Button2";
import styles from "../styles/Home.module.css";
import React from 'react';
import EventCard from '../components/EventCard'
import ProjectCard from '../components/ProjectCard'
import CommunityPersonCard from "../components/CommunityPersonCard";


export default function activities({data}) {
  return (

    <div className="bg-[#000000]">
      <Navbar />
      <div className="space-y-4 my-8">{/*props will be used here*/}
        <h1 className="font-Audiowide text-4xl text-center w-3/4 mx-auto text-white">
          Ongoing Events
        </h1>
      </div>
      <div className="lg:px-36 md:px-24 px-12 space-y-8">
        {data.map((event, i)=>{
          return <EventCard key={i} event={event}/>
        })}
      </div>


    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://collegebuddies-backend.vercel.app/event");
  const data = await res.json();

  return {
    props: { data },
  };
}