import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./Projects";
function Projects() {

  const projectRef = useRef(null);
  return (
    <>
      <div ref={projectRef} className="md:mt-32 mt-10 pt-10">
        <h1 className="text-4xl font-semibold text-center"></h1>
      </div>
      <div className="flex mx-20 justify-center gap-10 flex-wrap">
        {projects.map((project)=>{
          return(
            <ProjectCard src={project.image} title={project.title} href={project.liveLink} gitLink={project.gitLink}/>
          )
        })}
      </div>
    </>
  );
}

export default Projects;
