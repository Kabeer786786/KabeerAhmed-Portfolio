/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaGlobe, FaArrowRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ProjectDetailimage from "./ProjectDetailimage";

export default function ProjectDetail({ project, onClose }) {
  return (
    <div className="fixed inset-0 flex items-start justify-center pt-6 md:pt-8 pb-10 md:pb-20 xl:pb-10 z-50 overflow-auto">
      {/* Background Blur Overlay */}
      <div
        className="fixed w-full h-full inset-0 backdrop-blur transition-opacity"
        onClick={onClose} // Close on clicking outside
      />

      {/* Popup Card */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative grid grid-cols-1 sm:w-[484px] xl:flex md:w-[650px] lg:w-[850px] xl:w-[1200px] xl:h-[500px] items-center justify-center gap-4 border-2 border-gray-400 bg-gray-700 p-4 md:p-6 rounded-xl shadow-xl z-50"
      >
        <button className="absolute bg-red-500 top-0 lg:top-2.5 right-0 lg:right-2.5 p-1.5 md:rounded-lg lg:rounded  text-gray-100 hover:text-gray-800 transition-color duration-300 hover:shadow-lg " onClick={onClose}>
          <FaXmark />
        </button>
        
        {/* Project Image */}
        <div className="images border-2 rounded-lg p-2">
          <ProjectDetailimage images={project.images} />
        </div>

        {/* Project Information */}
        <div className="information flex flex-col justify-start pl-2">
          <h1 className="text-[20px] md:text-2xl font-semibold text-white">{project.title}</h1>
          <p className="lg:flex items-center text-gray-400 text-sm md:text-lg mt-0.5 font-semibold">
            {project.subtitle}
            <span className="flex ml-auto md:text-base">{project.duration}</span>
          </p>
          
          {/* Project Link */}
          <p className="lg:flex items-center justify-start text-gray-300 font-semibold md:text-lg mt-2"> 
            <a href={project.link} className="flex items-center text-indigo-300 hover:text-blue-300 hover:animate-pulse transition-opacity duration-500" target="_blank" rel="noopener noreferrer">
              <span className="pr-2"><FaGlobe color="#9999ff" size="22px" /> </span>
              <span className="hidden md:flex pr-1">Website:</span> {project.link} 
              <span className="text-gray-400 pl-2 mt-1 -rotate-45 "><FaArrowRight /></span>
            </a>
            <span className="ml-auto text-sm md:text-base text-gray-400">{project.team}</span>
          </p>
          
          {/* Project Description */}
          <ul className="list-disc text-justify md:text-base ml-6 mt-4 mb-4 mr-2 text-gray-200">
            {project.info.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          
          {/* Skills */}
          <div className="flex bg-gray-800 text-gray-300 border-2 border-gray-400 -ml-2 p-2 rounded-lg pl-4 pr-4">
            <p className="pr-2 font-bold text-indigo-300">Skills:</p>
            <p>{project.skills}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}