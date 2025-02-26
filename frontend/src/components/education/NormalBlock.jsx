/* eslint-disable react/prop-types */
import "../../assets/certifications.css"

export default function NormalBlock({edu , index}) {
    return (
        <div className="h-60 xl:h-[236px] flex relative group w-full mx-auto border-1 border-gray-500 rounded-lg edumainblock" >
            <img src={edu.image[index]}  loading="lazy" decoding="asynchronous" alt="Background image" className="w-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity rounded-lg"></div>
            <div className="absolute inset-0 flex items-end justify-center opacity-100  transition-opacity">
                <div className="text-gray-300 text-center w-full bg-black/40 p-2 rounded-lg">
                    <p className="text-white md:text-xl text-start font-bold mb-1">{edu.course[index]}</p>
                    <p className="flex text-sm md:text-base">{edu.college[index]}
                        <span className="ml-auto">{edu.duration[index]}</span>
                    </p>
                    <p className="flex text-sm md:text-base">{edu.location[index]}
                        <span className="ml-auto"> <b>CGPA:</b>  &nbsp; {edu.score[index]}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}