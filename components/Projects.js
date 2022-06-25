import Link from 'next/link';
import React from 'react';
import {BsGithub} from 'react-icons/bs';

const Projects = () => {
  return (
    <div className="bg-[#242424] rounded-xl flex flex-col space-y-4 max-w-[30rem] text-white p-2">
      <h1>College Buddies</h1>
      <h1>
        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be
      </h1>
      <section>
        <span>Android Development</span>
      </section>
      <Link href="#">
        <a>
          cnmvb.cmwfh.vcwjf
        </a>
      </Link>
      <section>
        <BsGithub />
      </section>
    </div>
  );
};

export default Projects;
