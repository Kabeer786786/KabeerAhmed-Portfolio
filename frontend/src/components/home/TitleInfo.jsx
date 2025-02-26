import { ReactTyped } from "react-typed";
import { Contactbtn } from "../../assets/menubtn"
import { Contactbtnres } from "../../assets/resmenubtn"
import { FaFileDownload, FaUserTie } from "react-icons/fa";

import "../../assets/certifications.css"

export default function TitleInfo() {
  const handleDownload = () => {
    const pdfUrl = './KabeerResume.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'KabeerResume.pdf'; 
    link.click();
  };

  return (
    <div className="w-full h-full lg:w-1/2 flex flex-col items-center justify-center m-auto lg:text-start gap-6 p-4 pt-0 md:p-10 md:pt-0 xl:p-0 lg:mt-12 xl:mt-auto">
      <div className="flex flex-col gap-5">
        <p className="text-xl md:text-3xl lg:text-2xl xl:text-4xl ">Myself,</p>
        <h1 className="text-3xl md:text-5xl lg:text-3xl xl:text-6xl -mt-3 xl:mt-0 font-bold lg:font-semibold">Shaik Kabeer Ahmed</h1>
        <h1 className="text-xl md:text-4xl lg:text-2xl xl:text-4xl text-cyan-500 -mt-4 xl:mt-0 font-semibold">
          <ReactTyped
            strings={[
              "AI and ML Engineer",
              "Full-Stack Web Developer",
              "MERN Stack Developer",
              "Python Developer",
            ]}
            typeSpeed={60}
            backSpeed={70}
            loop
          />
        </h1>
        <p className="md:text-lg lg:text-base xl:text-xl -mt-2 xl:mt-0  text-justify">Versatile AI and ML beginner with practical experience in predictive modelling, analysis and generative AI projects.
          Eager to apply my knowledge and skills to solve real-world challenges, including accessibility issues.
        </p>
      </div>
      <div className="flex justify-center items-center -mt-2 xl:mt-0  xl:gap-6 gap-3 text-xl md:text-2xl lg:text-xl xl:text-2xl">
        <button className="connectbtn1 hidden md:block lg:hidden xl:block border-2 p-1.5 pl-3 pr-3 md:pl-6 md:pr-6 rounded-xl hover:scale-110 transition-scale duration-500 " ><a href="https://linkedin.com/in/kabeer786786" target="_blank">Connect</a></button>
        <button onClick={(screen.width > 700) ? Contactbtn : Contactbtnres} className="connectbtn2 flex items-center justify-center gap-3 border-2 p-1.5 pl-3 pr-3 md:pl-6 md:pr-6 rounded-xl hover:scale-110 transition-scale duration-500 ">Hire me <FaUserTie  className="w-[14px] md:w-[20px]"  /></button>
        <button onClick={handleDownload} className="connectbtn3 flex items-center justify-center gap-3 border-2 p-1.5 pl-3 pr-3 md:pl-6 md:pr-6 rounded-xl hover:scale-110 transition-scale duration-500  ">Resume <FaFileDownload className="w-[14px] md:w-[18px]" /></button>
      </div>
    </div>
  )
}
