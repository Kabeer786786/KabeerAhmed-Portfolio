import { aiml, softwaretools } from "../../constants/skills.js"

export default function SkillCard2() {
  return (
    <div className='sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[420px] flex flex-col gap-2' style={{ height: "100%" }} >
      <div className="bg-black/40 border-2 border-gray-700 mt-4 rounded-lg z-0 h-full">
        <p className='text-center  bg-gray-700 text-cyan-200 rounded-full w-fit m-auto -mt-4 p-1 pl-4 pr-4 z-100 md:text-lg font-semibold'>Artificial Intelligence</p>
        <div className="flex flex-wrap gap-2 items-center justify-center p-2 pt-3 pb-3">
        {
            aiml.map((ai, index) => {
              return (
              <div key={index} className='cursor-pointer group relative flex text-center p-2 md:p-3 items-center justify-center border-2 border-gray-500 rounded-full w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] overflow-hidden'>
                <img src={ai.icon} loading="lazy" decoding="asynchronous" className="object-cover opacity-90 group-hover:opacity-20 duration-500 transition-opacity" />
                <p className="absolute font-bold opacity-0 group-hover:opacity-100 duration-500 transition-opacity">{ai.name}</p>
              </div>
              )
            })
          }
        </div>

      </div>
      <div className="bg-black/40 border-2 border-gray-700 mt-4 rounded-lg z-0 h-full">
        <p className='text-center  bg-gray-700 text-cyan-200 rounded-full w-fit m-auto -mt-4 p-1 pl-4 pr-4 z-100 md:text-lg font-semibold'>Software Development Tools</p>
        <div className="flex flex-wrap gap-2 items-center justify-center p-2  pt-4 pb-4">
          {
            softwaretools.map((tool, index) => {
              return (
              <div key={index} className='cursor-pointer group relative flex text-center p-2 items-center justify-center border-2 border-gray-500 rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px] overflow-hidden'>
                <img src={tool.icon}  loading="lazy" decoding="asynchronous"  className="object-cover p-0.5 opacity-90 group-hover:opacity-20 duration-500 transition-opacity" />
                <p className="absolute font-bold opacity-0 group-hover:opacity-100 duration-500 transition-opacity">{tool.name}</p>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}