/* eslint-disable react/prop-types */
import ExperienceCard from "./ExperienceCard";

export default function TimelineResponsive( { jobs }) {
    return (
        <div className="flex flex-col xl:flex-row items-start xl:items-center w-[4px] xl:w-[1000px] xl:h-[520px] lg:m-auto rounded-xl -ml-2 sm:ml-0" >
            <div className="absolute bg-gray-700 w-[4px] h-[100%] xl:h-1 xl:w-full"></div>
            <div className="flex items-center -ml-1">
                <div className="xl:absolute ml-4 sm:ml-6 xl:mb-64 xl:-ml-40">
                    <ExperienceCard job={jobs[0]} />
                </div>
                <div className="absolute w-5 -ml-1 h-5 border-2 border-cyan-500 rounded-full animate-ping"></div>
                <div className="absolute w-3 h-3 bg-cyan-300 rounded-full animate-none"></div>
            </div>
            <div className="flex items-center -ml-1 lg:-ml-[479px] xl:ml-auto">
                <div className="xl:absolute ml-4 sm:ml-6 lg:ml-0 xl:mt-60 xl:-ml-[260px]">
                    <ExperienceCard job={jobs[1]} />
                </div>
                <div className="absolute lg:relative w-5 h-5 lg:-right-[16px] xl:-right-[16px] -ml-2 border-2 border-cyan-500 rounded-full animate-ping"></div>
                <div className="absolute lg:relative w-3 h-3 lg:right-[3px] xl:right-0 bg-cyan-300 rounded-full animate-none"></div>
            </div>
            <div className="flex items-center -ml-1 lg:-ml-1 xl:ml-auto ">
                <div className="xl:absolute ml-4 sm:ml-6 xl:mb-64 xl:-ml-96">
                    <ExperienceCard job={jobs[2]} />
                </div>
                <div className="absolute w-5 -ml-1 lg:-ml-1 xl:-ml-3 h-5 border-2 border-cyan-500 rounded-full animate-ping"></div>
                <div className="absolute w-3 h-3 lg:ml-0  xl:-ml-2 bg-cyan-300 rounded-full animate-none"></div>
            </div>
        </div>
    )
}

// 2