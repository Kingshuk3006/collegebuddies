import React from 'react';
const ProjectCard = () => {
    return (
        <div className="flex flex-col">
        
            <div className="rounded-full bg-violet h-[6rem] w-[6rem]">
                <section>
                    <img
                        src="mobile-screen-solid.svg"
                        className="h-[5rem] w-[6rem]  pt-6 px-3"
                    />
                </section>
            </div>
        
            <div className="bg-[#242424] md:p-8 p-4 flex flex-col justify-center items-center space-y-8 rounded-[50px] border-b-8 border-violet max-w-[75rem] mx-auto">
      
                    <div className='flex justify-between mt-12'>
                        <h1 className="font-Audiowide md:text-4xl text-2xl text-white">
                            App Development
                        </h1>
                </div>
                <div className=" grid md:grid-cols-1 child:space-y-4">
            
                    <section className="mx-4">
                        
                        <div className="child:flex child:space-x-2 child:font-gillroy flex flex-col space-y-8 child:items-center text-white font-semibold">
        
                            <section>
                                <img src="mapmarker.svg" className='w-11' />
                                <p>Marketing Team</p>
                            </section>
                            <section>
                                <img src="calendar.svg" className='w-11' />
                                <p>1 Week Left</p>
                            </section>
                        </div>

                    </section>
                    <div className=" grid md:grid-cols-2 child:space-y-4 space-x-7 mt-5 mx-4">
                        
                            <section className="text-white">
                                <p className="color-white">Team Members</p>
                                <img src="joinee.png" className='w-12' />
                            </section>
                            <section className="text-white">
                                <p className="color-white">Progress</p>
                                <p>90%</p>
                            </section>
                        

                    </div>
                </div>
        
            </div>
        </div>
    );
  };
  
  export default ProjectCard;