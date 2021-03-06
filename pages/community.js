import React from "react";
import Navbar from "../components/Navbar";
import CommunityPersonCard from "../components/CommunityPersonCard";
import { BsSearch } from "react-icons/bs";

const community = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-black">
      <Navbar />
      <h1 className="py-8 child:text-white font-Audiowide md:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#85D3FF] to-[#E584FC] text-center w-full">
        Our Community Members
      </h1>
      <div className="flex justify-center my-8 px-12">
        <label className="relative w-full md:w-fit">
          <BsSearch className="absolute  text-white text-2xl mx-auto top-2.5 left-3" />
          <input
            type="text"
            placeholder="Search by name"
            className="bg-[#242424] rounded-md pl-12 pr-4 py-3 xl:w-[35vw] w-full text-white font-gillroy placeholder:text-zinc-400"
          />
        </label>
      </div>

      <div className="xl:px-16 md:px-12 px-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 py-12">
        {data.map((data, i)=>{
          return <CommunityPersonCard data={data} key={i}/>
        })}
      </div>
    </div>
  );
};

export default community;

export async function getServerSideProps() {
  const res = await fetch("https://collegebuddies-backend.vercel.app/profiles");
  const data = await res.json();

  return {
    props: { data },
  };
}
