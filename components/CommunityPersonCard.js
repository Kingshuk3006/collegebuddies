import {data} from 'autoprefixer';
import React from 'react';
import {BsLinkedin, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
import Link from 'next/link';

const CommunityPersonCard = ({data}) => {
  console.log(data)
  return (
    <div className="bg-[#242424] rounded-xl hover:bg-gradient-to-b from-violet via-[#2f1e36] to-[#000000] hover:scale-105 transition-all  ease-in-out flex justify-between py-2 px-4 space-x-4 max-w-[25rem] mx-auto">

      <img src={data.imageUrl} className="w-24 h-24 rounded-full object-cover" />

      <div className=" space-y-2">
        <h1 className="font-Audiowide text-white text-lg">
          {data.name}
        </h1>
        <section className="flex justify-between items-start space-x-2 ">
          <img src="hat.svg" />
          <section className="space-y-2">
            <h1 className="text-white">{data.college}</h1>
            <h2 className="text-violet">{data.stream}</h2>
          </section>
        </section>
        <section className="flex justify-start space-x-8 child:text-2xl child:text-violet">
          <Link href={data.githubLink}>
            <BsGithub />
          </Link>
          <Link href={data.twitterLink}>
            <BsTwitter />
          </Link>
          <Link href={data.linkedinLink}>
            <BsLinkedin />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CommunityPersonCard;
