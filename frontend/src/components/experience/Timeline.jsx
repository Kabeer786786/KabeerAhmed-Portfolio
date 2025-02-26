import ExperienceCard from "./ExperienceCard";
import jobs from "../../constants/experience";

export default function Timeline() {
    
    return (
        <div className="flex items-center ml-48 mr-48 h-1 bg-gray-600 rounded-xl">
            <div className="flex items-center ">
                <div className="absolute mb-60 -ml-40">
                    <ExperienceCard  job={jobs[0]}/> 
                </div>
                <div className="w-5 h-5 -ml-1 border-2 border-cyan-500 rounded-full animate-ping"></div>
                <div className="absolute w-3 h-3 bg-cyan-300 rounded-full animate-none"></div>

            </div>
            <div className="flex items-center ml-auto">
                <div className="w-5 h-5 -ml-1 border-2 border-cyan-500 rounded-full animate-ping"></div>
                <div className="absolute  w-3 h-3 bg-cyan-300 rounded-full animate-none"></div>
                <div className="absolute mt-60" style={{marginLeft:"-260px"}}>
                <ExperienceCard job={jobs[1]}/> 
                </div>
            </div>
            <div className="flex items-center ml-auto -mr-1">
                <div className="absolute mb-60 -ml-96">
                    <ExperienceCard job={jobs[2]}/> 
                </div>
                <div className="w-5 h-5 -ml-1 border-2 border-cyan-500 rounded-full animate-ping"></div>
                <div className="absolute w-3 h-3 bg-cyan-300 rounded-full animate-none"></div>
            </div>
        </div>
    )
}