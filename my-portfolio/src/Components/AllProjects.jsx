import React, { useRef } from 'react'
import { projects } from './Projects'
import ProjectCard from './ProjectCard'

function AllProjects() {
  const projectRef = useRef(null);
  
  return (
    <>
      <div ref={projectRef} className="md:mt-32 mt-10 pt-10">
        <h1 className="text-4xl font-semibold text-center">Projects</h1>
      </div>
      <div className="flex mx-20 justify-center gap-10 flex-wrap">
        {projects.map((project, index)=>{
          return(
            <ProjectCard key={index} src={project.image} title={project.title} href={project.liveLink} gitLink={project.gitLink}/>
          )
        })}
      </div>
    </>
  )
}

export default AllProjects;
