/* eslint-disable react/prop-types */

export default function ExperienceCard({ job }) {
    let display = () => {
        const id = document.getElementById(job.id);

        if (id.style.maxHeight === "0px" || !id.style.maxHeight) {
            id.style.maxHeight = id.scrollHeight + "px"; // Smooth expand
            id.style.opacity = "1"; // Fade in
        } else {
            id.style.maxHeight = "0px"; // Smooth collapse
            id.style.opacity = "0"; // Fade out
        }
    };

    return (
        <div className="flex group rounded-xl w-[330px] min-[420px]:w-[375px] sm:w-[450px] md:w-[550px] lg:w-[460px] xl:w-[550px]">
            <div className="inset-0 bg-gradient-to-t from-black to-transparent opacity-60 transition-opacity"></div>
            <div className="w-full inset-0 flex opacity-100 transition-opacity">
                <div onMouseEnter={display} className="flex cursor-pointer flex-col w-full bg-black/25 border-2 border-gray-600 text-white p-3 md:p-6 md:pt-4 md:pb-4 rounded-xl m-2 mr-3 sm:mr-2 experiencecard">
                    <p className=" flex items-center sm:text-lg lg:text-2xl sm:font-semibold">
                        {job.company}
                        <span className=" ml-auto text-sm md:text-base lg:text-lg">{job.date}</span>
                    </p>
                    <p className="flex items-center text-sm md:text-lg text-gray-400 font-semibold">
                        {job.role}
                        <span className="ml-auto text-sm md:text-base lg:text-lg">{job.location}</span>
                    </p>
                    <p id={job.id} className="transition-all ease-in-out duration-300 text-justify text-sm md:text-base pt-1 mt-2 border-t-2 border-gray-600 overflow-hidden" style={{ maxHeight: "0px", opacity: 0, transition: "all 0.5s ease-in-out",}}>
                         {job.info}
                    </p>
                </div>
            </div>
        </div>
    );
}
