/* eslint-disable react/prop-types */
import ProjectCard from "./ProjectCard";

export default function ProjectCardList({projects}) {
  
  return (
    <>
    <div id="projectlists" className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:w-[1350px] items-start">
        {projects.map((project, index) => {
           return <ProjectCard key={index} project={project} />
        })}
    </div>
    </>
  )
}
