import React from 'react';
import {FcAbout} from 'react-icons/fc';
import {BsCodeSlash, BsGithub} from 'react-icons/bs';
import {IoEarth} from 'react-icons/io';

const ProjectCard = () => {
  return (
    <div className="flex flex-col max-w-[25rem] mx-auto">

      <div className="bg-[#242424] p-4 flex flex-col items-center space-y-4 rounded-2xl border-b-8 border-violet mx-auto">

        <div className="flex justify-between">
          <h1 className="font-Audiowide text-2xl text-white">
            App Development
          </h1>
        </div>
        <div className=" grid md:grid-cols-1">

          <section className="">

            <div className="child:flex child:space-x-2 child:font-gillroy flex flex-col space-y-4 text-white font-semibold">

              <section>
                <FcAbout className="text-5xl text-violet" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be
                </p>
              </section>
              <section>
                <BsCodeSlash className="text-2xl text-[#9082EC]" />
                <section className="grid grid-cols-3 gap-4">
                  <span>Next JS</span>
                  <span>Next JS</span>
                  <span>Next JS</span>
                </section>
              </section>
            </div>

          </section>
          {/* <div className=" grid md:grid-cols-2 child:space-y-4 space-x-7 mt-5 mx-4">

            <section className="text-white">
              <p className="color-white">Team Members</p>
              <img src="joinee.png" className="w-12" />
            </section>
            <section className="text-white">
              <p className="color-white">Progress</p>
              <p>90%</p>
            </section>

          </div> */}
          <hr className="border-violet text-[1px] my-2" />
          <div className="flex justify-center items-center space-x-16">
            <BsGithub className="text-4xl text-[#9082EC]" />
            <img src="Dribbble.svg" className="" />

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
