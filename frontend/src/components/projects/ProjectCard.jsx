/* eslint-disable react/prop-types */
import ProjectDetail from "./ProjectDetail";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../../assets/popup.css";

export default function ProjectCard({ project }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Project Card */}
            <div className="popupbutton w-full" onClick={() => setIsOpen(true)}>
                <div className="flex flex-col gap-3 relative min-h-40 h-auto cursor-pointer bg-black/25 border-2 border-gray-500 rounded-xl m-auto p-3 md:p-5 projectcard">
                    <div>
                        <p className="text-lg md:text-xl text-white">{project.title}</p>
                        <p className="text-gray-400 pt-1 pr-6">{project.subtitle}</p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2.5 font-semibold text-gray-200 text-[12px] max-w-[88%]">
                        {project.topskills.map((skill, index) => (
                            <p key={index} className="bg-blue-900 border border-gray-600 shadow-sm px-2.5 py-0.5 sm:py-1 rounded-full shadow-gray-500 hover:shadow-gray-200">
                                {skill}
                            </p>
                        ))}
                    </div>
                    <div className="absolute bottom-4 right-4 pl-1">
                        <div className="arrowcircle flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border-2 rounded-full">
                            <div className="arrow-mark">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-5 md:w-6" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144m124-144H100"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Detail Popup */}
            <AnimatePresence>
                {isOpen && <ProjectDetail project={project} onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </>
    );
}
