import Navbar from "../components/Navbar";
import Button1 from "../components/college page/Button1";
import Button2 from "../components/college page/Button2";
import Ongoing from "../components/Ongoing";
import EventCard from "../components/EventCard";
import styles from "../styles/Home.module.css";
import React from 'react';


export default function College({ title }) {
  return (
    
    <div className="bg-[#000000] h-screen">
      <Navbar />
      <div className="space-y-4 my-8">{/*props will be used here*/}
        <h1 className="font-Audiowide text-4xl text-center w-3/4 mx-auto text-white">
          { title} 
        </h1>
        <div className="flex justify-center space-x-5 py-8">
          <Button1 />
          <Button2 />
          <Button2 />
        </div>
      </div>
      <Ongoing />
      <EventCard />
      
    </div>
  );
}


export async function getStaticProps() {
  const collegeinfo= await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()) 
  //just a placeholder api, will be replaced by database querries
  return {
    props: {
      title: collegeinfo.title,
      id: collegeinfo.id
    } 
  }
}