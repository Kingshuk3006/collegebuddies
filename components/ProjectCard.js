import React from 'react';
import {FcAbout} from 'react-icons/fc';
import {BsCodeSlash, BsGithub} from 'react-icons/bs';
import {IoEarth} from 'react-icons/io';
import Link from 'next/link';

const ProjectCard = ({project}) => {
  console.log (project);
  return (
    <div className="flex flex-col max-w-[25rem] mx-auto w-full">

      <div className="bg-[#242424] p-4 flex flex-col items-center space-y-4 rounded-2xl border-b-8 border-violet mx-auto">

        <div className="flex justify-between">
          <h1 className="font-Audiowide text-2xl text-white">
            {project.projectName}
          </h1>
        </div>
        <div className=" grid md:grid-cols-1">

          <section className="">

            <div className="child:flex child:space-x-2 child:font-gillroy flex flex-col space-y-4 text-white font-semibold">

              <section>
                <FcAbout className="text-5xl text-violet" />
                <p>
                  {project.projectAbout}
                </p>
              </section>
              <section>
                <BsCodeSlash className="text-2xl text-[#9082EC]" />
                <section className="grid grid-cols-3 gap-4">
                  {project.techStacks.map ((stack, i) => {
                    return <span key={i}>{stack}</span>;
                  })}
                </section>
              </section>
            </div>

          </section>

          <hr className="border-violet text-[1px] my-2" />
          <div className="flex justify-center items-center space-x-16">
            <Link href={project.githubLink}>
              <BsGithub className="text-4xl text-[#9082EC]" />
            </Link>
            <Link href={project.liveLink}>
              <img src="Dribbble.svg" className="" />
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
