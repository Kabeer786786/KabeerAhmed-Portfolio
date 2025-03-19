import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Contactbtn } from "../../assets/menubtn";
import { Contactbtnres } from "../../assets/resmenubtn";
import { FaFileDownload, FaUserTie, FaEye, FaTimes, FaGithub, FaLinkedin, FaBusinessTime, FaEnvelope } from "react-icons/fa";

import "../../assets/certifications.css";
import { IoLogoYoutube } from "react-icons/io";

export default function TitleInfo() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleResumeAction = () => setShowResumeModal(true);
  const handleAboutMe = () => setShowAboutModal(true);

  const handleDownload = () => {
    const pdfUrl = "./KabeerResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "KabeerResume.pdf";
    link.click();
    setShowResumeModal(false);
  };

  const handleView = () => {
    const pdfUrl = "./KabeerResume.pdf";
    window.open(pdfUrl, "_blank");
    setShowResumeModal(false);
  };

  return (
    <div className="w-full h-full lg:w-1/2 flex flex-col items-center justify-center m-auto lg:text-start gap-6 p-4 pt-0 md:p-10 md:pt-0 xl:p-0 lg:mt-12 xl:mt-auto">
      <div className="flex flex-col gap-5">
        <p className="text-xl md:text-3xl lg:text-2xl xl:text-4xl">Myself,</p>
        <h1 className="text-3xl md:text-5xl lg:text-3xl xl:text-6xl -mt-3 xl:mt-0 font-bold lg:font-semibold">
          Shaik Kabeer Ahmed
        </h1>
        <h1 className="text-xl md:text-4xl lg:text-2xl xl:text-4xl text-cyan-500 -mt-4 xl:mt-0 font-semibold">
          <ReactTyped
            strings={["AI and ML Engineer", "Full-Stack Web Developer", "MERN Stack Developer", "Python Developer"]}
            typeSpeed={60}
            backSpeed={70}
            loop
          />
        </h1>
        <p className="md:text-lg lg:text-base xl:text-xl -mt-2 xl:mt-0 text-justify">
          Versatile AI and ML beginner with practical experience in predictive modeling, analysis, and generative AI
          projects. Eager to apply my knowledge and skills to solve real-world challenges, including accessibility
          issues.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center -mt-2 xl:mt-0 xl:gap-6 gap-3 text-xl md:text-2xl lg:text-xl xl:text-2xl">
        <button
          onClick={handleAboutMe}
          className="connectbtn1  md:block lg:hidden xl:block border-2 p-1.5 pl-3 pr-3 md:pl-6 md:pr-6 rounded-xl hover:scale-110 transition-scale duration-500"
        >
          About me
        </button>
        <button
          onClick={screen.width > 700 ? Contactbtn : Contactbtnres}
          className="connectbtn2 flex items-center justify-center gap-3 border-2 p-1.5 pl-3 pr-3 md:pl-6 md:pr-6 rounded-xl hover:scale-110 transition-scale duration-500"
        >
          Hire me <FaUserTie className="w-[14px] md:w-[20px]" />
        </button>
        <button
          onClick={handleResumeAction}
          className="connectbtn3 flex items-center justify-center gap-3 border-2 p-1.5 pl-3 pr-3 md:pl-6 md:pr-6 rounded-xl hover:scale-110 transition-scale duration-500"
        >
          Resume <FaFileDownload className="w-[14px] md:w-[18px]" />
        </button>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 bg-[#001524] bg-opacity-90 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative bg-[#001524] border-2 border-gray-500 p-4 py-8 md:p-6 md:py-10 rounded-lg max-w-80 md:max-w-96  shadow-lg text-center">
                <p className="text-gray-100 text-xl mb-6">Would you like to download or view the resume?</p>
                <div className="flex justify-center gap-4">
                  <button onClick={handleDownload} className="bg-cyan-500/80 w-32 text-white justify-center font-semibold px-4 py-1.5 md:py-2 rounded-lg flex items-center gap-2 hover:bg-cyan-700 transition">
                    <FaFileDownload /> Download
                  </button>
                  <button onClick={handleView} className="bg-purple-500/80 w-32 text-white justify-center font-semibold px-4 py-1.5 md:py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition">
                    <FaEye /> View
                  </button>
                </div>
                <button onClick={() => setShowResumeModal(false)} className="p-1 rounded absolute right-1 bg-red-500 top-1 text-gray-700 hover:text-gray-900 flex items-center gap-2">
                  <FaTimes />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* About Me Modal */}
      <AnimatePresence>
        {showAboutModal && (
          <div className="absolute inset-0 bg-[#001524] bg-opacity-90 flex justify-center z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="mb-20"
            >
              <div className="relative bg-[#001524] border-2 border-gray-500 mt-8 p-4 py-8 md:p-6 md:py-8 rounded-lg max-w-80 md:max-w-[600px] lg:max-w-[1000px] shadow-lg">
                <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-2 mb-6">
                  <h2 className="text-white text-3xl font-semibold">About Me</h2>
                  <div className="flex justify-center gap-4">
                    <FaBusinessTime size={27} className="text-white hover:text-gray-400 transition" />
                    <IoLogoYoutube size={26} className="text-white hover:text-gray-400 transition" />
                    <FaEnvelope size={26} className="text-white hover:text-gray-400 transition" />
                    <FaLinkedin size={26} className="text-white hover:text-gray-400 transition" />
                    <FaGithub size={26} className="text-white hover:text-gray-400 transition" />

                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-4 text-justify">
                  I am Shaik Kabeer Ahmed, a passionate AI and ML enthusiast with a strong foundation in full-stack web development. Proficient in the MERN stack, Python, Java, and PHP with MySQL, I have hands-on experience in developing innovative projects that blend AI with real-world applications. From building autonomous AI models and secure encrypted communication systems to creating dynamic learning platforms, I thrive on solving complex problems using technology. My expertise extends to React Native for mobile development, and I am currently leading the development of Sprnt, an online printing and stationery business app incubated at G&nbsp;Pulla Reddy Engineering College.
                </p>
                <p className="text-gray-300 text-lg mb-4 text-justify">
                  Beyond software development, I am deeply invested in AI-driven innovations, such as doodle recognition models, secure messaging systems, and AI-powered personalized learning platforms. I enjoy collaborating on projects that push technological boundaries, whether it&apos;s integrating real-time chat features with WebSockets or enhancing user experiences with interactive UI/UX designs. My goal is to continuously innovate, create, and contribute to the tech community while exploring new advancements in machine learning and AI.
                </p>

                <button onClick={() => setShowAboutModal(false)} className="p-1 rounded absolute right-1 bg-red-500 top-1 text-gray-700 hover:text-gray-900 flex items-center gap-2">
                  <FaTimes />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
