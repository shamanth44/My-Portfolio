import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <>
      <div className="md:mt-40 mt-10">
        <h1 className="text-4xl font-semibold text-center">Projects</h1>
      </div>

      <div className='flex mx-20 justify-center gap-10 flex-wrap'>
      <ProjectCard src="..\public\IMG_6770-01.jpg" title={"Project One"}/>
      <ProjectCard src="..\public\IMG_6770-01.jpg" title={"Project Two"}/>
      <ProjectCard src="..\public\IMG_6770-01.jpg" title={"Project Three"}/>
      </div>
    </>
  )
}

export default Projects
