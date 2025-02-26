import { FaBusinessTime, FaEnvelope, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

export default function TopMenu() {
  return (
    <>
      <div className="flex items-center justify-between m-2 w-full" style={{ maxWidth: "1500px" }}>
        {/* This is Logo */}
        <a href="/">
          <div className="flex items-center justify-center text-3xl md:m-2 lg:mt-2 mb-1 font-semibold gap-2">
            <img src="./logosky.svg" className="w-[50px] h-[50px] md:w-[55px] md:h-[55px] rounded-full" />
            <h1 className="hidden sm:block text-gray-300 ">Kabeer Ahmed ...</h1>
          </div>
        </a>

        {/* This is Social Media Icons */}
        <div className="flex items-center justify-center z-10 gap-2 p-1.5  md:m-2 lg:mt-2 border-2 border-gray-500 text-xl bg-gray-900 rounded-full">
          <a href="https://linkedin.com/in/kabeer786786" className="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 bg-cyan-700 rounded-full" target="_blank"><FaLinkedin cursor={"pointer"} /></a>
          <a href="https://github.com/Kabeer786786" className="flex justify-center items-center  w-8 h-8 md:w-9 md:h-9 bg-cyan-700  rounded-full" target="_blank"><FaGithub cursor={"pointer"} /></a>
          <a href="/" className="flex justify-center items-center  w-8 h-8 md:w-9 md:h-9 bg-cyan-700  rounded-full"><FaLink cursor={"pointer"} /> </a>
          <a href="mailto:shaikkabeerahmed786@gmail.com" className="flex justify-center items-center  w-8 h-8 md:w-9 md:h-9 bg-cyan-700  rounded-full"><FaEnvelope cursor={"pointer"} /></a>
          <a href="https://redhatcoders.tech" target="_blank" className="flex justify-center items-center  w-8 h-8 md:w-9 md:h-9 bg-cyan-700  rounded-full"><FaBusinessTime cursor={"pointer"} /></a>
        </div>
      </div>
    </>
  )
}
