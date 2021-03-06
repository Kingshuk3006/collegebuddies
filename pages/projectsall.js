import React from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

const ProjectsAll = ({data}) => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="px-8 md:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto max-w-[1500px] py-8">
        {data.map ((project, i) => {
          return <ProjectCard key={i} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsAll;

export async function getServerSideProps () {
  const res = await fetch ('https://collegebuddies-backend.vercel.app/project');
  const data = await res.json ();

  return {
    props: {data},
  };
}
