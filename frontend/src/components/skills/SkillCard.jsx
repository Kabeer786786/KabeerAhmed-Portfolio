import { programming, dsa, andriodapplication } from "../../constants/skills.js";

export default function SkillCard() {
  return (
    <div className='sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[420px] flex flex-col gap-3' style={{ height: "100%" }} >
      <div className="text-center  bg-black/40 border-2 border-gray-700 mt-4 rounded-lg z-0" style={{ height: "34%" }}>
        <p className='bg-gray-700 text-violet-300 rounded-full w-fit m-auto -mt-4 p-1 pl-4 pr-4 z-100 md:text-lg font-bold'>Programming Languages</p>
        <div className="flex gap-2 items-center justify-center p-4">
          {
            programming.map((programming, index) => {
              return (
              <div key={index} className='cursor-pointer group relative flex text-center p-1 items-center justify-center border-2 border-gray-500 rounded-full w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] overflow-hidden'>
                <img src={programming.icon} loading="lazy" decoding="asynchronous"  className="object-cover opacity-90 group-hover:opacity-20 duration-500 transition-opacity" />
                <p className="absolute font-bold opacity-0 group-hover:opacity-100 duration-500 transition-opacity">{programming.name}</p>
              </div>
              )
            })
          }
        </div>
      </div>
      <div className="bg-black/40 border-2 border-gray-700 mt-4  rounded-lg z-0" style={{ height: "34%" }}>
      <p className='text-center  bg-gray-700 text-violet-300 rounded-full w-fit m-auto -mt-4 p-1 pl-4 pr-4 z-100 md:text-lg font-bold'>Desktop & Andriod Development</p>
        <div className="flex gap-2 items-center justify-center p-4 ">
          {
            andriodapplication.map((andriodapp, index) => {
              return (
              <div key={index} className='cursor-pointer group relative flex text-center p-2 md:p-3 items-center justify-center border-2 border-gray-500 rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] overflow-hidden'>
                <img src={andriodapp.icon} loading="lazy" decoding="asynchronous"  className="object-fit overflow-hidden p-0.5 opacity-90 group-hover:opacity-20 duration-500 transition-opacity" />
                <p className="absolute font-bold opacity-0 group-hover:opacity-100 duration-500 transition-opacity">{andriodapp.name}</p>
              </div>
              )
            })
          }
        </div>
        
      </div>
      <div className="bg-black/40 border-2 border-gray-700 mt-4  rounded-lg z-0" style={{ height: "34%" }}>
      <p className='text-center bg-gray-700 text-violet-300 md:text-lg rounded-full w-fit m-auto -mt-4 p-1 pl-4 pr-4 z-100 font-bold'>Data Structures and Algorithms</p>
        <div className="flex gap-2 items-center justify-center p-4">
          {
            dsa.map((ds, index) => {
              return (
              <div key={index} className='cursor-pointer group relative flex text-center p-2 md:p-3 items-center justify-center border-2 border-gray-500 rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] overflow-hidden'>
                <img src={ds.icon} loading="lazy" decoding="asynchronous"  className="object-cover p-0.5 opacity-90 group-hover:opacity-20 duration-500 transition-opacity" />
                <p className="absolute font-bold opacity-0 group-hover:opacity-100 duration-500 transition-opacity">{ds.name}</p>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}