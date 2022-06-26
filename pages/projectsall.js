import React from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

const projectArr = [...Array (20)].map ((_, i) => {
  return <ProjectCard key={i}/>;
});
console.log (projectArr);

const ProjectsAll = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <div className='px-8 md:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto max-w-[1500px] py-8'>
        {projectArr.map ((_, i) => {
          return <ProjectCard key={i}/>;
        })}
      </div>
    </div>
  );
};

export default ProjectsAll;
