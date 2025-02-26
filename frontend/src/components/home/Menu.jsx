import { useEffect } from "react";
import { Homebtn, Educationbtn, Experiencebtn, Projectsbtn, Contactbtn, Achievementsbtn, Certificationsbtn, Skillsbtn } from "../../assets/menubtn.js";
import { MdOutlineVerified, MdOutlineWorkHistory } from "react-icons/md";
import "../../assets/styles.css";
export default function Menu() {
  let styles = {
    overflow: "hidden",
    transition: `${.60}s cubic-bezier(${.28}, -${.03}, ${0}, ${.99})`,
    width: "27px",
  }
  let infostyles = {
    overflow: "hidden",
    opacity: 0,
    transform: `translateY(${30}px)`,
    transitionDelay: `${.6}s`,
    transition: `all ${.9}s ease`,
  }
  useEffect(() => {
    Homebtn();
  }, [])
  return (
    <div className="fixed p-1.5 text-2xl border-2 border-gray-300 bg-gray-900 rounded-full bottom-5 z-10">
      <div className="flex gap-2 rounded-full font-semibold">

        <div id="home" onClick={() => Homebtn()} className="card cursor-pointer flex gap-2 m-auto rounded-full bg-gray-600 home " style={styles}>
            <div className="innercard rounded-full bg-cyan-600 p-2">
            <p className="hoverbutton">Home</p>
              <svg className="h-[28px] w-[29px] m-auto p-[1px]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><rect x="4" y="4" width="16" height="4" rx="1" /><rect x="4" y="12" width="6" height="8" rx="1" /><line x1="14" y1="12" x2="20" y2="12" /><line x1="14" y1="16" x2="20" y2="16" /><line x1="14" y1="20" x2="20" y2="20" /></svg>
            </div>
          <span id="homeinfo" className="pr-4 menubtns" style={infostyles}>Home</span>
        </div>

        <div id="education" onClick={() => Educationbtn()} className="card cursor-pointer flex gap-2 m-auto rounded-full bg-gray-600 education" style={styles}>
          <div className="innercard rounded-full bg-cyan-600 p-2">
            <p className="hoverbutton">Education</p>
            <svg className="h-[28px] w-[29px] p-[4px]" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" /></svg>
          </div>
          <span id="eduinfo" className="pr-4 hidden menubtns" style={infostyles}>Education</span>
        </div>

        <div id="experience" onClick={() => Experiencebtn()} className="card cursor-pointer flex gap-2 m-auto rounded-full bg-gray-600 experience" style={styles}>
          <div className="innercard rounded-full bg-cyan-600 p-2">
            <p className="hoverbutton hover:none">Experience</p>
            <MdOutlineWorkHistory className="h-[28px] w-[29px] m-auto p-[2px]"/>
          </div>
          <span id="expinfo" className="pr-4 hidden menubtns" style={infostyles}>Experience</span>
        </div>

        <div id="projects" onClick={() => Projectsbtn()} className="card cursor-pointer flex gap-2  m-auto rounded-full bg-gray-600 projects" style={styles}>
          <div className="innercard rounded-full bg-cyan-600 p-2">
            <p className="hoverbutton">Projects</p>
            <svg className="h-[28px] w-[29px] m-auto p-[1px]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="12 4 4 8 12 12 20 8 12 4" />  <polyline points="4 12 12 16 20 12" />  <polyline points="4 16 12 20 20 16" /></svg>
          </div>
          <span id="proinfo" className="pr-4 hidden menubtns" style={infostyles}>Projects</span>
        </div>

        <div id="skills" onClick={() => Skillsbtn()} className="card cursor-pointer flex gap-2  m-auto rounded-full bg-gray-600 skills" style={styles}>
          <div className="innercard rounded-full bg-cyan-600 p-2">
            <p className="hoverbutton">Skills</p>
            <svg className="h-[28px] w-[29px] m-auto p-[1px]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7" />  <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />  <line x1="9.7" y1="17" x2="14.3" y2="17" /></svg>
          </div>
          <span id="skiinfo" className="pr-4 hidden menubtns" style={infostyles}>Skills</span>
        </div>

        <div id="achievements" onClick={() => Achievementsbtn()} className="card cursor-pointer flex gap-2  m-auto rounded-full bg-gray-600  achievement" style={styles}>
          <div className="innercard rounded-full bg-cyan-600 p-2">
            <p className="hoverbutton">Achievements</p>
            <svg className="h-[28px] w-[29px] m-auto p-[1px]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="17" x2="12" y2="21" />  <line x1="7" y1="4" x2="17" y2="4" />  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />  <circle cx="5" cy="9" r="2" />  <circle cx="19" cy="9" r="2" /></svg>
          </div>
          <span id="achinfo" className="pr-4 hidden menubtns" style={infostyles}>Achievements</span>
        </div>

        <div id="certifications" onClick={() => Certificationsbtn()} className="card cursor-pointer flex gap-2  m-auto rounded-full bg-gray-600 certification" style={styles}>
          <div className="innercard rounded-full bg-cyan-600 p-2">
            <p className="hoverbutton">Certifications</p>
            <MdOutlineVerified className="h-[28px] w-[29px] m-auto p-[1px]" />
          </div>
          <span id="cerinfo" className="pr-4 hidden menubtns" style={infostyles}>Certifications</span>
        </div>

        <div id="contact" onClick={() => Contactbtn()} className="card cursor-pointer flex gap-2  m-auto rounded-full bg-gray-600 contact" style={styles}>
          <div className="innercard rounded-full bg-cyan-600 p-2">
            <p className="hoverbutton">Contact</p>
            <svg className="h-[28px] w-[29px] m-auto p-[3px]" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16L80 64c0-8.8 7.2-16 16-16l288 0zM96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" /></svg>
          </div>
          <span id="coninfo" className="pr-4 hidden menubtns" style={infostyles}>Contact</span>
        </div>
      </div>
    </div>
  )
}
