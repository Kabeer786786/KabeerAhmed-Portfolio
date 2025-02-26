import { webdevelopment } from "../../constants/skills.js"

export default function SkillCard3() {
  return (
    <div className="sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[420px] bg-black/40 border-2 border-gray-700 mt-4 rounded-lg z-0" style={{ height: "96%" }}>
        <p className='bg-gray-700 text-lime-100 rounded-full w-fit m-auto -mt-4 p-1 pl-4 pr-4 z-100 md:text-lg  text-center font-semibold'>Full Stack Web Development</p>
        <div className="flex flex-wrap gap-2 items-center justify-center p-2 pt-4">
        {
            webdevelopment.map((webapp, index) => {
              return (
              <div key={index} className='cursor-pointer group relative flex text-center p-2 md:p-3 mt-1.5 items-center justify-center border-2 border-gray-500 rounded-full w-[55px] h-[55px]  md:w-[85px] md:h-[85px] overflow-hidden'>
                <img src={webapp.icon}  loading="lazy" decoding="asynchronous" className="object-cover p-0.5 opacity-90 group-hover:opacity-20 duration-500 transition-opacity" />
                <p className="absolute font-bold opacity-0 group-hover:opacity-100 duration-500 transition-opacity">{webapp.name}</p>
              </div>
              )
            })
          }
        </div>
    </div>
  )
}