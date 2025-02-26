/* eslint-disable react/prop-types */
import { FaGlobe, FaArrowRight } from "react-icons/fa";
import ProjectDetailimage from "./ProjectDetailimage";

export default function ProjectDetail({ project }) {

  return (
    <>
      <div className='grid grid-cols-1 sm:w-[484px] xl:flex md:w-[650px] lg:w-[850px] xl:w-[1200px] xl:h-[500px] items-center justify-center gap-4 m-auto border-2 border-gray-400 bg-gray-700 p-2 m-2 md:p-6 md:mt-6 xl:mt-0 xl:mb-0 md:mb-6  rounded-xl' >
        <div className="images border-2 rounded-lg p-2">
          <ProjectDetailimage images={project.images} />
        </div>
        <div className="infomation flex flex-col justify-start pl-2">
          <h1 className="text-[20px] md:text-2xl font-semibold">{project.title}</h1>
          <p className="lg:flex items-center text-gray-400 text-sm md:text-lg mt-0.5 font-semibold">
            {project.subtitle}
            <span className="flex ml-auto md:text-base">{project.duration}</span>
          </p>
          <p className="lg:flex items-center justify-start text-gray-300 font-semibold md:text-lg mt-2"> <a href={project.link} className="flex items-center text-indigo-300 hover:text-blue-300 hover:animate-pulse transition-opacity duration-500 overflow-hidden" target="_blank"><span className="pr-2"><FaGlobe color="#9999ff" size={"22px"} /> </span> <span className="hidden md:flex pr-1">Website: </span> {project.link} <span className="text-gray-400 pl-2 mt-1 -rotate-45 "><FaArrowRight /></span></a>
            <span className="ml-auto text-sm md:text-base text-gray-400">{project.team}</span>
          </p>
          <ul className="list-disc  text-justify md:text-base ml-6 mt-4 mb-4 mr-2">
            {
              project.info.map((point, index) => {
                return <li key={index}>{point}</li>
              })
            }
          </ul>
          <div className="flex bg-gray-800 text-gray-300 border-2 border-gray-400 -ml-2 p-2 rounded-lg pl-4 pr-4">
            <p className="pr-2 font-bold text-indigo-300">Skills: </p>
            <p> {project.skills}</p>
          </div>
        </div>
      </div>
    </>

  )
}
