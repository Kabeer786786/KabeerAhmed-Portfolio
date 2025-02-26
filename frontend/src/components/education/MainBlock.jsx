/* eslint-disable react/prop-types */
import "../../assets/certifications.css"

export default function MainBlock({edu , index}) {
    return (
        <div className="h-60 w-full xl:w-3/5 lg:h-72 xl:h-[480px] rounded-lg relative group edumainblock">
            <img src={edu.image[index]} alt="Descriptive text"  loading="lazy" decoding="asynchronous" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute rounded-lg inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity"></div>
            <div className="absolute w-full inset-0 flex items-end opacity-100 transition-opacity">
                <div className="text-gray-300 flex flex-col w-full bg-black/50 hover:bg-black/60  p-2 md:p-2 lg:p-4  rounded-xl md:m-0.5 lg:m-2">
                    <p className="text-white md:text-xl xl:text-2xl font-semibold mb-1 md:mb-2">{edu.course[index]}</p>
                    <p className="flex text-sm md:text-base  lg:text-xl">{edu.college[index]}
                        <span className="ml-auto">{edu.duration[index]}</span>
                    </p>
                    <p className="flex text-sm md:text-base lg:text-xl mt-0.5">{edu.location[index]}
                        <span className="ml-auto"> <b>CGPA:</b>  &nbsp; {edu.score[index]}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}